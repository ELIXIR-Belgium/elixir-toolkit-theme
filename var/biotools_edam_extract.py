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
