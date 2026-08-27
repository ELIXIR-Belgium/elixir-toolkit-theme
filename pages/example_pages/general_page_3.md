---
title: General page 3
type: Example_pages
description: demonstrates country-specific resource metadata without a table of contents
country_code: BE
page_id: gp3
toc: false
ref_to_main_resources:
  - bioconda
  - github

national_resources:
  - name: Belgian workflow repository
    description: Example country-level resource with a URL, registry mappings and related pages.
    how_to_access: Available through the public GitHub link listed below.
    instance_of: github
    url: https://github.com
    related_pages:
      Example_pages: [gp5, gp2]
    registry:
      biotools: bioconda
      tess: Bioconda
  - name: National training catalogue
    description: Example resource without an external URL, useful for checking how optional links are hidden.
    how_to_access: 
    instance_of: 
    related_pages:
      Example_pages: [gp5]
  - name: Local support contact
    description: Example resource with only a name and description.
    how_to_access: 
    instance_of: 
related_pages: 
    Example_pages: []

---

This page demonstrates the metadata used for country-specific tools and resources. It links a page to main resources, shows how local resources can point back to related pages and includes registry identifiers that can be rendered in resource tables. It also sets `toc: false`, so no table of contents is shown.

## Resource metadata

The first resource contains the full set of fields: name, description, access information, URL, registry mappings and related pages. The following resources intentionally omit some optional fields so the page can show how the layout behaves when data is incomplete.

### Feature coverage

Use this page to test flags, country metadata, page-level resources, disabled table of contents behaviour and empty optional fields in the resource table.
