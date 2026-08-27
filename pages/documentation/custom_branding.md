---
title: Custom branding
---


The theme is designed so you can customize the styling and add your own branding to the website.

## Branding in the top navigation

Change the icon in the topnav by adding a `main_logo.svg` file in the `/assets/img/` directory.
If you want to use another file format or a different filename, specify this in the theme variable section of the `_config.yml` file. For more information, see [Configuring the theme](configuring_theme).

```yml
theme_variables: 
 topnav:
   brand_logo: assets/img/main_logo.svg
```

Certain elements like the GitHub link have options in the `/_config.yml` file as described in the [configuring theme](configuring_theme) page. 

Top navigation colors are controlled with Sass variables in `/_sass/_custom_variables.scss` as described below.

## Theme styling using CSS

Bootstrap 5 is used as the CSS library, with the goal of reusing existing utilities and preventing uncontrolled growth in custom classes. Sass is used as the CSS preprocessor. More information about Sass can be found [here](https://sass-lang.com/documentation/).

The CSS stylesheets are loaded in this order: `bootstrap_variables` > `bootstrap` > `variables` > `custom_variables` > `main_theme_classes` > `custom_classes`. The theme allows you to customize at different levels. Start with Bootstrap variables, and only move further down the chain when needed.

### 1. Bootstrap variables

In the `/_sass/_bootstrap_variables.scss` file, you can declare variables that are used by Bootstrap. This is the first place to customize theme-wide basics such as:

- Primary, secondary, light and dark theme colors ($primary, $secondary, $light and $dark)
- The size of H1, H2, p,... ($h1-font-size, $h2-font-size)
- The color of links and their decoration ($link-color and $link-decoration)
- The main font ($font-family-sans-serif)

The variables that you can define, and their respective defaults, can be found in the [Bootstrap variables file](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/main/_sass/bootstrap/_variables.scss). 


### 2. Custom variables

In the `/_sass/_custom_variables.scss` file, you can declare variables that can be used by the theme. These are variables that are used by the theme to define the color, background-color, size and more of components like:

- Sidebar background color and sidebar color ($sidebar-bg and $sidebar-color)
- Background color of the top-navigation ($topnav-bg)
- Active and hover styles of the top-navigation ($topnav-link-color-active and $topnav-link-bg-active)
- Background color of the footer ($footer-bg)
- Size of the branding logo in the top-navigation ($topnav-brand-height)

The variables that you can define, and their respective defaults, can be found in the [theme variables file](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/main/_sass/_variables.scss). 

### 3. Custom classes

When Bootstrap and theme variables are not sufficient, add or override CSS rules using the `/_sass/custom_classes.scss` file.
This file is loaded last and can override the rest of the theme if needed. It is mostly useful for theme users familiar with CSS who want to change things like:

- The distance between headings
- Adding a shadow to pictures
- Making sure the branding logo goes smaller in mobile mode

For inspiration, see the [RDMkit custom classes stylesheet](https://github.com/elixir-europe/rdmkit/blob/main/_sass/_custom_classes.scss).

## Favicon logo

"A favicon, also known as a shortcut icon, website icon, tab icon, URL icon, or bookmark icon, is a file containing one or more small icons associated with a particular website or web page." - [Wikipedia](https://en.wikipedia.org/wiki/Favicon).

The one from the ELIXIR Toolkit Theme are defined in the `/assets/img` as:

- /assets/img/web-app-manifest-192x192.png
- /assets/img/web-app-manifest-512x512.png
- /assets/img/apple-touch-icon.png
- /assets/img/favicon-16x16.png
- /assets/img/favicon-32x32.png
- /assets/img/favicon.ico
- /assets/img/site.webmanifest

These files can be overwritten in your own project by placing replacements in the same directory with the same names. They can be generated from a square logo, preferably SVG, with tools such as the [Favicon generator](https://realfavicongenerator.net/).

{: .note }
> Since v6.0.0 `/assets/img/favicon-96x96.png` is added and the `assets/img/android-chrome-xxxxxxx.png` files have been replaced with `/assets/img/web-app-manifest-xxxxxxx.png`. See above list for reference.

## Custom JavaScript

Sometimes you need to inject custom JavaScript. You can do this by creating `/assets/js/custom.js`. Be aware that this JavaScript code is loaded on every page.

## Branding in footer

The footer is another place to add branding or important logos. For more information on customizing the footer, see [Navigation structures](navigation_structures#footer).
