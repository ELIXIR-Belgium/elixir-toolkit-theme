---
title: Navigation structures
---

The theme tries to minimize the need to change HTML. Top navigation, sidebar and footer structures are all defined by YAML files, as explained below.

## Top navigation

The top navigation links are defined in the `subitems:` object in `/_data/topnav.yml`.
```yml
subitems:
- title: Home
  url: /
```

Dropdowns can be added in a similar way by nesting subitems:

```yml
subitems:
- title: Example dropdown
  subitems:
  - title: Events
    url: /events
```

External URLs can be specified using:

```yml
subitems:
- title: Home
  external_url: https://example.url
```

{: .important }
> Make sure the given URL follows the exact structure of the URL your page renders to.

Certain elements like the GitHub link have options in the `/_config.yml` file as described in the [configuring theme](configuring_theme) page. Style customizations are described in the [custom branding](custom_branding#branding-in-the-top-navigation) page.

## Sidebar

This theme supports multiple sidebars, defined by YAML files in the `/_data/sidebars` directory. Changing these YAML files immediately updates the sidebars and the front page of the website without requiring HTML changes. The sidebar displayed on a specific page is defined by the [metadata of that page](page_mechanics). The sidebar supports multiple levels, up to three, and each level can link to a page in this website or to an external URL.

The attributes that define the structure are:
- `title`: Text shown in the sidebar.
- `url`: URL of the internal page you want to link to. This is usually in the form `markdown_file_name.html`.
- `external_url`: Use this instead of `url` when linking to an external page.
- `subitems`: Nested items used to define a lower navigation level.
- `hr`: Set to `true` to add a horizontal spacer above an item. Example: `hr: true`.
- `icon`: Classes to render an icon before the title. Sidebar icons support both [Lucide icon font](https://lucide.dev/guide/static/font/) classes such as `icon-book-open` and [Font Awesome](https://fontawesome.com/icons) classes such as `fa-solid fa-book` or `fa-brands fa-github`.

Example:

```yaml
- title: Level_1_title
  icon: icon-book-open
  url: level_1_url
  subitems:
    - title: Level_2_title
      icon: icon-file-text
      url: level_2_url
      subitems:
        - title: Level_3_title
          icon: icon-external-link
          external_url: https://example.url
```

Icons can be added to sidebar items at any supported level. They are decorative, so the sidebar title remains the accessible link text.

Font Awesome is especially useful for brand icons, while Lucide is a good fit for general interface icons:

```yaml
- title: Project repository
  icon: fa-brands fa-github
  external_url: https://github.com/example/project
```

The sidebar also allows you to specify a sidebar title, version and title URL using the following syntax:


```yml
title: About
version: 2.0
title_url:  /events
```

If no sidebar should be displayed, add `sidebar: false` to the front matter of the page or leave `sidebar` unspecified.

## Top navigation and sidebar relationship

Top navigation titles can be used to switch between high-level website sections, each with its own sidebar. As described above, sidebars are defined by the `sidebar` metadata attribute in a page. To make sure all pages within that sidebar mark the top navigation item as active, name the sidebar file in the same way as the top navigation title. Spaces, hyphens and underscores are ignored.

Example: `/_data/sidebars/main_sidebar.yml` and in the `/_data/topnav.yml`:

```yml
subitems:
- title: Main sidebar
  url: /
```

## Footer

Just like the other navigation structures, the footer is defined by a YAML file, `/_data/footer.yml`.
The footer is composed of columns. Each column width is defined by an integer **between 1 and 12**, and the total of all columns should not exceed 12.


The example below shows a footer with logo, link, text and funder columns:

```yml
copyright: Copyright (c) 2026 ELIXIR Toolkit Theme contributors. Content is available under the repository license unless noted otherwise.
extra_line: 
columns:
  - type: image
    image_width: 150px
    width: 2
    src: 'images/infrastructures/ELIXIR_BELGIUM_white_background.svg'
    alt: ELIXIR Belgium logo
  - type: links
    title: Theme
    width: 3
    children: 
      - url_text: Documentation
        url: /getting_started
      - url_text: Example pages
        url: /overview_tiles
      - url_text: Contributors
        url: /contributors
  - type: text
    width: 3
    content: |
      A documentation theme for ELIXIR-related training, tools and service websites.
  - type: image
    image_width: 100px
    width: 2
    src: 'assets/img/Flag_of_Europe.svg'
    alt: European flag
  - type: image
    image_width: 88px
    width: 2
    src: 'assets/img/ett_compact_logo.svg'
    alt: Jekyll Bootstrap theme logo
```

### High-level attributes

* `copyright`: Text shown in the bottom part of the footer, usually with a darker background and license information.
* `extra_line`: Optional extra line in the top part of the footer, spanning the full footer width.
* `columns`: List of footer columns.

None of these attributes are mandatory. Leave them empty to hide them. Do not remove the `footer.yml` file to disable the footer; leave the high-level attributes empty instead.


### Column attributes

* `type`: Defines the purpose of the column. Supported values are `links`, `image` and `text`.
* `image_width`: Width for an `image` column. Include the unit, for example `150px`.
* `width`: Integer defining the column width. The total width of all columns should be `12`.
* `src`: Path to the image. Required for an `image` column.
* `alt`: Alt text for the image. Required for an `image` column.
* `title`: Optional title for a `links` column.
* `children`: List of links in a `links` column.
* `url_text`: Label of a link.
* `url`: Internal page path.
* `external_url`: External page URL.
* `content`: Markdown content for a `text` column.

## Table of Contents (TOC)

### Configuration


Currently, 2 settings can be configured related to the TOC, `min_headings` and `headings`. Read more on how to configure them and what they do in the [Configuring theme page](configuring_theme).

### Usage

By default, the table of contents is enabled and appears once the minimum number of configured headings is reached. Disable it site-wide using Jekyll defaults, or on a page by adding `toc: false` when you do not want the TOC to appear.


{: .tip }
> To prevent the main content from resizing, when no TOC is present, it is suggested to add `toc: false` to improve the loading of the page.
