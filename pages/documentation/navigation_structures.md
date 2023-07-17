---
title: Navigation structure
contributors: [Bert Droesbeke]
---

The theme tries to minimize the need to change html code as much as possible, and for the top navigation, sidebar and footer, this is not different. These navigation structures are all defined by YAML as  explained below.

## Top navigation

The top navigation links are defined by the the `/_data/topnav.yml` file under the `subitems:` object. Components like search, Github (or GitLab) and main logo are rendered by default and can not be changed.

```yml
subitems:
- title: Home
  url: /
```

Dropdown can be added in a similar way by nesting subitems:

```yml
subitems:
- title: Example dropdown
  subitems:
  - title: Events
    url: /events
```

External urls can be specified using:

```yml
subitems:
- title: Home
  external_url: https://example.url
```

{% include callout.html type="important" content="Make sure the given url follows the exact structure of the url your page is rendering to." %}

Certain elements have options in the `/_config.yml` file as described in the [configuring theme](configuring_theme) page. Style customizations are described in the [custom branding](custom_branding#branding-in-the-top-navigation) page.

## Sidebar


## Top navigation and sidebar relationship


## Footer


