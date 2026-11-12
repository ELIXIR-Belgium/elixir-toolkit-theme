import requests
import sys
from collections.abc import MutableMapping
from pathlib import Path
from ruamel.yaml import YAML
from ruamel.yaml.error import YAMLError
from xml.etree import ElementTree

DATA_FILE = Path(__file__).resolve().parent.parent / "_data" / "tool_and_resource_list.yml"
API_URL = "https://bio.tools/api/tool/{}/?format=json"
EDAM_ONTOLOGY_URL = "https://edamontology.org/EDAM.owl"
REQUEST_TIMEOUT = 10
OWL_NAMESPACE = "http://www.w3.org/2002/07/owl#"
RDF_NAMESPACE = "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
RDFS_NAMESPACE = "http://www.w3.org/2000/01/rdf-schema#"


def load_tool_data(data_path=DATA_FILE):
    """Load the tool list with round-trip YAML support."""
    yaml = YAML()
    try:
        with Path(data_path).open(encoding="utf-8") as source_file:
            data = yaml.load(source_file)
    except (OSError, YAMLError) as error:
        raise ValueError(f"[ERROR] Could not read tool list {data_path}: {error}") from error

    if not isinstance(data, list):
        raise ValueError(f"Expected a list of tools in {data_path}.")

    return yaml, data


def load_biotools_entries(data):
    """Find entries that have a bio.tools registry identifier."""
    entries = []
    for tool in data:
        if not isinstance(tool, MutableMapping):
            continue

        registry = tool.get("registry")
        if not isinstance(registry, MutableMapping) or "biotools" not in registry:
            continue

        identifier = registry.get("biotools")
        if (
                not isinstance(identifier, str)
                or not identifier.strip()
                or identifier.strip().upper() == "NA"
        ):
            name = tool.get("name") or tool.get("id") or "Unnamed tool"
            entries.append((name, None, tool))
            continue

        name = tool.get("name") or tool.get("id") or identifier.strip()
        entries.append((name, identifier.strip(), tool))

    return entries


def _annotations(items, annotation_type):
    if items is None:
        return []
    if not isinstance(items, list):
        raise ValueError(f"bio.tools returned an invalid {annotation_type} list")

    return [
        item
        for item in items
        if isinstance(item, dict)
           and isinstance(item.get("term"), str)
           and isinstance(item.get("uri"), str)
    ]


def _append_unique(annotations, annotation):
    if not any(
            existing["term"] == annotation["term"]
            and existing["uri"] == annotation["uri"]
            for existing in annotations
    ):
        annotations.append(annotation)


def fetch_edam_annotations(identifier, session=requests):
    """Fetch EDAM annotations for a bio.tools identifier."""
    response = session.get(API_URL.format(identifier), timeout=REQUEST_TIMEOUT)
    response.raise_for_status()
    payload = response.json()

    if not isinstance(payload, dict):
        raise ValueError("bio.tools returned an unexpected response format")

    annotations = {
        "topic": [],
        "operation": [],
        "data": [],
        "format": [],
    }
    for topic in _annotations(payload.get("topic", []), "topic"):
        _append_unique(annotations["topic"], topic)
    functions = payload.get("function", [])
    if functions is None:
        functions = []
    if not isinstance(functions, list):
        raise ValueError("bio.tools returned an invalid function list")

    for function in functions:
        if not isinstance(function, dict):
            continue

        for operation in _annotations(function.get("operation", []), "operation"):
            _append_unique(annotations["operation"], operation)

        for direction in ("input", "output"):
            entries = function.get(direction, [])
            if entries is None:
                continue
            if not isinstance(entries, list):
                raise ValueError(f"bio.tools returned an invalid {direction} list")

            for entry in entries:
                if not isinstance(entry, dict):
                    continue
                for annotation_type in ("data", "format"):
                    annotation = entry.get(annotation_type)
                    if annotation is None or not isinstance(annotation, dict):
                        continue
                    if (
                            isinstance(annotation.get("term"), str)
                            and isinstance(annotation.get("uri"), str)
                    ):
                        _append_unique(annotations[annotation_type], annotation)

    return annotations


def _ontology_uri_key(uri):
    """Normalize HTTP and HTTPS variants of an EDAM URI for matching."""
    if uri.startswith("http://edamontology.org/"):
        return uri.replace("http://", "https://", 1)
    if uri.startswith("https://edamontology.org/"):
        return uri
    return None


