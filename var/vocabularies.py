import os
from pathlib import Path
from urllib.parse import quote

import requests
import yaml
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry


# OLS API base URL for fetching ontology terms
OLS_API_URL = "https://www.ebi.ac.uk/ols4/api/ontologies"



def fetch_term_list(ontology, branch):
    """Fetch the current term list for this ontology branch."""
    session = requests.Session()
    retry = Retry(
        total=3,
        backoff_factor=2,
        status_forcelist=(429, 500, 502, 503, 504),
        allowed_methods=("GET",),
    )
    session.mount("https://", HTTPAdapter(max_retries=retry))
    

    encoded_branch = quote(quote(branch, safe=""), safe="")
    API_CALL = OLS_API_URL + f"/{ontology}/terms/{encoded_branch}/hierarchicalDescendants"

    try:
        response = session.get(API_CALL, timeout=30)
        response.raise_for_status()
        terms = response.json()
    except requests.RequestException as error:
        raise RuntimeError("Could not fetch the term list") from error
    except ValueError as error:
        raise RuntimeError("Term list response was not valid JSON") from error

    if not isinstance(terms, dict):
        raise RuntimeError("Term list response was not a dictionary")

    return terms.get("_embedded", {}).get("terms", [])


def term_mapping(current_terms):

    term_list = fetch_term_list(current_terms["ontology"], current_terms["branch"])


    # """Return a mapping of term IDs to term labels."""

    for term in term_list:
        if not isinstance(term, dict):
            continue

        term_id = term.get("obo_id")
        label = term.get("label")
        exists = False
        
        if isinstance(term_id, str) and isinstance(label, str):
            for ct in current_terms.get("terms", []):
                if ct["curie"] == term_id:
                    if ct["label"] != label:
                        ct["label"] = label
                        print(f"Updated label for existing term {label}")
                    exists = True
                    break
            if not exists:
                current_terms["terms"].append({"id": label.replace(" ", "_"), "curie": term_id, "label": label})
            

    return current_terms


def main():
    file_path = Path(os.environ.get("VOCAB_OUTPUT_PATH", "../_data/vocabularies.yml"))

    print("----> Fetching vocabularies")

    # print("----> Writing vocabulary terms")
    with file_path.open("r+", encoding="utf-8") as yaml_file:
        vocabularies = yaml.safe_load(yaml_file)
        updated_vocabularies = []
        for vocabulary in vocabularies:
            updated_vocabulary = term_mapping(vocabulary)
            updated_vocabularies.append(updated_vocabulary)

        yaml_file.seek(0)
        yaml.safe_dump(updated_vocabularies, yaml_file, allow_unicode=True, sort_keys=False)
        yaml_file.truncate()

        print(f"----> YAML with {len(updated_vocabularies)} vocabularies was dumped successfully")


if __name__ == "__main__":
    main()
