[![Gem Version](https://badge.fury.io/rb/elixir-toolkit-theme.svg)](https://badge.fury.io/rb/elixir-toolkit-theme)[![Jekyll site CI](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/actions/workflows/jekyll.yml/badge.svg)](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/actions/workflows/jekyll.yml)

<p align="center">
<img src="assets/img/main_logo.svg" width="100" float="center"/>
<h1 align="center">ELIXIR toolkit theme </h1>
</p>

The ELIXIR toolkit theme is a Jekyll theme designed to support easy deployment of documentation websites but also more complex ones that require a central tool table and linking towards ELXIR resources. 

Its features:
- Easy deployment using GitHub pages
- Advanced content search
- 

## Installation

### via GitHub Pages remote theme

The quickiest way to use Just The Docs is to use GitHub pages [remote theme](https://blog.github.com/2017-11-29-use-any-theme-with-github-pages/) feature in your `config.yml` file:

```yaml
remote_theme: ELIXIR-Belgium/elixir-toolkit-theme
```
### via RubyGems:

Alternatively you can install it as a Ruby Gem (preferred way if you use GitLab).

Add this line to your Jekyll site's Gemfile:

```ruby
gem "elixir-toolkit-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: elixir-toolkit-theme
```

## Usage

[View the documentation](https://just-the-docs.github.io/just-the-docs/) for usage information.

## Deployment

### Using GitHub pages

### Using Docker

If not already installed on your machine, install Docker. From the root of the ``jekyll-bootstrap-theme`` directory, run:
```
docker run -it --rm -p 4000:4000 -v $PWD:/srv/jekyll jekyll/jekyll:latest /bin/bash -c "chmod a+w /srv/jekyll/Gemfile.lock && chmod 777 /srv/jekyll && bundle exec jekyll serve -w"
```
This will start the docker container and serve the website locally.

### Locally using Jekyll

1. If not already present on your machine, install ruby. Note that incompatibility issues may arise with ruby 3.0.0 (released 25.12.20) or newer versions.


1. Install Jekyll
If you have never installed or run a Jekyll site locally on your computer, follow these instructions to install Jekyll:
   * Install Jekyll on MacOS/Ubuntu/Other_Linux/Windows: [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

1. Install Bundler and Jekyll

    ```
    gem install jekyll bundler
    ```

1. Install dependencies

    ```
    bundle install
    ```

1. deploy website

    ```
    bundle exec jekyll serve
    ```

Additional information can be found at the following link: [https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll)






## Used packages

This theme would not be possible without following open source projects:

- [Bootstrap5](https://github.com/twbs/bootstrap) - As main CSS framework
- [DataTables](https://github.com/DataTables/DataTablesSrc) - To generate tables that are sortable, searchable and contain pagination
- [AnchorJS](https://github.com/bryanbraun/anchorjs) - Adds deep anchor links to the headings
- [lunr.js](https://github.com/olivernn/lunr.js) - Main tool behind the search bar enabling content search
- [jQuery](https://github.com/jquery/jquery) - A fast, small, and feature-rich JavaScript library for easy scripting
- [jekyll-table-of-contents](https://github.com/ghiculescu/jekyll-table-of-contents) - Lightweight JS script to render the table of contents
- [jQuery Navgoco Menus](https://github.com/tefra/navgoco) - Multi-level slide navigation with accordion effect
- [Font-Awesome](https://github.com/FortAwesome/Font-Awesome) - The famous icon library
- [flag-icons](https://github.com/lipis/flag-icons) - A curated collection of all country flags in SVG + css integration

## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

