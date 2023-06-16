---
title: Overview page example
---

Nam non sollicitudin sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas consectetur nulla nec rutrum rhoncus. Sed non urna sem. Maecenas sed lobortis urna, hendrerit aliquet massa. Phasellus felis dui, feugiat ut sapien vel, mattis dictum eros. Suspendisse in felis sit amet dui elementum rutrum tristique eget velit. Sed hendrerit, ante sit amet hendrerit cursus, ante nibh accumsan nibh, vitae rhoncus quam ipsum placerat ante.

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
* `search`: enable search in the tiles (`true` or `false`)
* `except`: `, ` separated list of page file names which should be excluded, including the file extension.
* `col`: give an integer to specify the number of columns/section cards per row. Default: 2.


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

