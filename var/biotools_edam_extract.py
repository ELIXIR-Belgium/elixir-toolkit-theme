import sys
import argparse
import os
import re
from ruamel.yaml import YAML
import re
import requests
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
import frontmatter
from urllib.parse import urlparse


PAGES_DIR = "pages/example_pages"

def find_tools_in_markdown(text):
    """
    Looks for pattern:
      {% tool "TOOL_ID" ... %}
    and returns the TOOL_ID tokens.
    """
    tools = []
    prev_word = ""
    to_save = False
    for word in text.split():
        if to_save:
            t = word.replace('"', "").replace("'", "")
            if t not in tools:
                tools.append(t)
            to_save = False
        if word == "tool" and "{%" in prev_word:
            to_save = True
        prev_word = word
    return tools

def build_all_tools_list():
    """
    Walk pages, read metadata via frontmatter
    Returns all_tools
    """
    all_tools = []
    for subdir, dirs, files in os.walk(PAGES_DIR):
      for file_name in files:
        if os.path.splitext(file_name)[1] != ".md":
          continue
        if file_name.startswith("TEMPLATE_"): # Skip templates
          continue
        filename_stripped = os.path.splitext(file_name)[0]
        path = os.path.join(subdir, file_name)
        print(f"Reading out {filename_stripped}")
        post = frontmatter.load(path)
        metadata = post.metadata or {}
        # Exclude files with search_exclude=true in the metadata
        exclude = metadata.get("search_exclude", False)
        if str(exclude).strip().lower() == "true":
          print(f"\tPage {path} has search_exclude=true — skipping.")
          continue
        title = metadata.get("title")
        if not title:
            print(f"\tPage {path} has no frontmatter 'title' — skipping.")
            continue
        if isinstance(existing_fs, list) and existing_fs:
            for entry in existing_fs:
                if isinstance(entry, dict) and "url" in entry:
                    existing_record_id = extract_fairsharing_id_from_url(entry["url"])
                if existing_record_id is not None:
                    break

        # Determine tools from the body using post.content
        tools_in_page = find_tools_in_markdown(post.content)
        # Collect tools globally
        for t in tools_in_page:
            if t not in all_tools:
                all_tools.append(t)
        contents = None
        frontmatter_start = None
        frontmatter_end = None
        return all_tools

def main():
    all_tools = build_all_tools_list()
