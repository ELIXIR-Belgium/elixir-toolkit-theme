---
title: Configuring the theme
---

The `_config.yml` file in the root of your project holds multiple options and variables to configure the theme. They  are stored as key: value pairs and are besides `title`, all optional and don't have to be included in the _config.yaml file if not needed.

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

matomo:
# Matomo domain where Matomo is running

plausible: 
# Plausible tag
plausible_src: 
# default: 'https://plausible.io/js/plausible.js

```

## Additional settings

Certain features are not always needed and can be disabled are changed in your deployment. Here we list all options and their **default** value. Only specify the settings that you want to change 

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
    theme: light
    brand_logo: assets/img/main_logo.svg
    github: true
    twitter: false
  theme_color: 0d6efd
  fonts:
    - url towards a font
```

More detailed information about these settings can be found here:

* `git_host`: This can be **Github** or **GitLab** and customizes the text in the top navigation.
* `back_to_top`: Enables the appearance of the back to top button 
* `privacy_statement_url`: Custom path to the privacy page that contains the privacy statement. This is used to link towards in the cookie banner.
* github_buttons: Buttons that link towards github related.
  * `position`: Can be either **top**, next to the title or **bottom**, under the page content.
  * `edit_me`: Enable the 'propose an edit on this page' button.
  * `open_issue`: Enable the 'open an issue on this page' button.
  * `history`: Enable the 'history of this page' button.
* toc: Settings related to the table of contents.
  * `min_headers`: The minimum amount of headers (h2, h3,.. depending on the headers option) on a page for the toc to appear. This has to be an integer.
  * `headers`: The type of headers that need to be indexed by the toc. This can be a list or one value, ex: **'h1, h2, h3'** or **'h2'**
* topnav: Settings related to the top navigation.
  *  `theme`: This variable is needed to change between a dark and a light top navigation. possible values: **dark** and **light**
  *  `brand_logo`: Custom path towards the brand logo, in case the assets/img/main_logo.svg can not be used.
  *  `github`: Enable the appearance of the Github repo nav link
  *  `twitter`: Enable the appearance of the Twitter nav link by adding the url towards the twitter page. Disabling is done by giving de value **false** as seen in the example.
* `theme_color`: This is the primary theme color which is used in the metadata of the website. Please use the hex color without the hashtag as value.
* `fonts`: List here the urls towards google fonts to include custom fonts for your website.
