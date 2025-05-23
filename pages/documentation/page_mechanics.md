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

* `search_exclude`: By setting this field true, the page will not end up in the search results of the searchbar. By default this is false.

* `sitemap`: Let the page appear in the sitemap.xml. Default: *true*

* `no_robots`: By setting this field to true, the page will not end up in the search results of google or any other search engine. Default: *false*

* `custom_editme`: This attribute can be used to specify an alternative file when clicked on the edit-me or history button. Example: _data/news.yml. **!This will be deprecated in the next major release (v5.0)!**

* `keywords`: List here all the keywords that can be used to find the page using the searchbox in the right upper corner of the page, lowercase.

* `sidebar`: Specify here an alternative sidebar, which corresponds to the filename in the *_data/sidebars/* directory. Default: *main*. If no sidebar is set, or *sidebar: false*, no sidebar will be shown.

* `toc`: When set to *false*, the table of contents at the right side of the page will not be generated. This is recommended when you know in advance no table of contents will ever be needed, and improves page loading times.

* `page_id`: Unique identifier of a page used to list Related pages or to tag tools in the *tool_and_resource_list.yml* file. It is usually a shortened version of the page name or title, with small letters, or an acronym, with capital and small letters. Make sure it does not contain hyphens if you want to make use of the Tools and resources table. .

* `page_img`: Specify here an image to represent the page, which corresponds to a filename in the *images/* directory. This image will appear small to the right of the page title and in the section navigation tiles. It may be used with logos for products or services. Example: infrastructures/ELIXIR_BELGIUM_white_background.svg

* `datatable`: use this attribute to activate the pagination + sorting + searching in tables.

* `type`: The type of page, used for [website sections](website_sections).

* `page_citation`: When set to true, it will cause the citation section for the page to be generated in the format: `<author names>. <page title>. <site domain>. <page URL>. <date accessed>.`

* `github.repository_url`: Specify an alternative GitHub repository that overrides the repository specified in the config file. Default: *site.github.repository_url*.

* `github.branch`: Specify an alternative branch on the GitHub repository that overrides the branch in the config file: *site.github.source.branch*.

* `github.file_path`: Specify an alternative file on the GitHub repository. This replaces the `custom_editme` variable. Default: current path of the page.

### Related pages

* `related_pages`: List here the `page_id` of your pages that you want to display as under the Related pages of this page, grouped by section. See [website sections](website_sections) for more information.

  If you want pages from the specific section to be shown here as Related pages, list their `page_id`. If you want to list multiple related pages, make sure to put them in a list like this: [page_id1, page_id2]. The specific sections allowed in each page are specified in each page template. Please, do not add extra sections in the metadata of the page.

  ```yml
  related_pages:
    - section_name: [page_id1, page_id2]
    - section_name: [page_id1, page_id2]
    - section_name: [page_id1, page_id2]
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
      instance_of: GitHub
      related_pages:
        example_pages: [gp3, gp1, gp2]
      registry:
        biotools: bioconda
        tess: Bioconda
      url:
  ```




