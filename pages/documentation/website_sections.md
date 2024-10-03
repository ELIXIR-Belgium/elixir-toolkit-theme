---
title: Website sections
---

When content grows, the need to categorize grows. The theme makes it possible to categorize in the [sidebar](navigation_structures#sidebar), but also to list pages in a nice way that belong to the same section.

A section is simple a collection of pages of the same `type`, see [page mechanics](page_mechanics). Adding the pages you want to list in an overview, can be simply done by tagging them with a type (in the example `type: example_pages`) in the metadata and listing that type using the snippets below.


## Section tiles with information
```
{% raw %}
{% include section-navigation-tiles.html type="example_pages" affiliations=true search=true except="index.md" %}
{% endraw %}
```

Becomes:

{% include section-navigation-tiles.html type="example_pages" affiliations=true search=true except="index.md" %}

### Parameters

* `affiliations`: Turn on filtering by affiliation (`true` or `false`)
* `type`: specify the tiles that are being shown by giving a page type (complimentary to custom).
* `search`: enable search in the tiles (`true` or `false`)
* `except`: `, ` separated list of page file names which should be excluded, including the file extension.
* `col`: give an integer to specify the number of columns/section cards per row. Default: 2.
* `sort`: disable sorting of the section tiles by adding *false*. Default: *true*.
* `custom`: `, ` separated list of page_id's if you only want to show specific pages.


## Section tiles using the custom parameter and without sorting

```
{% raw %}
{% include section-navigation-tiles.html custom="gp3, gp2" sort=false %}
{% endraw %}
```

{% include section-navigation-tiles.html custom="gp3, gp2" sort=false %}


## Section tiles simple

```
{% raw %}
{% include section-navigation-tiles-simple.html type="example_pages" %}
{% endraw %}
```


{% include section-navigation-tiles-simple.html type="example_pages" %}

### Parameters

* `except`: `, ` separated list of page names which should be excluded, including the file extension.
* `col`: give an integer to specify the number of columns/section cards per row. Default: 2.



## A more clever way of tagging pages with a certain type

It is important to know that you can also set the these key-value pairs on multiple pages at the same time by specifying them in the `_config.yml` file as described in the [Jekyll documentation](https://jekyllrb.com/docs/configuration/front-matter-defaults/) using the frontmatter defaults.

Example

```yml
defaults:
  -
    scope:
      path: "pages/data_life_cycle"
    values:
      type: data_life_cycle

```

This will give all markdown files in the `pages/data_life_cycle` subdirectory the *data_life_cycle* type.