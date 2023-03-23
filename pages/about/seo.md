---
title: Search Engine Optimization
---

## Metadata in head

Multiple metadata fields are filled in to increase SEO including: `description`, `keywords`, `og:title`, `og:description`, `og:image`, `apple-mobile-web-app-title`, `msapplication-TileColor`, `apple-touch-icon`, `manifest`, `mask-icon` and `theme-color`. These fields will also help in how the website gets previewed when the url is used on social media or chats.


## Schema.org attributes

We use schema.org attributes and some bioschema.org extensions to describe certain objects on the website more in detail including contributors. 

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
                "name": "VIB-UGent / ELIXIR-BE"
            },
            "email": "bedro@psb.ugent.be",
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

MAke sure the gem is enabled in the `_config.yml` file in the root of your project like this:


```yml
plugins:
  - jekyll-sitemap
```
