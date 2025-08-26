---
title: List of page IDs
---


You can generate an overview table listing all pages that have a `page_id` in their frontmatter, grouped per per section. Pages also need to have `search_exclude` **not** *true* in order to be listed. This can be useful for contributors to know what the `page_id` is of a page since this `page_id` is used to list related pages of a page or tagging national tools.

Use following snippet

```
{% raw %}
{% include pageids-overview.html sidebar="main"%}
{% endraw %}
```

Which will render into:

{% include pageids-overview.html sidebar="main" %}


