---
title: News
toc: false
custom_editme: _data/news.yml
---


## Simple example

```
{% raw %}
{% include news.html %}
{% endraw %}
```


Becomes:
{% include news.html %}

## More complex example

```
{% raw %}
{% include news.html title=true truncate=true caption=true caption_url="/about/news" %}
{% endraw %}
```

Becomes:

{% include news.html title=true truncate=true caption=true caption_url="/about/news" %}


### Parameters

* `title`: Visualize *What's new?* as title. Use *true* as value to enable this.
* `caption`: Show the "For more news please visit our news page." by using *true*.
* `caption_url`: Add a custom url if the main news page is not served at */news*
* `truncate`: If longer event descriptions are used and this parameter is set to *true*, descriptions which are longer than 40 words will get collapsed behind a button. 


