---
title: Tools and resources table
page_id: tools_and_resources_table
datatable: true
---

One of the key features of the theme is support for a central tool and resource table. Tools that are mentioned in multiple places can be described once and reused across the website. These metadata fields can automatically populate a tools and resources table at the bottom of a page when the correct tool snippet is used in the page content.


## Way of working

The [all tools and resources](#listing-all-resources) list is based on the [YAML file](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/main/_data/tool_and_resource_list.yml) in the `_data` directory. Tools and resources can be manually linked to [FAIRsharing.org](https://fairsharing.org/), [Bio.tools](https://bio.tools), [TeSS](https://tess.elixir-europe.org/) and [Europe PMC](https://europepmc.org/).


## Prerequisites

* The main YAML file describing the tools is `tool_and_resource_list.yml` in `/_data` and must use valid YAML syntax.
* Make sure Markdown pages where you mention tools have a `page_id` in their front matter. The `page_id` should not contain hyphens; see the metadata [documentation](page_mechanics).
* When using the tool tag:
  * `gem "elixir-toolkit-theme-plugins"` is added to the `/Gemfile`
  * `- elixir-toolkit-theme-plugins` is added to the plugins block in the `_config.yml` file
  * A recent version of the ELIXIR Toolkit Theme is used. See the `remote_theme: ELIXIR-Belgium/elixir-toolkit-theme@VERSION` line in the `_config.yml` file.
  * GitHub Actions is used to deploy the website. See [instructions](https://elixir-belgium.github.io/elixir-toolkit-theme/#deployment).


## The main YAML file

Each tool or resource mentioned in the text has metadata stored in the [main YAML file](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/main/_data/tool_and_resource_list.yml). The metadata block for each tool can contain the following attributes:
- **`id`**: The ID of a tool, in kebab-case, lowercase with hyphens.
- **`name`**: Name of the tool or resource.
- **`url`**: Main URL of the tool or resource. Make sure it starts with `https://`.
- **`description`**: Short description of the tool or resource. Avoid the characters `"` and `'`.
- **`registry`**: Four registries are supported: [Bio.tools](https://bio.tools), [FAIRsharing.org](https://fairsharing.org/), [TeSS](https://tess.elixir-europe.org/) and [Europe PMC](https://europepmc.org/). Use the keys `biotools`, `fairsharing`, `tess` and `europmc`, specifying the ID or query after a colon. FAIRsharing records should use the DOI suffix, without the `FAIRsharing.` prefix. List registries under the `registry` attribute as key-value pairs.
- **`related_pages`**: List of `page_id` values. Avoid using this together with the `{% raw %}{% tool "tool_id" %}{% endraw %}` snippet in the page text.
- **`how_to_access`**: Free-text field describing how the tool or resource can be accessed.


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

{: .tip }
> `NA` as registry value is skipped and will not be rendered as a URL.

## What tool or resource can be added to the table
Tools and resources specifically mentioned in page text should be present in the main table.

## Adding new tools

1. Make sure the tool you want to add is not already described in the [YAML file](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/main/_data/tool_and_resource_list.yml). If it is already present, go to step 3. If not, follow the next step.

1. Click the pencil icon in the GitHub view of the [main YAML file](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/main/_data/tool_and_resource_list.yml), as described in our GitHub Guide. Add your tool or resource at the bottom of the file using the structure described in [The main YAML file](#the-main-yaml-file). Match the indentation of the existing items. When in doubt, validate the YAML before committing it.

1. Copy the `tool_id` of the tool or resource

1. Add the tool in the text using the following syntax:
    ```liquid
    {% raw %}{% tool "tool_id" %}{% endraw %}
    ```

    **Examples:**

    Use this snippet:

    ```liquid
    {% raw %}{% tool "zenodo" %} is a powerful data publication service, which is supported by the European commission and focused on research data, including supplemental material like software, tables, figures or slides.{% endraw %}
    ```

    This renders as:
    
    {% tool "zenodo" %} is a powerful data publication service, which is supported by the European commission and focused on research data, including supplemental material like software, tables, figures or slides.

    Use this snippet:

    ```liquid
    {% raw %}{% tool "beacon" %} is a GA4GH standard which enables standardised querying across multiple sources.{% endraw %}
    ```

    This renders as:
    
    {% tool "beacon" %} is a GA4GH standard which enables standardised querying across multiple sources.


{: .important }
> Add double quotes around the `tool_id` and make sure to use the exact `tool_id` from the YAML file.

## Listing all resources

By default, the table at the bottom of the page appears when tools are mentioned in the text or tagged with the correct `page_id`, as shown at the bottom of this page under "Tools and resources on this page". To manually list all tools and resources described in your website, use this snippet:

```liquid
{% raw %}{% include resource-table-all.html %}{% endraw %}
```

This renders as:

{% include resource-table-all.html %}
