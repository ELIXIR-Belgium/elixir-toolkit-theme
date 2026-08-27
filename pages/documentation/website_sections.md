---
title: Website sections
---

When content grows, the need to categorize it grows as well. The theme can categorize pages in the [sidebar](navigation_structures#sidebar) and can also list pages that belong to the same section.

A section is a collection of pages with the same `type`; see [Page mechanics](page_mechanics). Add pages to an overview by tagging them with a type, for example `type: Example_pages`, in the [page metadata](page_mechanics). If you do not want to list pages by type, you can list them manually with the `custom` parameter and comma-separated `page_id` values. The `type` attribute is case-sensitive, and spaces should be replaced with underscores.

{: .tip }
> Use the `type_img` attribute to specify a section/type icon as seen in the *General page 2* tile.


## Section tiles with information

Use this snippet:

```liquid
{% raw %}{% include section-navigation-tiles.html type="Example_pages" supported_by=true search=true except="index.md" %}{% endraw %}
```

This renders as:

{% include section-navigation-tiles.html type="Example_pages" supported_by=true search=true except="index.md" %}

### Parameters

* **`supported_by`**: Turn on filtering by supporter (`true` or `false`).
* **`affiliations`**: Deprecated alias for `supported_by`; it will be removed in ETT v8.0.0.
* **`type`**: Page `type` to list. Use this when you want to show all pages in a section. Use either `type` or `custom`.
* **`search`**: Enable search in the tiles (`true` or `false`).
* **`except`**: Comma-separated list of source file names to hide from the generated tiles, including the file extension. For example: `index.md, TEMPLATE_general_page.md`. Use file names, not page titles or `page_id` values.
* **`col`**: Set the number of section cards per row. Default: `2`.
* **`sort`**: Disable section tile sorting by adding `false`. Default: `true`.
* **`custom`**: Comma-separated list of `page_id` values if you only want to show specific pages. Use either `custom` or `type`.


### Section tiles with custom page order

Use this snippet:

```liquid
{% raw %}{% include section-navigation-tiles.html custom="gp3, gp2" sort=false %}{% endraw %}
```

This renders as:

{% include section-navigation-tiles.html custom="gp3, gp2" sort=false %}


## Section tiles simple

Use this snippet:

```liquid
{% raw %}{% include section-navigation-tiles-simple.html type="Example_pages" %}{% endraw %}
```

This renders as:

{% include section-navigation-tiles-simple.html type="Example_pages" %}

### Parameters

* **`type`**: Page `type` to list. Use this when you want to show all pages in a section. Use either `type` or `custom`.
* **`custom`**: Comma-separated list of `page_id` values if you only want to show specific pages. Use either `custom` or `type`.
* **`except`**: Comma-separated list of source file names to hide from the generated tiles, including the file extension. For example: `index.md, TEMPLATE_general_page.md`. Use file names, not page titles or `page_id` values.
* **`col`**: Set the number of section cards per row. Default: `2`.
* **`sort`**: Disable section tile sorting by adding `false`. Default: `true`.


### Simple tiles with custom page order

Use this snippet:

```liquid
{% raw %}{% include section-navigation-tiles-simple.html custom="gp3, gp2" sort=false %}{% endraw %}
```

This renders as:

{% include section-navigation-tiles-simple.html custom="gp3, gp2" sort=false %}


## A more clever way of tagging pages with a certain type

You can also set these key-value pairs for multiple pages at once in `_config.yml`, as described in the [Jekyll documentation](https://jekyllrb.com/docs/configuration/front-matter-defaults/) on front matter defaults.

Example

```yml
defaults:
  -
    scope:
      path: "pages/data_life_cycle"
    values:
      type: Data_life_cycle

```

This will give all markdown files in the `pages/data_life_cycle` subdirectory the *Data_life_cycle* type. This will be displayed as "Data life cycle".
