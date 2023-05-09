---
title: Contributors
toc: false
---

Contributors are defined in two places: the page-metadata and the [CONTRIBUTORS.yml](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/_data/CONTRIBUTORS.yaml) file in `_data`. 

## List all website contributors 

```
{% raw %}
{% include contributor-tiles-all.html %}
{% endraw %}
```


{% include contributor-tiles-all.html %}


## List a selection of contributors

```
{% raw %}
{% include contributor-tiles-all.html custom="Bert Droesbeke" %}
{% endraw %}
```


{% include contributor-tiles-all.html custom="Bert Droesbeke" %}

## List a selection of contributors in a carousel

```
{% raw %}
{% include contributor-carousel-selection.html custom="Bert Droesbeke, Long example contributor"%}
{% endraw %}
```

{% include contributor-carousel-selection.html custom="Bert Droesbeke, Long example contributor"%}

