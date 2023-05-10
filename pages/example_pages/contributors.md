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

### Example with parameters

```
{% raw %}
{% include contributor-tiles-all.html custom="Bert Droesbeke, example contributor" nr=4 %}
{% endraw %}
```

{% include contributor-tiles-all.html custom="Bert Droesbeke, example contributor" nr=4 %}

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
* `nr`: give an integer to specify the number of columns/contributor cards per row.

### Example with parameters

```
{% raw %}
{% include contributor-carousel-selection.html custom="Bert Droesbeke, example contributor" nr=4 %}
{% endraw %}
```

{% include contributor-carousel-selection.html custom="Bert Droesbeke, example contributor" nr=4 %}
