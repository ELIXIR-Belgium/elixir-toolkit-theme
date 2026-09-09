---
title: Section overview
toc: false
---

This page shows the full section tile include with search and supporter filtering enabled. More information about section tiles can be found on the [Website sections](website_sections) page.

## Section tiles

Use this snippet:

```liquid
{% raw %}{% include section-navigation-tiles.html type="Example_pages" supported_by=true search=true except="index.md" %}{% endraw %}
```

This renders as:

{% include section-navigation-tiles.html type="Example_pages" supported_by=true search=true except="index.md" %}
