---
title: News
github:
    file_path: _data/news.yml
---


## Examples

### Default news timeline

Use this snippet:

```liquid
{% raw %}{% include news.html %}{% endraw %}
```


This renders as:

{% include news.html %}

### News timeline with title, caption and truncation

Use this snippet:

```liquid
{% raw %}{% include news.html title=true truncate=true caption=true caption_url="/news" %}{% endraw %}
```

This renders as:

{% include news.html title=true truncate=true caption=true caption_url="/news" %}


### Parameters

* **`title`**: Show *What's new?* as a heading (`true` or `false`).
* **`caption`**: Show the "For more news please visit our news page." caption (`true` or `false`).
* **`caption_url`**: Use a custom URL when the main news page is not served at `/news`.
* **`truncate`**: Collapse descriptions longer than 40 words behind a button (`true` or `false`).
* **`limit`**: Limit the number of news items shown.
