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

topnav_banner: "ELIXIR toolkit theme is currently under development and may change at any point - it is not meant for production use"
# Optional: a banner message to display to users on all pages

description: "Flexible Jekyll theme using bootstrap 5 as CSS framework."
# Metadata description of the website

dsw_deep_link_prefix:
# prefix for DSW deep links to a certain question

gtag:
# Google analytics tag

matomo:
# Matomo domain where Matomo is running
matomo_id:
# Integer indicating the Matomo Website ID

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
  dev-info-banner: false
  privacy_statement_url: /privacy
  github_buttons: 
    position: top
    edit_me: true
    open_issue: true
    history: true
  headings:
    related-pages: Related pages
    more-information-tiles: More information
    resource-table-all: Tools and resources on this page
    resource-table-all-collapse: false
    affiliation-tiles-page: Affiliations
    contributor-minitiles-page: Contributors
  toc:
    min_headings: 1
    headings: 'main h2'
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

* `git_host`: This can be *Github* or *GitLab* and customizes the text in the top navigation.
* `back_to_top`: Enables the appearance of the back to top button
* `dev-info-banner`: Show a development banner including the commit and branch the website is deployed from, when the [Jekyll environment](https://jekyllrb.com/docs/configuration/environments/) is "development". Default: *false*
* `privacy_statement_url`: Custom path to the privacy page that contains the privacy statement. This is used to link towards in the cookie banner.
* **github_buttons**: Buttons that link towards github related.
  * `position`: Can be either *top*, next to the title or *bottom*, under the page content.
  * `edit_me`: Enable the 'propose an edit on this page' button.
  * `open_issue`: Enable the 'open an issue on this page' button.
  * `history`: Enable the 'history of this page' button.
* **headings**: Change the subtitles or collapse the page sections that are automatically generated
    `related-pages`: Default: Related pages
    `more-information-tiles`:  Default: More information
    `resource-table-all`: Default: Tools and resources on this page
    `resource-table-all-collapse`: Make the tools and resources table collapsed like the other more information sections. This will also make the tools and resources table and National resources part of the More information heading. Default: *False*
    `affiliation-tiles-page`: Default: Affiliations
    `contributor-minitiles-page`: Default: Contributors
* **toc**: Settings related to the table of contents.
  * `min_headings`: The minimum amount of headings (h2, h3,.. depending on the headings option) on a page for the toc to appear. This has to be an integer. Default: *1*
  * `headings`: The type of headings that need to be indexed by the toc. This can be a list or one value, ex: *'h1, h2, h3'* or *'h2'*. Default: *'main h2'*
* **topnav**: Settings related to the top navigation.
  *  `theme`: This variable is needed to change between a dark and a light top navigation. possible values: *dark* and *light*
  *  `brand_logo`: Custom path towards the brand logo, in case the assets/img/main_logo.svg can not be used.
  *  `github`: Enable or disable the appearance of the Github repo nav link. Default: *true*
  *  `twitter`: Enable or disable the appearance of the Twitter nav link by adding the url towards the twitter page. Default: *false*
* `theme_color`: This is the primary theme color which is used in the metadata of the website. Please use the hex color without the hashtag as value.
* `fonts`: List here the urls towards google fonts to include custom fonts for your website.
