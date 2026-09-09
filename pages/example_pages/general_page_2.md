---
title: General page 2
type: Example_pages
type_img: /assets/img/ett_compact_logo_bw.svg
page_img: infrastructures/ELIXIR_BELGIUM_white_background.svg 
coordinators: [Bert Droesbeke]
description: shows page and type images together with compact more information links
page_id: gp2
faircookbook:
- name: Example FAIR Cookbook recipe
  url: https://faircookbook.elixir-europe.org/content/recipes/reusability/miappe.html
dsw:
- name: Is there any pre-existing data?
  uuid: efc80cc8-8318-4f8c-acb7-dc1c60e491c1
fairsharing:
- name: ISO 20691
  url: https://fairsharing.org/3533
training:
  - name: Training in TeSS
    registry: TeSS
    url: https://tess.elixir-europe.org/
  - name: Training in Zenodo
    registry: Zenodo
    url: https://zenodo.org/record/7277814
  - name: Training resource
    url: https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/


---

This example focuses on visual page metadata. It has a `type_img` used in section tiles and a `page_img` that appears next to the page title and in page cards. The page also keeps a short set of more information links so the compact version of those sections remains covered.

## A deliberately longer heading for layout checks

Longer headings help demonstrate how page content, anchor links and the table of contents behave when titles wrap. This keeps the example realistic without relying on filler text.

### What to verify

Check that the ELIXIR Belgium page image is visible in the title area, that the compact theme icon is used in section cards and that the more information links still render as separate collapsible groups.
