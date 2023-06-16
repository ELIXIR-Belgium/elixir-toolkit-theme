---
title: Contributors
toc: false
---

Contributors are defined in two places: the page-metadata and the [CONTRIBUTORS.yml](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/_data/CONTRIBUTORS.yaml) file in `_data`. 

## List website contributors in a grid

```
{% raw %}
{% include contributor-tiles-all.html %}
{% endraw %}
```

{% include contributor-tiles-all.html %}


### Parameters

* `custom`: `, ` separated list of contributor names if you only want to show a specific collection of contributors.
* `role`: specify the role of the contributors you want to filter on. This is not combinable with the custom list of contributors.
* `nr`: give an integer to specify the number of columns/contributor cards per row.
* `sort`: disable sorting of contributors by adding *false*. Default: *true*.
* `col`: give an integer to specify the number of columns/contributor cards per row. Default: 5.

### Example with parameters

```
{% raw %}
{% include contributor-tiles-all.html custom="Example Contributor, Bert Droesbeke" col=4 sort=false %}
{% endraw %}
```

{% include contributor-tiles-all.html custom="Example Contributor, Bert Droesbeke" col=4 sort=false %}

## List website contributors in a carousel

```
{% raw %}
{% include contributor-carousel-selection.html %}
{% endraw %}
```


{% include contributor-carousel-selection.html %}


### Parameters

* `custom`: `, ` separated list of contributor names if you only want to show a specific collection of contributors.
* `role`: specify the role of the contributors you want to filter on. This is not combinable with the custom list of contributors.
* `sort`: disable sorting of contributors by adding *false*. Default: *true*.
* `col`: give an integer to specify the number of columns/contributor cards per row. Default: 5.

### Example with parameters

```
{% raw %}
{% include contributor-carousel-selection.html custom="Bert Droesbeke, Example Contributor" col=4 %}
{% endraw %}
```

{% include contributor-carousel-selection.html custom="Bert Droesbeke, Example Contributor" col=4 %}
