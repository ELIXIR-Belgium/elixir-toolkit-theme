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

This website includes focused examples you can compare while reading this page: [General page 1](general_page) for rich metadata, [General page 2](general_page_2) for page and type images, [General page 3](general_page_3) for country-specific resources and no table of contents, [General page 4](general_page_4) for minimal metadata, [General page 6](general_page_6) for a page without a sidebar, and [General page 7](general_page_7) for custom GitHub edit targets.

## Possible metadata attributes of a page


* **`title`**: Page title. This becomes the H1 title and replaces a top-level `#` heading in Markdown.

* **`summary`**: Short summary displayed under the page title. See [General page 1](general_page) for a page with a visible summary.

* **`description`**: Short sentence about the page. This sentence is shown in section navigation tiles, related page tiles and the HTML metadata tag used when sharing URLs in chats. Compare [General page 1](general_page) with [General page 4](general_page_4), which intentionally has no description.

* **`contributors`**: Full names of the people who contributed to the page. Make sure each listed person can be found in `_data/CONTRIBUTORS.yml` if you want to show GitHub IDs and other contact information.

* **`coordinators`**: Full names of the page coordinators. Make sure each listed person can be found in `_data/CONTRIBUTORS.yml` if you want to show GitHub IDs and other contact information. See [General page 5](general_page_5) for contributor and coordinator tabs together.

* **`editors`**: Full names of the page editors. Make sure each listed person can be found in `_data/CONTRIBUTORS.yml` if you want to show GitHub IDs and other contact information. See [General page 1](general_page) for contributor, coordinator and editor tabs together.

* **`supported_by`**: List the organizations that support the page. Each organization name must match an entry in [*_data/supported_by.yml*](supported_by). Supporters are displayed in the **Supported by** tab at the bottom of the page and in the page's section navigation tile. See [General page 1](general_page) for page-level supporters.

* **`affiliations`**: Deprecated alias for `supported_by`. It remains supported for backwards compatibility, but will be removed in ETT v8.0.0. Migrate existing page front matter to `supported_by` before upgrading to v8.

  {: .note }
  > The `_data/affiliations.yml` data file is likewise deprecated in favor of `_data/supported_by.yml` and will be removed in ETT v8.0.0.

* **`search_exclude`**: When set to `true`, the page is excluded from search results. Default: `false`. See [Template example](TEMPLATE_general_page) for a hidden template page.

* **`sitemap`**: Include the page in `sitemap.xml`. Default: `true`. See [Template example](TEMPLATE_general_page), where it is disabled.

* **`no_robots`**: When set to `true`, the page asks search engines not to index it. Default: `false`. See [Template example](TEMPLATE_general_page), where `search_exclude`, `sitemap` and `no_robots` are used together.

* **`sidebar`**: Alternative sidebar name, corresponding to a filename in `_data/sidebars/`. Default: `main`. If no sidebar is set, or `sidebar: false`, no sidebar is shown. See [General page 6](general_page_6) for a page without a sidebar.

* **`toc`**: When set to `false`, the table of contents on the right side of the page is not generated. This is recommended when you know no table of contents will be needed, and improves page loading times. See [General page 3](general_page_3) and [Section overview](overview_tiles) for pages with `toc: false`.

* **`page_id`**: Unique identifier used to list related pages or tag tools in `tool_and_resource_list.yml`. It is usually a shortened version of the page name or title. Do not use hyphens if you want to use the tools and resources table. See [List of page IDs](list_page_ids) for a generated overview of page IDs in this website.

* **`page_img`**: Image representing the page, corresponding to a filename in the `images` directory. This image appears next to the page title and in section navigation tiles. Example: `infrastructures/ELIXIR_BELGIUM_white_background.svg`. See [General page 2](general_page_2) and [General page 4](general_page_4) for page images.

* **`datatable`**: Activate pagination, sorting and searching in tables. See [All training](all_trainings) and [Tools and resources table](resource_table) for table pages with this enabled.

* **`type`**: Page type used for [website sections](website_sections). The value is case-sensitive, and spaces should be replaced with underscores. See [Section overview](overview_tiles) for a page listing all pages with `type: Example_pages`.

