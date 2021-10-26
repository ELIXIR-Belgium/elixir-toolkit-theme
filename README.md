# Jekyll bootstrap theme

This repository is used to build a flexible Jekyll theme using bootstrap 5 as CSS framework.

## Using Jekyll

The website is build on GitHub using Jekyll, a simple, static site generator based on ruby. When you have a local copy cloned onto your computer, it is possible to generate the website based on this repo. This makes it possible to preview changes live, every time you save a file from within the GitHub rdmkit repo. Follow these steps to deploy the website based on your local clone (copy) of the rdmkit repo:

Make sure you have cloned the rdmkit repo:

    git clone git@github.com:USERNAME/rdmkit.git
    cd rdmkit


To run the website locally, you can either use [Docker](https://www.docker.com/) or use Jekyll directly after installing various dependencies.

### Run using Docker

If not already installed on your machine, install Docker. From the root of the ``jekyll-bootstrap-theme`` directory, run:
```
docker run -it --rm -p 4000:4000 -v $PWD:/srv/jekyll jekyll/jekyll:latest /bin/bash -c "chmod a+w /srv/jekyll/Gemfile.lock && chmod 777 /srv/jekyll && jekyll serve -w"
```
This will start the docker container and serve the website locally.

### Run using Jekyll directly

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



## Used packages:

- [Bootstrap5](https://github.com/twbs/bootstrap)
- [DataTables](https://datatables.net/examples/styling/bootstrap5.html)
- [AnchorJS](https://www.bryanbraun.com/anchorjs/)
- [lunr.js](https://lunrjs.com/)
- [jQuery](https://jquery.com/)
- [jekyll-table-of-contents](https://github.com/ghiculescu/jekyll-table-of-contents)
- [jQuery Navgoco Menus](https://github.com/tefra/navgoco)
