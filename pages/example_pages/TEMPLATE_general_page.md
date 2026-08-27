---
title: Template example
type: Example_pages
contributors: [Bert Droesbeke]
search_exclude: true
sitemap: false
no_robots: true
description: copyable starting point for a metadata-rich example page
page_id: template_example
supported_by: [ELIXIR Europe, BE, SE]
faircookbook:
- name: FAIR Cookbook recipe or collection
  url: https://faircookbook.elixir-europe.org/content/recipes/reusability/miappe.html
dsw:
- name: Is there any pre-existing data?
  uuid: efc80cc8-8318-4f8c-acb7-dc1c60e491c1
training:
  - name: Training in TeSS
    registry: TeSS
    url: https://tess.elixir-europe.org/
  - name: Training material in Zenodo
    registry: Zenodo
    url: https://zenodo.org/
related_pages: 
    Example_pages: [gp2]
---


This hidden template is a copyable starting point for a new general page. It includes common metadata fields, example more information links, training links and a related pages block.

## Before publishing

Replace the title, description, `page_id`, contributors and resource links with values that describe the real page. Keep `search_exclude`, `sitemap` and `no_robots` only when the page should stay out of public search and sitemap output.

### Metadata to review

- `description` should work in section tiles and search previews.
- `page_id` must be unique across the site.
- `supported_by` entries must match records in `_data/supported_by.yml`.
- More information links should point to guidance that helps readers continue from the page topic.
