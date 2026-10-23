---
title:  "Writing a blog post - template"
contributors: ["Eli Chadwick"]
date: 2026-08-18
summary: How to set up a new blog post, including special behavior for links.
---

## Setting up the file

1. Inside the `docs/_blog` folder, create a folder with a date as its name, in the format `yyyy-mm-dd`. The date should be the intended publication date of the blog post (though this can be changed later).
1. Create a file inside the new folder you just created, and copy the raw Markdown of this template into it.
1. Set the filename to a short title or description of your post (replace spaces with hyphens), followed by `.md` - e.g. `title-of-your-post.md`.
1. Update the "front matter" (the part between `---` at the top of the document) as follows:
    1. Add a `title` for the post. This will be used as the first heading on the rendered page.
    1. Add `contributors`s to the array, separated by commas, e.g. `["Person A", "Person B"]`. See [Contributor page](TODO).
    1. Change the `date` to the intended publication date in `yyyy-mm-dd` format. This should match the name of the folder.

Example front matter:
```
---
title:  "Writing a blog post - template"
contributors: ["Short Example Contributor"]
date: 2026-06-18
---
```

## Including internal links

If you want to link to another page on the website, or from another page to a blog post, format the link as follows:

```
{% raw %}
[About ETT]({{baseurl}}{% link pages/about/about.md %})
{% endraw %}
```

[About ETT]({{baseurl}}{% link pages/about/about.md %})

Here the path should be relative to the root folder of the source code. If your site does not have `baseurl` set in `_config.yml`, you can remove the `{{ baseurl }}` part.

This formatting is necessary because the blog posts have automatically-generated permalinks that don't match the location of the Markdown files in the folder structure, so using a relative path to another page doesn't work the same as in other parts of the website. This format lets Jekyll handle setting the correct URL for the linked page.

External pages can be linked in the usual fashion: `[link text](url)`.


## Markdown cheat sheet

For everything else, including images, see the [Markdown cheat sheet]({% link pages/documentation/markdown_cheat_sheet.md %}).
