---
title: General page 7
type: Example_pages
coordinators: [Bert Droesbeke]
description: shows citation metadata and custom GitHub links for a data-backed page
page_id: gp7
page_citation: true
github:
    file_path: _data/tool_and_resource_list.yml
---


This example represents pages whose visible content is maintained in one file while the edit buttons should point to a related data file. The `github.file_path` value sends GitHub actions to `_data/tool_and_resource_list.yml` instead of this Markdown page.

The page also enables `page_citation`, so it can be used to verify generated citation text for pages with coordinators but no contributor list.

Use this scenario for index pages, generated overviews or documentation pages where the most useful edit target is a YAML data source rather than the page shell.
