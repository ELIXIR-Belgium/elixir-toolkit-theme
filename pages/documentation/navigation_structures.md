---
title: Navigation structure
---

The theme tries to minimize the need to change html code as much as possible, and for the top navigation, sidebar and footer, this is not different. These navigation structures are all defined by YAML files as  explained below.

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

This theme supports multiple sidebars, defined by YAML files in the `/_data/sidebars` directory. Changing these yaml file will immediately impact the sidebars and the frontpage of the website without the need of changing any HTML code. The sidebar that will be displayed on a specific page is defined by the [metadata of that page](page_mechanics). The sidebar supports multiple levels (up to 3) and each level in the hierarchy can contain a URL to a page within this website or an external URL.

The attributes that define the structure are:
- `title`: This is the text that will show up in the sidebar.
- `url`: The URL to the internal page you want to link to. This is mostly in the form of: */markdown_file_name.html*.
- `external_url`: Use this instead of URL if you want to link to an external page.
- `subitems`: to define a sublevel.
- `hr`: THis can be set as true to add a horizontal spacer (top) between 2 subitems in the sidebar. (example: `hr: true`)

Example:

```yaml
- title: Level_1_title
  url: level_1_url
  subitems:
    - title: Level_2_title
      url: level_2_url
```

The sidebar also allows you to specify a sidebar title, version and title url using following syntax:


```yml
title: About
version: 2.0
title_url:  /events
```

## Top navigation and sidebar relationship

Top navigation titles can be used to switch between different high level sections on the website, each having their own sidebar. As described before, sidebars are defined by the `sidebar` metadata attribute in a page, so linking in the topnav YAML towards whis page is one part of the job. To make sure that all pages within that sidebar have this topnav item on active, one has to name its sidebar file in the same way as the topnav title (spaces, hyphens and underscores get ignored). 

Example: `/_data/sidebars/main_sidebar.yml` and in the `/_data/topnav.yml`:

```yml
subitems:
- title: Main sidebar
  url: /
```

## Footer

Just like the other navigation structures, is the footer defined by a YAML file, `/_data/footer.yml`.
The footer is composed out of columns, of which the width is defined by integers between 1 and 12, and the total of all columns should not exceed 12.


Lets dissect the footer structure using this below: 

```yml
copyright: Copyright notice
extra_line: 
columns:
  - type: image
    image_width: 150px
    width: 3
    src: 'images/infrastructures/ELIXIR_BELGIUM_white_background.svg'
    alt: ELIXIR Belgium logo
  - type: links
    title: Title
    width: 3
    children: 
      - url_text: Contributors
        url: /contributors
      - url_text: Getting started
        url: /getting_started
  - type: links
    width: 3
    children: 
      - url_text: About
        url: /about
      - url_text: Accessibility
        url: /accessibility
      - url_text: Privacy
        url: /privacy
  - type: image
    image_width: 100px
    width: 2
    src: 'assets/img/Flag_of_Europe.svg'
    alt: European flag
  - type: image
    image_width: 88px
    width: 1
    src: 'assets/img/ett_compact_logo.svg'
    alt: Jekyll Bootstrap theme logo
```

High level attributes:

* `copyright`: Define the text in the most bottom part of the footer, usually with a darker background and describing the license.
* `extra_line`: Add a extra line in the top part, spanning the full width of the footer (optional)
* `columns`: Key to list columns

Column attributes:

* `type:`: This defines the purpose of the column and can be *links* or *image*
* `image_width`: To be specified when it is an *image* column, don't forget to add the unit.
* `width`: Integer, defining the width of the column. Total sum of all columns should be 12.
* `src`: Absolute path to the image. To be specified when it is an *image* column
* `alt`: Alt text of the image. To be specified when it is an *image* column
* `title`: Title of a column with type *links* (optional)
* `children`: Key to list links in a column with type *links*
* `url_text`: Title of a link.
* `url`: Absolute path of a page.




