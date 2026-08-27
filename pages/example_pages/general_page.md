---
title: General page 1
type: Example_pages
contributors: [Bert Droesbeke, Long Example Contributor , Example Contributor, Example Contributor2, Example Contributor3]
coordinators: [Bert Droesbeke] 
editors: [Bert Droesbeke] 
page_citation: true
description: showcases a fully annotated page with contributors, support logos, citations and linked guidance
page_id: gp1
supported_by: [ELIXIR Europe, BE, SE]
faircookbook:
- name: FAIR Cookbook home page
  url: https://faircookbook.elixir-europe.org/
- name: Example FAIR Cookbook recipe
  url: https://faircookbook.elixir-europe.org/content/recipes/reusability/miappe.html
rdmkit:
- name: RDMkit compliance monitoring guidance
  url: https://rdmkit.elixir-europe.org/compliance_monitoring
- name: Data management plan guidance
  url: https://rdmkit.elixir-europe.org/data_management_plan
fairsharing:
- name: ISO 20691
  url: https://fairsharing.org/3533
- name: Browse FAIRsharing standards
  url: https://fairsharing.org/search?fairsharingRegistry=Standard
dsw:
- name: Is there any pre-existing data?
  uuid: efc80cc8-8318-4f8c-acb7-dc1c60e491c1
- name: Has sensitive data been identified?
  uuid: 4c5e2b6d-8f40-4f4a-a32a-8ff5f2a381e6
training:
  - name: Training catalogue in TeSS
    registry: TeSS
    url: https://tess.elixir-europe.org/
  - name: Training materials in Zenodo
    registry: Zenodo
    url: https://zenodo.org/
  - name: ELIXIR Toolkit Theme repository
    url: https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/
summary: A feature-rich example page used to check the metadata panel, generated citation, more information sections and related page tiles.
related_pages: 
    Example_pages: [gp2, gp3]
---


This page is the most complete general page example in the demo site. It combines contributor metadata, page citation, support information, related pages and several external guidance collections. It also mentions {% tool "github" %} in the body text so the tools and resources table can be tested from an inline tag.

## What this page demonstrates

- Contributor, coordinator and editor tabs generated from page metadata.
- Supporter logos loaded from `_data/supported_by.yml`.
- A generated page citation.
- More information sections for FAIR Cookbook, RDMkit, FAIRsharing, DSW and training links.
- Related page tiles connected by `page_id`.

## Suggested use

Use this pattern for documentation pages that need to gather several kinds of supporting material around one topic. The body copy can explain the page goal, while the metadata powers reusable navigation, attribution and contextual resource blocks.

### Review checklist

When changing this example, check that the metadata tabs, related page tiles, more information accordions and tools and resources table still appear. This keeps the page useful as both documentation and a regression test for theme features.
