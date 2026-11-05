---
title:  "Writing a blog post - template"
contributors: ["Eli Chadwick"]
description: How to set up a new blog post, including special behavior for links and images.
---

## Setting up the file

1. Create a Markdown file in the `_blog` folder, and copy the raw Markdown of this template into it.
1. Name the file after the intended publication date, followed by a short title or description of your post (replace spaces with hyphens), e.g. `2026-06-18-title-of-your-post.md`. The date is in the format `yyyy-mm-dd` and can be changed later. It determines the order of the posts, the year they are grouped under and the URL of the post.
1. Update the "front matter" (the part between `---` at the top of the document) as follows:
    1. Add a `title` for the post. This will be used as the first heading on the rendered page.
    1. Add `contributors` to the array, separated by commas, e.g. `["Person A", "Person B"]`. Add their details to `_data/CONTRIBUTORS.yml` to show an avatar and contact information, as described in [Page mechanics]({% link pages/documentation/page_mechanics.md %}).
    1. Optionally add a `date` in `yyyy-mm-dd` format to override the publication date from the filename.
    1. Optionally add a `description`: a single sentence that is shown below the post title and in the blog overview. Without it, the overview shows the first words of your post.

Example front matter:
```
---
title:  "Writing a blog post - template"
contributors: ["Short Example Contributor"]
description: How to set up a new blog post, including special behavior for links.
---
```

That is all you need: the post is picked up automatically by the blog overview page and the blog sidebar.

## Including internal links

If you want to link to another page on the website, or from another page to a blog post, format the link as follows:

```
{% raw %}
[About ETT]({{baseurl}}{% link pages/about/about.md %})
{% endraw %}
```

This renders as:

[About ETT]({{baseurl}}{% link pages/about/about.md %})

Here the path should be relative to the root folder of the source code. If your site does not have `baseurl` set in `_config.yml`, you can remove the {% raw %}`{{ baseurl }}`{% endraw %} part.

This formatting is necessary because the blog posts have automatically-generated permalinks that don't match the location of the Markdown files in the folder structure, so using a relative path to another page doesn't work the same as in other parts of the website. This format lets Jekyll handle setting the correct URL for the linked page.

External pages can be linked in the usual fashion: `[link text](url)`.


## Including images

Images of a blog post are stored in the `images` folder, just like the images of any other page. Keeping them together in an `images/blog` subfolder makes them easy to find:

```
images/
    blog/
        blog_image.svg
```

Include the image in the Markdown text with the path relative to the `images` folder:

```
{% raw %}
{% include image.html file="blog/blog_image.svg" caption="Figure 1. The ELIXIR logo." alt="ELIXIR logo" max-width="10em" %}
{% endraw %}
```

This renders as:

{% include image.html file="blog/blog_image.svg" caption="Figure 1. The ELIXIR logo." alt="ELIXIR logo" max-width="10em" %}

## Markdown cheat sheet

For everything else, including images, see the [Markdown cheat sheet]({% link pages/documentation/markdown_cheat_sheet.md %}).
