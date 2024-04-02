---
title: Tools and resources table
page_id: tools_and_resources_table
datatable: true
---

One of the themes key features is the support for a central tool and resource table. This means that tools that are mentioned at multiple places on the website, can be described centrally, and these descriptions/metadata fields can be used to automatically populate a tools and resources table at the bottom of the page.


## Way of working

The [all_tools_and_resources](all_tools_and_resources) list is based on the [yaml file](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/main/_data/tool_and_resource_list.yml) in the `_data` directory. Tools and resources can be manually linked to [FAIRsharing.org](https://fairsharing.org/), [Bio.tools](https://bio.tools) and [TeSS](https://tess.elixir-europe.org/) and [EuroPMC](https://europepmc.org/).


## Prerequisites

* The main yaml file describing the tools is called `tool_and_resource_list.yml` located in `/_data` and is using the correct YAML syntax
* Make sure MarkDown pages where you want to mention the tools have a  `page_id` in their frontmatter, see metadata [documentation](page_mechanics).
* When making use of the new way of tagging tools: 
  * `gem "elixir-toolkit-theme-plugins"` is added to the `/Gemfile`
  * `- elixir-toolkit-theme-plugins` is added to the plugins block in the `_config.yml` file
  * A recent version of the ELIXIR Toolkit Theme is used. See the `remote_theme: ELIXIR-Belgium/elixir-toolkit-theme@VERSION` line in the `_config.yml` file.
* GitHub Actions is used to deploy the website. See [instructions](https://elixir-belgium.github.io/elixir-toolkit-theme/#deployment).


## The main yaml file

Each tool or resource mentioned in the text has metadata stored in the [main yaml file](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/main/_data/tool_and_resource_list.yml). The metadata block for each tool consists of 5 attributes:
- **id**: The ID of a tool, in kebab-case, lowercase with hyphens.
- **name**: The name of the tool or resource
- **url**: URL to the main page of the tool or resource, make sure to let the URL start with `https://`
- **description**: A short description of the tool or resource. Try to not use the characters `"` or `'` 
- **registry**: 3 registries are supported: [Bio.tools](https://bio.tools), [FAIRsharing.org](https://fairsharing.org/), [TeSS](https://tess.elixir-europe.org/) and [EuroPMC](https://europepmc.org/). The keywords you can use respectively are: `biotools`, `fairsharing`, `fairsharing-coll`, `tess` and `europmc`, specifying the id or query with a colon. FAIRsharing collections have an ID that follows the pattern `bsg-s000XXX`. List registries under the `registry` attribute as `key: value pairs`.
- **related_pages**: List of page_ids (Deprecated, This is replaced by the `{% raw %}{% tool "tool_id" %}{% endraw %}` snippet in the text)
- **how_to_access**: This is free text feels that describes the accessibility of the tool or resource.


Example:

```yml
- id: github
  name: GitHub
  url: https://github.com
  description:
    Versioning system, used for sharing code, as well as for sharing of
    small data
  registry:
    tess: GitHub
```

{% include callout.html type="tip" content="`NA` as registry value will not be rendered as a url but will be skipped." %}

## What tool or resource can be added to the table
Tools and resources specifically mentioned in the text of the pages should be present in the main table. 

## Adding new tools

1. Make sure the tool you want to add is not yet already described in the [yaml file](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/master/_data/tool_and_resource_list.yml). If yes,go to step 3, if not, go follow the next step.

1. Click on the pencil icon seen on the GitHub view of the [main yaml file](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/master/_data/tool_and_resource_list.yml) as described in our GitHub Guide. Add your tool or resource at the bottom of the file following the structure described in the [The main yaml file section of this page](#the-main-yaml-file). Make sure the indentation follows the one of the previous listed items. Copy the content of the yaml file and paste in in an online yaml validator in case of doubt.

1. Copy the `tool_id` of the tool or resource

1. Add the tool in the text by mentioning it using following syntax:
    ```
    {% raw %}
    {% tool "tool_id" %}
    {% endraw %}
    ```

    **Examples:**

    ```
    {% raw %}
    {% tool "zenodo" %} is a powerful data publication service, which is supported by the European commission and focused on research data, including supplemental material like software, tables, figures or slides.
    {% endraw %}
    ```
    Will give: 
    
    {% tool "zenodo" %} is a powerful data publication service, which is supported by the European commission and focused on research data, including supplemental material like software, tables, figures or slides.

    ```
    {% raw %}
    {% tool "beacon" %} is a GA4GH standard which enables standardised querying across multiple sources.
    {% endraw %}
    ```
    Will give: 
    
    {% tool "beacon" %} is a GA4GH standard which enables standardised querying across multiple sources.


{% include callout.html type="important" content="Don't forget to add the `\"` double quotes around the tool_id and make sure to use the exact tool_id as described in the yaml file." %}

## Listing all resources

By default, the table at the bottom of the page will appear when tools are mentioned in the text/tagged with the correct page_id as seen at the bottom of this page under the "Tools and resources on this page" heading. To list manually all tools and resources that are described in your website, use following snippet:

```
{% raw %}
{% include resource-table-all.html %}
{% endraw %}
```


{% include resource-table-all.html %}



