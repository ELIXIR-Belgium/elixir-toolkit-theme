---
title: Page mechanics
contributors: [Bert Droesbeke]
---


## Variables and their effect


Metadata section in the markdown in a page:
```
---

---
```

Possible attributes:


* `summary`: Using this attribute it is possible to specify a summary which will be displayed under the title of the page. This summary will also be used as description of your page when the page is tagged.

* `description`: Short sentence about the page starting with a lowercase. This sentence is visualized when pages are automatically listed using a tag.

* `contributors`: list here all the contributors that helped in establishing the page. This will be the full name of the person. Make sure that the person name that is listed can be found in the CONTRIBUTORS.yaml file in the _data directory if you want to link the github id and other contact information.

* `coordinators`: 

* `search_exclude`: by setting this field true, the page will not end up in the search results of the searchbar. By default this is false.

* `sitemap`: let the page appear in the sitema.xml. Default: true

* `no_robots`: by setting this field to true, the page will not end up in the search results of google or any other search engine.

* `hide_sidebar`: When true, the sidebar will be hided. Default: false

* `custom-editme`: Specify an alternative link when clicked on the edit-me button

* `keywords`: List here all the keywords that can be used to find the page using the searchbox in the right upper corner of the page, lowercase.

* `sidebar`: Specify here an alternative sidebar. Default: main

* `toc`: When set to false, the table of contents in the beginning of the page will not be generated.

* `page_id`: Unique identifier of a page. It is usually a shortened version of the page name or title, with small letters and spaces, or an acronym, with capital and small letters. Used to list Related pages.

* `related_pages`: List here the `page_id` of RDMkit pages that you want to display as Related pages, grouped by section (Your tasks, Your domain, Tool assembly).

  If you want pages from the specific section (Your tasks, Your domain, Tool assembly) to be shown here as Related pages, list their `page_id`. If you want to list multiple related pages, make sure to put them in a list like this: [page_id1, page_id2]. The specific sections allowed in each page are specified in each page template. Please, do not add extra sections in the metadata of the page.
  ```yml
  related_pages: 
    your_tasks: [page_id1, page_id2]
    your_domain: [page_id1, page_id2]
    tool_assembly: [page_id1, page_id2]
  ``` 

* `training`: List here training material relevant for the page. We recommend to add your training material in TeSS. However, you can also list here training material that is not yet present in TeSS. Each training item will be automatically added as an entry to the table in the [All training resources page](all_training_resources).

  ```yml
  training:
    - name: Training in TeSS
      registry: TeSS
      registry_url: https://tess.elixir-europe.org
      url: https://tess.elixir-europe.org/search?q=data%20analysis

    - name: Training in TeSS
      registry: TeSS
      registry_url: https://tess.elixir-europe.org
      url: https://tess.elixir-europe.org/search?q=data%20analysis
  ```
* `faircookbook`: Here all relevant FAIR Cookbook recipes are listed. This is automaticity updated based on the [`faircookbook_rdmkit_mapping.yml`](https://github.com/elixir-europe/rdmkit/tree/master/_data/faircookbook_rdmkit_mapping.yml) mapping file. If you want to make a new link, please make a pull request against this file. Every week the changes of this mapping file are used to update the frontmatter of the corresponding markdown files.


* `dsw`: Here all relevant Data Stewardship Wizard questions in the RDMkit knowledge model are listed. This is automaticity updated and can not be altered by humans! If you want to add a link you have to add the link towards the RDMkit page the the knowledge model on DSW.

* `datatable`: use this attribute to activate the pagination + sorting + searching in tables


## Related pages


## tools and resources



## contributors



