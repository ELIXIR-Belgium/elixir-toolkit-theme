---
title: Blog section
summary: How to enable the blog, and how the overview page and the blog sidebar are generated.
---

The blog is a [Jekyll collection](https://jekyllrb.com/docs/collections/) of posts stored as Markdown files in the `_blog` folder, named `yyyy-mm-dd-title-of-your-post.md`. The date in the filename is the publication date of the post. Both the blog overview page and the blog sidebar are generated from that collection, grouped per year, so adding a post is the only thing you have to do to publish it. Have a look at the [example Blog page](blog) to see the result.

## Configuration

To enable the blog feature, set the following in `_config.yml`:

```yaml
collections:
  blog: # corresponds to the _blog folder
    permalink: /blog/:year-:month-:day/:title # e.g. /blog/2026-07-20/example-post
    output: true

future: true # also build and show blog posts with a publication date in the future

defaults:
  # ...other settings...
  - scope:
      path: "_blog" # default settings for blog posts
    values:
      layout: "blog_post"
      sidebar: blog # show the automatically generated blog sidebar
```

The `date_format` setting in `_config.yml` determines how publication dates are displayed:

```yaml
date_format: "%-d %B %Y" # e.g. 20 July 2026
```

## Blog overview page

Create a page that includes the blog overview:

{% raw %}
```markdown
---
title: Blog
description: Latest updates from the ETT community
permalink: /blog
sidebar: blog
toc: false
---

{% include blog_posts.html %}
```
{% endraw %}

The include lists all posts grouped per year, newest first. Every post is shown as a [section navigation tile](website_sections) with its publication date, title, description and contributors. A post without a `description` falls back to the first 30 words of its content, skipping a heading at the top. Because it is an include, you can put your own text above or below it.

Also create a blog sidebar in `_data/sidebars/blog.yml`:

```yaml
title: Blog
title_url: /blog
```

The sidebar has no `subitems`: every page with `sidebar: blog` gets a sidebar that lists all posts, newest first, in a collapsible section per year. The year of the post you are reading is expanded automatically.

It is recommended to add the blog overview page to the [top navigation](navigation_structures#top-navigation), since it uses a different sidebar.

## Showing the latest posts elsewhere

To show the most recent posts on another page, for example the homepage, include the overview without the year headings:

{% raw %}
```liquid
{% include blog_posts.html limit=3 caption=true %}
```
{% endraw %}

| Parameter | Description |
|---|---|
| `limit` | Only show this number of most recent posts, without year headings. |
| `caption` | Set to `true` to show a link to the blog overview page below the list. |
| `caption_url` | URL of the blog overview page. Defaults to the `title_url` in `_data/sidebars/blog.yml`. |
{% include blog_posts.html limit=3 caption=true %}
## Creating a post

See [Writing a blog post - template]({% link _blog/2026-08-18-writing-blog-posts.md %}).

A post is rendered by the `blog_post` layout: the title, the publication date and the `description` as introduction, followed by the content, the metadata panel with the [contributors](page_mechanics), and links to the previous and next post. Like on other pages, a `type` in the front matter is shown as subtitle above the title.

## Previewing a post

Follow the [local deployment instructions](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme#locally-using-jekyll) to preview a blog post on the website.

## Posts with a future publication date

With `future: true` in `_config.yml`, as in the configuration above, every post is built and shown, including posts with a publication date in the future. This is the recommended setting: what you see locally is what is published, and a post is never listed without its page existing.

If you prefer to hide posts until their publication date, remove `future: true` (or set it to `false`). Jekyll then does not build the pages of future posts, and the theme hides those posts in the browser, in the overview, the sidebar and the links to the neighbouring posts, together with the years that are left without a published post. The post only gets its page once the website is rebuilt on or after the publication date, so make sure the site is rebuilt on that day, for example by [scheduling the GitHub Actions deployment workflow](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow#schedule). Use `bundle exec jekyll serve --future` to still preview future posts locally.