def fetch_edam_labels(session=requests):
    """Fetch current EDAM labels from the official RDF/XML ontology."""
    response = session.get(EDAM_ONTOLOGY_URL, timeout=REQUEST_TIMEOUT)
    response.raise_for_status()

    try:
        root = ElementTree.fromstring(response.content)
    except (ElementTree.ParseError, TypeError) as error:
        raise ValueError(f"edamontology.org returned invalid RDF/XML: {error}") from error

    labels = {}
    class_tag = f"{{{OWL_NAMESPACE}}}Class"
    about_attribute = f"{{{RDF_NAMESPACE}}}about"
    label_tag = f"{{{RDFS_NAMESPACE}}}label"
    language_attribute = "{http://www.w3.org/XML/1998/namespace}lang"
    for edam_class in root.iter(class_tag):
        uri = edam_class.get(about_attribute)
        key = _ontology_uri_key(uri) if uri else None
        if key is None:
            continue

        candidates = []
        for label in edam_class.findall(label_tag):
            text = (label.text or "").strip()
            if text:
                candidates.append((label.get(language_attribute, "").lower(), text))
        if not candidates:
            continue

        english = next(
            (text for language, text in candidates if language == "en" or language.startswith("en-")),
            None,
        )
        untagged = next((text for language, text in candidates if not language), None)
        labels[key] = english or untagged or candidates[0][1]

    return labels


def annotations_with_current_labels(annotations, labels):
    """Replace bio.tools terms with labels from the current EDAM ontology."""
    updated = {}
    for annotation_type, terms in annotations.items():
        updated[annotation_type] = []
        for annotation in terms:
            key = _ontology_uri_key(annotation["uri"])
            label = labels.get(key) if key else None
            if label is None:
                raise ValueError(f"No current EDAM label found for {annotation['uri']}")
            updated[annotation_type].append({**annotation, "term": label})
    return updated


def keywords_from_annotations(annotations):
    """Convert EDAM annotations into unique label-to-URI keyword mappings."""
    keywords = []
    seen = set()
    for annotation_type in ("topic", "operation", "data", "format"):
        for annotation in annotations[annotation_type]:
            pair = (annotation["term"], annotation["uri"])
            if pair in seen:
                continue
            seen.add(pair)
            keywords.append({annotation["term"]: annotation["uri"]})
    return keywords


def main(data_path=DATA_FILE, session=requests):
    try:
        yaml, data = load_tool_data(data_path)
    except ValueError as error:
        print(error, file=sys.stderr)
        return 1

    changed = False
    ontology_labels = None
    ontology_error = None
    ontology_loaded = False
    for name, identifier, tool in load_biotools_entries(data):
        if identifier is None:
            print(f"[WARN] Skipping {name}: no usable biotools registry identifier.")
            continue

        try:
            annotations = fetch_edam_annotations(identifier, session=session)
        except (requests.RequestException, ValueError) as error:
            print(f"  Error looking up {name}: {error}")
            continue

        if any(annotations.values()):
            if not ontology_loaded:
                ontology_loaded = True
                try:
                    ontology_labels = fetch_edam_labels(session=session)
                except (requests.RequestException, ValueError) as error:
                    ontology_error = error

            if ontology_error is not None:
                print(f"[WARN] Could not verify EDAM labels for {name}: {ontology_error}")
                continue

            try:
                annotations = annotations_with_current_labels(annotations, ontology_labels)
            except ValueError as error:
                print(f"[WARN] Could not verify EDAM labels for {name}: {error}")
                continue

        keywords = keywords_from_annotations(annotations)
        if tool.get("keywords") != keywords:
            tool["keywords"] = keywords
            changed = True

        found_annotations = False
        for annotation_type in ("topic", "operation", "data", "format"):
            terms = annotations[annotation_type]
            if not terms:
                continue
            found_annotations = True
            # print(f"  EDAM {annotation_type.title()}:")
            # for term in terms:
            #     print(f"    {term['term']} ({term['uri']})")

        if not found_annotations:
            print("  No EDAM annotations found.")

    if changed:
        try:
            with Path(data_path).open("w", encoding="utf-8") as output_file:
                yaml.dump(data, output_file)
        except (OSError, YAMLError) as error:
            print(f"Could not update tool list {data_path}: {error}", file=sys.stderr)
            return 1

    return 0


if __name__ == "__main__":
    sys.exit(main())
