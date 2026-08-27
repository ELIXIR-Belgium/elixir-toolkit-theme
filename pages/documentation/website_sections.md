---
title: Website sections
---

When content grows, the need to categorize grows. The theme makes it possible to categorize in the [sidebar](navigation_structures#sidebar), but also to list pages in a nice way that belong to the same section.

A section is a collection of pages of the same `type`, see [page mechanics](page_mechanics). Adding the pages you want to list in an overview can be done by tagging them with a type (in the example below `type: Example_pages`) in the [page metadata](page_mechanics). If you do not want to list pages using their type, you can also manually list them using the `custom` parameter and listing the `page_id`s in a comma-separated way. Be aware that the type attribute is case-sensitive and spaces should get replaced with an underscore "_".

{: .tip }
> Use the `type_img` attribute to specify a section/type icon as seen in the *General page example 2* tile.


## Section tiles with information
```
{% raw %}{% include section-navigation-tiles.html type="Example_pages" supported_by=true search=true except="index.md" %}{% endraw %}
```

Becomes:

{% include section-navigation-tiles.html type="Example_pages" supported_by=true search=true except="index.md" %}

### Parameters

* `supported_by`: Turn on filtering by supporter (`true` or `false`).
* `affiliations`: Deprecated alias for `supported_by`; it will be removed in ETT v8.0.0.
* `type`: Page `type` to list. Use this when you want to show all pages in a section. Use either `type` or `custom`.
* `search`: enable search in the tiles (`true` or `false`)
* `except`: `, ` separated list of source file names to hide from the generated tiles, including the file extension. For example: `index.md, TEMPLATE_general_page.md`. Use file names, not page titles or `page_id`s.
* `col`: give an integer to specify the number of columns/section cards per row. Default: 2.
* `sort`: disable sorting of the section tiles by adding *false*. Default: *true*.
* `custom`: `, ` separated list of `page_id` values if you only want to show specific pages. Use either `custom` or `type`.


## Section tiles using the custom parameter and without sorting

```
{% raw %}{% include section-navigation-tiles.html custom="gp3, gp2" sort=false %}{% endraw %}
```

{% include section-navigation-tiles.html custom="gp3, gp2" sort=false %}


## Section tiles simple

```
{% raw %}{% include section-navigation-tiles-simple.html type="Example_pages" %}{% endraw %}
```


{% include section-navigation-tiles-simple.html type="Example_pages" %}

### Parameters

* `type`: Page `type` to list. Use this when you want to show all pages in a section. Use either `type` or `custom`.
* `custom`: `, ` separated list of `page_id` values if you only want to show specific pages. Use either `custom` or `type`.
* `except`: `, ` separated list of source file names to hide from the generated tiles, including the file extension. For example: `index.md, TEMPLATE_general_page.md`. Use file names, not page titles or `page_id`s.
* `col`: give an integer to specify the number of columns/section cards per row. Default: 2.
* `sort`: disable sorting of the section tiles by adding *false*. Default: *true*.


## Section tiles simple using the custom parameter

```
{% raw %}{% include section-navigation-tiles-simple.html custom="gp3, gp2" sort=false %}{% endraw %}
```


{% include section-navigation-tiles-simple.html custom="gp3, gp2" sort=false %}


## A more clever way of tagging pages with a certain type

It is important to know that you can also set the these key-value pairs on multiple pages at the same time by specifying them in the `_config.yml` file as described in the [Jekyll documentation](https://jekyllrb.com/docs/configuration/front-matter-defaults/) using the frontmatter defaults.

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
