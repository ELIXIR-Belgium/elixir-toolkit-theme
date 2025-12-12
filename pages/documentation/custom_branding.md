---
title: Branding
---


The theme is made so one can easily customize the styling and add personal branding to the website.

## Branding in the top navigation

Change the icon in the topnav by adding a `main_logo.svg` file in the `/assets/img/` directory.
If you want to use another file format or use a different filename, please specify this in the theme variable section of the `_config.yml` file. For more info on this config file please visit our [Configuring the theme](configuring_theme) - page.

```yml
theme_variables: 
 topnav:
   brand_logo: assets/img/main_logo.svg
```

Certain elements like the GitHub link have options in the `/_config.yml` file as described in the [configuring theme](configuring_theme) page. 

## Theme styling using CSS

Bootstrap 5 is used as css library with the goal of reusing as much as possible to prevent a wild growth of classes and to make the html-code more understandable. SASS is used as css-precursor, a more structured and flexible language to describe the css styling. More information about the SASS language can be found [here](https://sass-lang.com/documentation/).

The order in which the css style sheets are loaded is as follows: bootstrap_variables > bootstrap > variables > custom_variables > main_theme_classes > custom_classes. The theme allows you to intervene and customize at different levels. It is recommended to customize on Bootstrap level, and only work your way down the ladder if needed.

### 1. Bootstrap variables

In the `/_sass/bootstrap_variables.scss` file, you can declare variables that can be used by Bootstrap. This is the very first place where one wants to customize their theme for things like:

- Primary, secondary, light and dark theme colors ($primary, $secondary, $light and $dark)
- The size of H1, H2, p,... ($h1-font-size, $h2-font-size)
- The color of links and their decoration ($link-color and $link-decoration)
- The main font ($font-family-sans-serif)

The variables that you can define, and their respective defaults, can be found in the [Bootstrap variables file](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/main/_sass/bootstrap/_variables.scss). 


### 2. Custom variables

In the `/_sass/custom_variables.scss` file, you can declare variables that can be used by the theme. These are variables that are used by the theme to define the color, background-color, size and more of components like:

- Sidebar background color and sidebar color ($sidebar-bg and $sidebar-color)
- Background color of the top-navigation ($topnav-bg)
- Background color of the footer ($footer-bg)
- Size of the branding logo in the top-navigation ($topnav-brand-heigh)

The variables that you can define, and their respective defaults, can be found in the [theme variables file](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/main/_sass/_variables.scss). 

### 3. Custom classes

In situations where the bootstrap and theme variables are not sufficient, one can add/overwrite css rules using the `/_sass/custom_classes.scss` file.
This file is loaded as last and can overwrite everything in the theme if needed. This is more used for customizations for theme users that are familiar with css to change things like:

- The distance between headings
- Adding a shadow to pictures
- Making sure the branding logo goes smaller in mobile mode

To have some inspiration on what is possible here, go to the [RDMkit custom classes stylesheet](https://github.com/elixir-europe/rdmkit/blob/master/_sass/_custom_classes.scss).

## Favicon logo

"A favicon, also known as a shortcut icon, website icon, tab icon, URL icon, or bookmark icon, is a file containing one or more small icons associated with a particular website or web page." - [Wikipedia](https://en.wikipedia.org/wiki/Favicon).

The one from the ELIXIR Toolkit Theme are defined in the `/assets/img` as:

- /assets/img/web-app-manifest-192x192.png
- /assets/img/web-app-manifest-512x512.png
- /assets/img/apple-touch-icon.png
- /assets/img/favicon-16x16.png
- /assets/img/favicon-32x32.png
- /assets/img/favicon-96x96.png
- /assets/img/favicon.ico
- /assets/img/site.webmanifest
- /assets/img/safari-pinned-tab.svg

These files can be overwritten in your own project by placing them in the same directory with the same name. These files can be easily generated out of an image of your square logo (preferably in svg) with for example the [Favicon generator](https://realfavicongenerator.net/).

## Custom Java Script

Sometimes it is needed to inject some custom Java Script code. This is possible by creating a file `/assets/js/custom.js`. Be aware that this javascript code will be loaded on every page.

## Branding in footer

The footer is one more place to add branding or important logo's. For more information on how to customize the footer, visit our [navigation structures](navigation_structures#footer) page.
