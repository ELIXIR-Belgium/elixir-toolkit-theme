---
title: Search Engine Optimization
---

## Metadata in head

Multiple metadata fields are filled in to improve SEO:

- `title` and `og:title`: The index page gets the site title from `_config.yml`. Other pages use the pattern `page.type: page.title | site.title` when the attributes are present.
- `description` and `og:description`: The index page gets the site description from `_config.yml`. Other pages look for a description in this order: `page.description`, `page.summary`, Markdown content. In all three scenarios, the first 30 words are used.
- `keywords`: Created from `page_id` values in `page.related_pages` and the corresponding `page.title` values.
- `og:image` and `og:logo`: The image file available in `/assets/img/apple-touch-icon.png`. Replace this file if you want your brand logo to appear as a thumbnail when links are shared in chats.

These fields also influence how the website is previewed when the URL is shared on social media or in chats. See [Page mechanics](page_mechanics) and [Configuring the theme](configuring_theme) for how to set these attributes.

## Schema.org attributes

We use schema.org attributes and some bioschemas.org extensions to describe certain objects on the website in more detail. This includes contributors and their affiliations.

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

A sitemap is automatically generated using the `jekyll-sitemap` gem. This allows search engines to detect the site structure and which pages are available for indexing.

Make sure the gem is enabled in the `_config.yml` file in the root of your project like this:


```yml
plugins:
  - jekyll-sitemap
```
