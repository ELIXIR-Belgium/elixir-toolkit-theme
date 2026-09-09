---
title: Contributors
---

Contributors are defined in two places: the [page metadata](page_mechanics) and the [`CONTRIBUTORS.yml`](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/main/_data/CONTRIBUTORS.yml) file in `_data`.

## Contributor grid

### Default grid

Use this snippet:

```liquid
{% raw %}{% include contributor-tiles-all.html %}{% endraw %}
```

This renders as:

{% include contributor-tiles-all.html %}


### Grid parameters

* **`custom`**: Comma-separated list of contributor names if you only want to show a specific collection of contributors.
* **`role`**: Filter contributors by role. This cannot be combined with `custom`.
* **`sort`**: Disable contributor sorting by adding `false`. Default: `true`.
* **`col`**: Set the number of contributor cards per row. Default: `4`.

### Grid with selected contributors

Use this snippet:

```liquid
{% raw %}{% include contributor-tiles-all.html custom="Example Contributor, Bert Droesbeke" col=3 sort=false %}{% endraw %}
```

This renders as:

{% include contributor-tiles-all.html custom="Example Contributor, Bert Droesbeke" col=3 sort=false %}

## Contributor carousel

### Default carousel

Use this snippet:

```liquid
{% raw %}{% include contributor-carousel-selection.html %}{% endraw %}
```

This renders as:

{% include contributor-carousel-selection.html %}


### Carousel parameters

* **`custom`**: Comma-separated list of contributor names if you only want to show a specific collection of contributors.
* **`role`**: Filter contributors by role. This cannot be combined with `custom`.
* **`sort`**: Disable contributor sorting by adding `false`. Default: `true`.
* **`col`**: Set the number of contributor cards per row. Default: `4`.

### Carousel with selected contributors

Use this snippet:

```liquid
{% raw %}{% include contributor-carousel-selection.html custom="Bert Droesbeke, Example Contributor" col=3 %}{% endraw %}
```

This renders as:

{% include contributor-carousel-selection.html custom="Bert Droesbeke, Example Contributor" col=3 %}
