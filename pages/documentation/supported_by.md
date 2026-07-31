---
title: Supported by
redirect_from:
  - /logo_page
  - /supported_by_logos
  - /supported_by_overview
---

Supporters can be defined once in `_data/supported_by.yml` and reused across the website. They can be linked to individual pages through front matter or displayed as an overview with an include.

## The main YAML file

Each supporter in `_data/supported_by.yml` consists of the following fields:

* **name**: The name of the supporter. This field is mandatory and must match the names used in page front matter.
* **image_url**: Path or URL to the image shown for the supporter. This field is mandatory when the supporter is displayed in an overview.
* **pid**: The Research Organization Registry (ROR) identifier for the supporter.
* **expose**: Determines whether the supporter is shown by `supported-by-tiles-selection.html` (`true` or `false`).
* **type**: The kind of supporter, for example `funder` or `infrastructure`. This value can be passed to `supported-by-tiles-selection.html` to show only supporters of that type.
* **url**: Link to the supporter's website.

Example:

```yml
- name: ELIXIR CONVERGE
  image_url: /images/funders/converge_logo.svg
  expose: true
  type: funder
  url: https://elixir-europe.org/about-us/how-funded/eu-projects/converge
```

## Adding supporters to a page

Add a `supported_by` list to the page front matter. Organization names must exactly match a `name` in `_data/supported_by.yml`. Two-letter country codes can also be used to display country flags.

```yml
supported_by:
  - ELIXIR Europe
  - BE
  - SE
```

The supporters are shown automatically in the **Supported by** tab in the page metadata.

## Listing supporters

Use `supported-by-tiles-selection.html` without parameters to display all exposed supporters:

```
{% raw %}
{% include supported-by-tiles-selection.html %}
{% endraw %}
```

Becomes:

{% include supported-by-tiles-selection.html %}

### Parameters

* `type`: Show only supporters whose `type` field matches this value. When omitted, all supporter types are shown. Entries must also have an `image_url` and `expose: true`.
* `sort`: Sort supporters alphabetically by `name`. Default: `true`.

For example, the infrastructure entries can be shown with:

```
{% raw %}
{% include supported-by-tiles-selection.html type="infrastructure" %}
{% endraw %}
```

{% include supported-by-tiles-selection.html type="infrastructure" %}