* **`type_img`**: Icon shown before the page title in section navigation tiles and related pages. It can be used as a section-specific icon. See [General page 2](general_page_2) for a custom type image.

* **`page_citation`**: When set to true, it will cause the citation section for the page to be generated in the format: `<author names>. <page title>. <site domain>. <page URL>. <date accessed>.` See [General page 1](general_page) and [General page 7](general_page_7) for citation examples with different metadata combinations.

### Page specific GitHub configurations
* **`github`**: Since v5.0.0 the GitHub buttons (Edit me, report an issue and history) next to the page title can be customized using the following attributes. See [News](news) and [General page 7](general_page_7) for pages where the edit target points to a data file instead of the Markdown page.
  * **`repository_url`**: Specify an alternative GitHub repository that overrides the repository specified in the config file. Default: *site.github.repository_url*.
  * **`branch`**: Specify an alternative branch on the GitHub repository that overrides the branch detected by GitHub Pages: *site.github.source.branch*.
  * **`file_path`**: Specify an alternative file on the GitHub repository. Example: `_data/news.yml`, default: current path of the page.

Example:
```yaml
github:
  repository_url: https://github.com/ELIXIR-Belgium/elixir-toolkit-theme
  branch: main
  file_path: _data/news.yml
```

### Related pages

* **`related_pages`**: List here the `page_id` of your pages that you want to display at the Related pages section at the end of the page, grouped by section. These groups are in reality dictionaries with page.type (sections) as key and a list with page ids as value. See [General page 5](general_page_5) for related page tiles and [website sections](website_sections) for more information.

  ```yml
  related_pages:
    Section_name: [page_id1, page_id2]
    Section_name: [page_id1, page_id2]
    Section_name: [page_id1, page_id2]
  ```


### More information


* **`training`**: List here training material relevant for the page. We recommend to add your training material in TeSS. However, you can also list here training material that is not yet present in TeSS. See [General page 1](general_page) for page-level training links and [All training](all_trainings) for the generated site-wide training table.

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

* **`fairsharing`**: List here FAIRsharing records or searches related to the page. See [General page 1](general_page) and [General page 2](general_page_2) for FAIRsharing links in the More information section.

  ```yml
  fairsharing:
  - name: ISO 20691
    url: https://fairsharing.org/3533
  ```

* **`faircookbook`**: List FAIR Cookbook recipes related to the page. See [General page 1](general_page) and [General page 2](general_page_2) for FAIR Cookbook links in the More information section.

  ```yml
  faircookbook:
  - name: Data licenses
    url: https://faircookbook.elixir-europe.org/content/recipes/reusability/miappe.html
  ```

* **`dsw`**: List relevant Data Stewardship Wizard questions from the Researcher knowledge model. See [General page 1](general_page) and [General page 2](general_page_2) for generated DSW links.

  ```yml
  dsw:
  - name: Will you monitor data integrity once it has been collected?
    uuid: 02b3fed1-0b50-4a80-b8b6-a225a1107022
  ```
  The `uuid` corresponds to a question in a knowledge model specified with the `dsw_deep_link_prefix` attribute in `_config.yml`. Example:
  ```yml
  dsw_deep_link_prefix: https://researchers.ds-wizard.org/knowledge-models/dsw:root:latest/preview?questionUuid=
  ```

* **`rdmkit`**: Link out to guides inside of the RDMkit. See [General page 1](general_page) for RDMkit links in the More information section.

  ```yml
  rdmkit:
    - name: RDMkit page title
      url: https://rdmkit.elixir-europe.org/human_data
  ```

### Tools and resources

* **`ref_to_main_resources`**: Refer to entries in the main tools and resources table if institutions, organizations and projects from the country contribute to international tools and resources. List the ID of the tool you refer to in the main tools table. See [General page 3](general_page_3) for country-specific resource metadata.

  ```yml
  ref_to_main_resources:
    -  resource-id
  ```
* **`national_resources`**: Country-specific tools and resources. See [General page 3](general_page_3) for resources with full, partial and minimal metadata.

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
