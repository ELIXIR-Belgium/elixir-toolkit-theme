---
title: Page mechanics
---

Each Markdown file can contain a front matter metadata section. This section sits at the top of the file, is delimited by two `---` lines and contains key-value pairs. These values enable or disable page features and provide extra information that can be displayed in a structured way. A minimal example looks like this:

```yaml
---
title: Title of the page
---
```

You can also set these key-value pairs for multiple pages at once in `_config.yml`, as described in the [Jekyll documentation](https://jekyllrb.com/docs/configuration/front-matter-defaults/).

## Possible metadata attributes of a page


* `title`: Page title. This becomes the H1 title and replaces a top-level `#` heading in Markdown.

* `summary`: Short summary displayed under the page title.

* `description`: Short sentence about the page. This sentence is shown in section navigation tiles, related page tiles and the HTML metadata tag used when sharing URLs in chats.

* `contributors`: Full names of the people who contributed to the page. Make sure each listed person can be found in `_data/CONTRIBUTORS.yml` if you want to show GitHub IDs and other contact information.

* `coordinators`: Full names of the page coordinators. Make sure each listed person can be found in `_data/CONTRIBUTORS.yml` if you want to show GitHub IDs and other contact information.

* `editors`: Full names of the page editors. Make sure each listed person can be found in `_data/CONTRIBUTORS.yml` if you want to show GitHub IDs and other contact information.

* `supported_by`: List the organizations that support the page. Each organization name must match an entry in [*_data/supported_by.yml*](supported_by). Supporters are displayed in the **Supported by** tab at the bottom of the page and in the page's section navigation tile.

* `affiliations`: Deprecated alias for `supported_by`. It remains supported for backwards compatibility, but will be removed in ETT v8.0.0. Migrate existing page front matter to `supported_by` before upgrading to v8.

The *_data/affiliations.yml* data file is likewise deprecated in favor of *_data/supported_by.yml* and will be removed in ETT v8.0.0.

* `search_exclude`: When set to `true`, the page is excluded from search results. Default: `false`.

* `sitemap`: Include the page in `sitemap.xml`. Default: `true`.

* `no_robots`: When set to `true`, the page asks search engines not to index it. Default: `false`.

* `sidebar`: Alternative sidebar name, corresponding to a filename in `_data/sidebars/`. Default: `main`. If no sidebar is set, or `sidebar: false`, no sidebar is shown.

* `toc`: When set to `false`, the table of contents on the right side of the page is not generated. This is recommended when you know no table of contents will be needed, and improves page loading times.

* `page_id`: Unique identifier used to list related pages or tag tools in `tool_and_resource_list.yml`. It is usually a shortened version of the page name or title. Do not use hyphens if you want to use the tools and resources table.

* `page_img`: Image representing the page, corresponding to a filename in the `images/` directory. This image appears next to the page title and in section navigation tiles. Example: `infrastructures/ELIXIR_BELGIUM_white_background.svg`.

* `datatable`: Activate pagination, sorting and searching in tables.

* `type`: Page type used for [website sections](website_sections). The value is case-sensitive, and spaces should be replaced with underscores.

* `type_img`: Icon shown before the page title in section navigation tiles and related pages. It can be used as a section-specific icon.

* `page_citation`: When set to true, it will cause the citation section for the page to be generated in the format: `<author names>. <page title>. <site domain>. <page URL>. <date accessed>.`

### Page specific GitHub configurations
* `github`: Since v5.0.0 the GitHub buttons (Edit me, report an issue and history) next to the page title can be customized using the following attributes
  * `repository_url`: Specify an alternative GitHub repository that overrides the repository specified in the config file. Default: *site.github.repository_url*.
  * `branch`: Specify an alternative branch on the GitHub repository that overrides the branch in the config file: *site.github.source.branch*.
  * `file_path`: Specify an alternative file on the GitHub repository. Example: _data/news.yml, default: current path of the page.

Example:
```yaml
github:
  repository_url: https://github.com/ELIXIR-Belgium/elixir-toolkit-theme
  branch: master
  file_path: _data/news.yml
```

### Related pages

* `related_pages`: List here the `page_id` of your pages that you want to display at the Related pages section at the end of the page, grouped by section. These groups are in reality dictionaries with page.type (sections) as key and a list with page ids as value. See [website sections](website_sections) for more information.

  ```yml
  related_pages:
    Section_name: [page_id1, page_id2]
    Section_name: [page_id1, page_id2]
    Section_name: [page_id1, page_id2]
  ```


### More information


* `training`: List here training material relevant for the page. We recommend to add your training material in TeSS. However, you can also list here training material that is not yet present in TeSS.

  ```yml
  training:
    - name: Training in TeSS
      registry: TeSS
      url: https://tess.elixir-europe.org/search?q=data%20analysis
    - name: Training material in Zenodo
      registry: Zenodo
      url: https://zenodo.org/
  ```

  The optional `registry` attribute is free text. When provided, it is displayed as a small badge next to the training link.

* `faircookbook`: List here all the links towards FAIR Cookbook recipes.

  ```yml
  faircookbook:
  - name: Data licenses
    url: https://faircookbook.elixir-europe.org/content/recipes/reusability/miappe.html
  ```

* `dsw`: Here all relevant Data Stewardship Wizard questions in the Researcher knowledge model are listed.

  ```yml
  dsw:
  - name: Will you monitor data integrity once it has been collected?
    uuid: 02b3fed1-0b50-4a80-b8b6-a225a1107022
  ```
  Where the `uuid` resembles the uuid towards a question in a knowledge model specified with the `dsw_deep_link_prefix` attribute in the `[/_config.yml](/_config.yml)` file. Example:
  ```yml
  dsw_deep_link_prefix: https://researchers.ds-wizard.org/knowledge-models/dsw:root:latest/preview?questionUuid=
  ```

* `rdmkit`: Link out to guides inside of the RDMkit.

  ```yml
  rdmkit:
    - name: RDMkit page title
      url: https://rdmkit.elixir-europe.org/human_data
  ```

### Tools and resources

* `ref_to_main_resources`: Refer to entries in the main tools and resources table if institutions, organizations and projects from the country contribute to international tools and resources. List the ID of the tool you refer to in the main tools table.

  ```yml
  ref_to_main_resources:
    -  resource-id
  ```
* `national_resources`: Country-specific tools and resources.

  ```yml
  national_resources:
    - name: Resource name
      description: A general description about the resource
      how_to_access: explanation of how you can access this resource
      instance_of: github
      related_pages:
        Example_pages: [gp3, gp1, gp2]
      registry:
        biotools: bioconda
        tess: Bioconda
      url:
  ```
