---
title: Search Engine Optimization
---

## Metadata in head

Multiple metadata fields are filled in to increase SEO including: 

- `title` and `og:title`: The index page of the website gets the site title (from _config.yml). Other pages will have following pattern: *page.type*: *page.title* \| *site.title* if attributes are present. 
- `description` and `og:description`: The index page of the website gets the site description (from _config.yml). Other pages will look for a description in following places and order: *page.description* > *page.summary* > *markdown content*. In all three scenarios the first 30 words are used.
- `keywords`: created based on the *page.page_id*'s in *page.related_pages* and the respective *page.title*'s of those listed pages.
- `og:image` and `og:logo`: the image file available in */assets/img/apple-touch-icon.png*. Please replace this file if you want your brand logo to appear as a thumbnail when links are are shared in chats.

These fields will also help in how the website gets previewed when the url is used on social media or chats. See [Page mechanics](page_mechanics) and [Configuring the theme](configuring_theme) on how to set these attributes.

## Schema.org attributes

We use schema.org attributes and some bioschema.org extensions to describe certain objects on the website more in detail. This includes contributors and their affiliations. 

For example:

```json
{
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RDMkit",
    "url": "https://rdmkit.elixir-europe.org",
    "about": "Best practices and guidelines you can use for FAIR management of your research data.",
    "author": [
        {
            "@type": "Person",
            "@id": "https://orcid.org/0000-0003-0522-5674",
            "mainEntityOfPage": "https://orcid.org/0000-0003-0522-5674",
            "affiliation": {
                "@type": "Organization",
                "name": "VIB Data Core / ELIXIR-BE"
            },
            "email": "bert.droesbeke@vib.be",
            "url": "https://github.com/bedroesb",
            "image": "https://avatars.githubusercontent.com/bedroesb",
            "jobTitle": "editor",
            "name": "Bert Droesbeke"
        }
    ]
}
```

## Sitemap.xml

A sitemap is automatically generated using the `jekyll-sitemap` gem. This allows search engine to detect the site structure and which pages are available for harvesting.

Make sure the gem is enabled in the `_config.yml` file in the root of your project like this:


```yml
plugins:
  - jekyll-sitemap
```
