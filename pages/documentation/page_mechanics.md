---
title: Page mechanics
---

In order to render the website, each markdown file contains a specific frontmatter/metadata section. This section is located at the top of the markdown file, is delimited by two times `---` and contains all key value pairs. This can be seen as settings on pagelevel to enable/disable certain page functions are to deliver extra information which can be displayed in a structured way. An example of how this can look like:

```yaml
---
title: Title of the page
---
```

It is important to know that you can also set the these key-value pairs on multiple pages at the same time by specifying them in the `_config.yml` file as described in the [Jekyll documentation](https://jekyllrb.com/docs/configuration/front-matter-defaults/).

## Possible metadata attributes of a page


* `title`: Specify here the title of the page. This wil be the H1 title (replacing the top level title using the # in markdown )

* `summary`: Using this attribute it is possible to specify a summary which will be displayed under the title of the page.

* `description`: Short sentence about the page starting with a lowercase. This sentence is visualized when in the related pages section of a page..

* `contributors`: List here all the contributors that helped in establishing the page. This will be the full name of the person. Make sure that the person name that is listed can be found in the CONTRIBUTORS.yaml file in the _data directory if you want to link the github id and other contact information.

* `coordinators`: List here all the coordinators of the page. Use the full name of the person. Make sure that the person name that is listed can be found in the *_data/CONTRIBUTORS.yaml* file in the _data directory if you want to link the github id and other contact information.

* `editors`: List here all the editors of the page. Use the full name of the person. Make sure that the person name that is listed can be found in the *_data/CONTRIBUTORS.yaml* file in the _data directory if you want to link the github id and other contact information.

* `affiliations` List here all affiliations related to the page. Make sure that the person name that is listed can be found in the *_data/affiliations.yaml* file. These affiliations will get displayed at the bottom of the page and in the section navigation tile of the page.

* `search_exclude`: By setting this field true, the page will not end up in the search results of the searchbar. By default this is false.

* `sitemap`: Let the page appear in the sitemap.xml. Default: *true*

* `no_robots`: By setting this field to true, the page will not end up in the search results of google or any other search engine. Default: *false*

* `sidebar`: Specify here an alternative sidebar, which corresponds to the filename in the *_data/sidebars/* directory. Default: *main*. If no sidebar is set, or *sidebar: false*, no sidebar will be shown.

* `toc`: When set to *false*, the table of contents at the right side of the page will not be generated. This is recommended when you know in advance no table of contents will ever be needed, and improves page loading times.

* `page_id`: Unique identifier of a page used to list Related pages or to tag tools in the *tool_and_resource_list.yml* file. It is usually a shortened version of the page name or title, with small letters, or an acronym, with capital and small letters. Make sure it does not contain hyphens if you want to make use of the Tools and resources table. .

* `page_img`: Specify here an image to represent the page, which corresponds to a filename in the *images/* directory. This image will appear small to the right of the page title and in the section navigation tiles. It may be used with logos for products or services. Example: infrastructures/ELIXIR_BELGIUM_white_background.svg

* `datatable`: use this attribute to activate the pagination + sorting + searching in tables.

* `type`: The type of page, used for [website sections](website_sections). Case the value is case sensitive and spaces should get replaced with underscores.

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
  ```

  The supported registries that can be used in the `registry` attribute are: *YouTube*, *Zenodo*, *Carpentries*, *GitHub*, and *TeSS*.

* `faircookbook`: List here all the links towards FAIR Cookbook recipes.

  ```yml
  faircookbook:
  - name: Data licenses
    url: https://fairplus.github.io/the-fair-cookbook/content/recipes/reusability/ATI_licensing_data.html
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

* `ref_to_main_resources`: Refer to entries of the "main_tool_ and_resource_table" if institutions, organizations and projects from the country contribute to the development of international tools and resources. List the id of the tool your refer to in the main tools table.

  ```yml
  ref_to_main_resources:
    -  resource-id
  ```
* `national_resources`: List here tools and resources mainly relevant for the specific country

  ```yml
  national_resources:
    - name: Resource name
      description: A general description about the resource
      how_to_access: explantation on how you can access this resource
      instance_of: github
      related_pages:
        Example_pages: [gp3, gp1, gp2]
      registry:
        biotools: bioconda
        tess: Bioconda
      url:
  ```




