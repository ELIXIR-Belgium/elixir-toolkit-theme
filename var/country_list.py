import os
from pathlib import Path

import requests
import yaml
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry


# REST Countries' public v1-v4 endpoints were retired in June 2026.  Its v5
# API requires an API key, so use the maintained, public country dataset that
# retains the same `name.common` and `cca2` fields as the old response.
COUNTRIES_URL = "https://raw.githubusercontent.com/mledoze/countries/master/countries.json"
MINIMUM_COUNTRY_COUNT = 200


def fetch_country_list():
    """Fetch and validate the upstream country dataset."""
    session = requests.Session()
    retry = Retry(
        total=3,
        backoff_factor=2,
        status_forcelist=(429, 500, 502, 503, 504),
        allowed_methods=("GET",),
    )
    session.mount("https://", HTTPAdapter(max_retries=retry))

    try:
        response = session.get(COUNTRIES_URL, timeout=30)
        response.raise_for_status()
        countries = response.json()
    except requests.RequestException as error:
        raise RuntimeError("Could not fetch the country list") from error
    except ValueError as error:
        raise RuntimeError("Country list response was not valid JSON") from error

    if not isinstance(countries, list):
        raise RuntimeError("Country list response was not an array")

    return countries


def country_mapping(country_list):
    """Return ISO 3166-1 alpha-2 codes mapped to common country names."""
    countries = {}

    for country in country_list:
        if not isinstance(country, dict):
            continue

        name = country.get("name", {}).get("common")
        cca2 = country.get("cca2")
        if isinstance(name, str) and isinstance(cca2, str) and len(cca2) == 2:
            countries[cca2] = name

    if len(countries) < MINIMUM_COUNTRY_COUNT:
        raise RuntimeError(
            f"Country list contained only {len(countries)} valid entries; refusing to overwrite output"
        )

    return dict(sorted(countries.items()))


def main():
    output_path = Path(os.environ.get("COUNTRIES_OUTPUT_PATH", "_data/countries.yml"))

    print("----> Fetching list of countries")
    countries = country_mapping(fetch_country_list())

    print("----> Writing country names based on country ID")
    with output_path.open("w", encoding="utf-8") as yaml_file:
        yaml.safe_dump(countries, yaml_file, allow_unicode=True, sort_keys=False)

    print(f"----> YAML with {len(countries)} countries was dumped successfully")


if __name__ == "__main__":
    main()
