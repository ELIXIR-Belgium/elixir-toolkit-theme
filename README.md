---
permalink: /
---

[![Gem Version](https://badge.fury.io/rb/elixir-toolkit-theme.svg)](https://badge.fury.io/rb/elixir-toolkit-theme) [![Jekyll site CI](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/actions/workflows/jekyll.yml/badge.svg)](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/actions/workflows/jekyll.yml) [![DOI](https://zenodo.org/badge/421495867.svg)](https://zenodo.org/badge/latestdoi/421495867)


<p align="center">
<img src="assets/img/ett_compact_logo.svg" width="100" float="center"/>
<h1 align="center">ELIXIR Toolkit Theme </h1>
</p>

The ELIXIR toolkit theme is a Jekyll theme designed to support easy deployment of documentation websites but also more complex ones that require a central tool table and linking towards ELIXIR resources. 

Its key features:
- Easy deployment using GitHub Pages or GitHub Actions
- Advanced content search
- Create your own look with the many theme variables and support for custom classes
- Support for a central tools table
- Integrated attribution for contributors, editors and affiliations
- Page tagging and listing of those tagged pages
- Linking to ELIXIR resources including Bio.tools, FAIRsharing, FAIR Cookbook, RDMkit, TeSS and DSW
- Easy side navigation, top navigation and footer management
- Mobile friendly
- Create website sections with each section having its own sidebar
- Out of the box search engine optimizations including schema.org attributes and many other metadata attributes
- Web analytics through Matomo, Google Analytics or Plausible

## Enabling the theme on your Jekyll project

The quickest way to use the elixir-toolkit-theme is setting it as a [remote theme](https://blog.github.com/2017-11-29-use-any-theme-with-github-pages/) in your `config.yml` file:

```yaml
remote_theme: ELIXIR-Belgium/elixir-toolkit-theme
```

You can lock it onto a specific version using:

```yaml
remote_theme: ELIXIR-Belgium/elixir-toolkit-theme@4.2.0
```

### Using Ruby Gems (alternative)

Alternatively you can use the Ruby Gem of the theme (needed when using GitLab) by adding this line to your Jekyll site's Gemfile:

```ruby
gem "elixir-toolkit-theme"
```
You can lock it onto a specific version like this:

```ruby
gem "elixir-toolkit-theme", "~> 4.2.0"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: elixir-toolkit-theme
```

## Deployment

### Via GitHub Actions

1. Make sure you have a GitHub workflow file setup similar to the one in this repo at [.github/workflows/jekyll.yml](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/main/.github/workflows/jekyll.yml).
2. Go to Settings > Actions and enable Allow all actions and reusable workflows
3. Got to the Actions tab of the repository and trust the workflows to run.
4. Go to Settings > Pages and enable GitHub Actions as a source
5. Go to Environments > github-pages and remove the rule under Deployment branches if you want to deploy other branches than master or main via Workflow Dispatch (manually triggered action)
6. Trigger the workflow by pushing a change to main or manually trigger the actions within the Actions tab of the repository.

### Via GitHub Pages

This is the quickest way to deploy the elixir-toolkit-theme, but gives less flexibility and does not allow you to make use of the new way of tagging tools. Visit the [GitHub documentation](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/) to find out more about how to setup GitHub pages. 

NOTE: This way of deploying does not support the tool-tag in the text of the markdown file to tag tools and resources.

### Via GitLab Pages

Add an extra `.gitlab-ci.yml` file in the root of the repo with:

```yml
image: ruby:3.3

variables:
  JEKYLL_ENV: production

before_script:
  - bundle install

pages:
  stage: deploy
  script:
  - bundle exec jekyll build -d public
  artifacts:
    paths:
    - public
  only:
  - master

```


### Locally using Jekyll

1. If not already present on your machine, install **ruby**. 

1. Install Jekyll

     If you have never installed or run a Jekyll site locally on your computer, follow these instructions to install Jekyll: [https://jekyllrb.com/docs/installation/](https://jekyllrb.com/docs/installation/)

    ```
    gem install jekyll
    ```

1. Install dependencies

    ```
    bundle install
    ```

1. Deploy website locally in development mode:

    ```
    bundle exec jekyll serve
    ```

    If you want to deploy the website locally in production mode, do:

    ```
    JEKYLL_ENV=production PAGES_REPO_NWO='USER_OR_ORGANISATION/REPO_NAME' bundle exec jekyll serve --baseurl ""
    ```
Where `USER_OR_ORGANISATION/REPO_NAME` is the GitHub USER_OR_ORGANISATION/REPO_NAME (to be found in the url).

1. To preview your site, in your web browser, navigate to `http://localhost:4000`.
   
Additional information can be found at the following link: [https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll)


### Locally using Docker

If not already installed on your machine, install Docker. From the root of the `elixir-toolkit-theme` directory, run:

```sh
docker run -it --rm -p [::1]:4000:4000 -v $PWD:/srv/jekyll jekyll/jekyll:latest /bin/bash -c "chmod a+w /srv/jekyll/Gemfile.lock && chmod 777 /srv/jekyll && bundle install && bundle exec jekyll serve --host 0.0.0.0"
```

This will start the docker container and serve the website locally. Make sure the `.\_site` is not yet created to avoid permission errors.

## This theme is known to be used in

- [RDMkit](https://rdmkit.elixir-europe.org/) (CONVERGE)
- [WorkflowHub](https://about.workflowhub.eu/) (EOSC-life project)
- [RO-crate](https://www.researchobject.org/ro-crate/) (EOSC)
- [Infectious Diseases Toolkit](https://www.infectious-diseases-toolkit.org/) (BY-COVID)
- [FAIRDOM](https://fair-dom.org/) (FAIRDOM community)
- [How-to-Guides](https://australianbiocommons.github.io/how-to-guides/) (Australian BioCommons)
- [SPLASH](https://elixir-europe-training.github.io/ELIXIR-Training-SPLASH/) (ELIXIR Training platform)
- [1+MG Framework](https://framework.onemilliongenomes.eu/) (GDI)
- [Human 'Omics Data Sharing Field Guide](https://australianbiocommons.github.io/human-omics-data-sharing-field-guide/) (Australian BioCommons)
- [ERIM RDM Toolbox](https://eur-nl.github.io/erim-research-toolbox/) (ERIM NL)
- [ABLeS](https://australianbiocommons.github.io/ables) (Australian BioCommons)
- [TRE-FX](https://trefx.uk/) (DARE UK, HDR UK)
- [Norwegian Life Science RDM LookUp](https://elixir.no/rdm-lookup/) (ELIXIR Norway)
- [RSQkit: Research Software Quality kit](https://everse.software/RSQKit/) (EOSC-EVERSE)
- [dHMp norge](https://dhp-stottepakke.github.io/pages/) (ELIXIR Norway)
- [Learning-Library](https://patcapon39.github.io/Learning-Library/) (Australian BioCommons)
- [ELIXIR-IT Training Platform](https://elixir-iib-training.github.io/site/training_courses) (ELIXIR IT)
- [FAIRDOM-SEEK Documentation](https://docs.seek4science.org/) (SEEK community)
- [FAIR Lesson Plan Handbook](https://elixir-europe-training.github.io/ELIXIR-TrP-FAIR-Converge/)  (ELIXIR Training platform)
- [Data Steward Handbook](https://elixir-uk.github.io/elixir-ds-handbook) (ELIXIR RDM Community)
- [Fed-A-Crate](https://elixir-europe.github.io/fed-a-crate/how-to-contribute) (ELIXIR Fed-A-Crate project)
- [Federated Learning toolkit (FLkit)](https://uhasselt-biomedicaldatasciences.github.io/federated-learning-toolkit/) (UHasselt)
- [mTeSS-X](https://elixirtess.github.io/mTeSS-X/) (OSCARS project)
- Want your instance here? [Open an issue](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/issues)

## Dependencies

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
- [clipboard.js](https://github.com/zenorocha/clipboard.js) - Modern copy to clipboard. No Flash. Just 3kb gzipped clipboard.

## Attribution

If you like our work, you can add following badge to the readme of your project:
```
[![theme badge](https://img.shields.io/badge/ELIXIR%20toolkit%20theme-jekyll-blue?color=0d6efd)](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme)
```
[![theme badge](https://img.shields.io/badge/ELIXIR%20toolkit%20theme-jekyll-blue?color=0d6efd)](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme)



## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

