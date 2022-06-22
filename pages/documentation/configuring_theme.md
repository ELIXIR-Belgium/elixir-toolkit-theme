---
title: Configuring the theme
---

The `_config.yml` file in the root of your project holds multiple options to configure the theme. These theme variables are all optional and don't have to be included in the _config.yaml file.

## General configurations

```yml
title: ELIXIR toolkit theme
# This appears in the html browser tab for the site title (seen mostly by search engines, not users)

topnav_title: ELIXIR toolkit theme
# Optional: this appears on the top navigation bar next to the main_logo.svg icon

description: "Flexible Jekyll theme using bootstrap 5 as CSS framework."
# Metadata description of the website

dsw_deep_link_prefix:
# prefix for DSW deep links to a certain question

gtag:
# Google analytics tag

plausible: 
# Plausible tag
plausible_src: 
# default: 'https://plausible.io/js/plausible.js

```

## Additional settings

Certain features are not always needed and can be disabled are changed in your deployment. Here we list all options and there default when not specified. Only specify the settings that you want to change 

```yml
theme_variables: 
  git_host: GitHub
  back_to_top: true
  privacy_statement_url: /privacy
  github_buttons: 
    position: top
    edit_me: true
    open_issue: true
    history: true
  toc:
    min_headers: 2
    headers: 'h2'
  topnav:
    brand_logo: assets/img/main_logo.svg
    github: true
    twitter: false
  theme_color: 0d6efd
  fonts:
    - url towards a font
```

More detailed information about these settings can be found here:

* `git_host`: 
* `back_to_top`:
* `privacy_statement_url`: 
* github_buttons: 
  * `position`:
  * `edit_me`:
  * `open_issue`:
  * `history`:
* toc:
  * `min_headers`:
  * `headers`: 
* topnav:
  *  `brand_logo`:
  *  `github`: 
  *  `twitter`: 
* `theme_color`:
* `fonts`:
