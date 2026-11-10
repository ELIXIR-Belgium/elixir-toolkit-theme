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
