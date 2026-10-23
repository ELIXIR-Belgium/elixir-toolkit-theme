---
title: Blog section
---

## Configuration

To enable the blog feature, set the following settings in `_config.yml`:

```yaml
collections:
  blog: # corresponds to the _blog folder
    permalink: /blog/:path # e.g. /blog/2026-07-20/example-post.html
    output: true

defaults:
  # ...other settings...
  - scope:
      path: "_blog" # default settings for blog pages
    values:
      layout: "page"
      sidebar: blog # show separate sidebar for the blog
      dateline: true # show date below title
```

Any page in the `_blog` folder automatically becomes part of the collection. You can use any folder/file naming convention within the `_blog` folder, but it is recommended to include the date to help with ordering.

All items in the collection can be retrieved in a template using `site.blog`. By default they will be sorted by the `date` in each page's front matter (oldest first).

## Blog landing page

Create a blog landing page with the following content:

```markdown
---
title: Blog
description: Latest updates from the ETT community
permalink: /blog
sidebar: blog
toc: false
---

{% raw %}
{% include blog_posts.html %}
{% endraw %}
```

Also create a blog sidebar in `_data/sidebars/blog.yml`:

```yaml
title: Blog
title_url: blog
subitems:
  # leave empty - this list is populated automatically when the site is generated
```

The `blog` sidebar and blog post feed are automatically populated (see the [example Blog page](blog)).

It's recommended to add the blog landing page to the [top navigation](navigation_structures#top-navigation) since it uses a different sidebar.

## Creating a post

See [Writing a blog post - template]({% link _blog/2026-08-18/writing-blog-posts.md %}).

## Previewing a post

Follow the [local deployment instructions](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme#locally-using-jekyll) to preview a blog post on the website.

By default, posts with a publication date in the future will not be displayed. Use `bundle exec jekyll serve --future` to display future posts.

## Publishing a post

By default, posts with a publication date in the future will not be displayed. This means a post can be merged into the website a few days before its intended publication. However, you do need to ensure that the site is rebuilt on the publication date in order for the post to show up - this can be achieved by [scheduling the GitHub Actions deployment workflow](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow#schedule) to run on a regular basis.
