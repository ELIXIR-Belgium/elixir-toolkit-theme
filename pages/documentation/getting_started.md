---
title: Getting started
---

Please follow following steps to use the theme.


### 1. Fork the example repository

Go to the [example repository](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme-example) (IMPORTANT). Click on the `Fork` button in the top right of GitHub to fork the repository.

{% include callout.html type="note" content="The [example repository](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme-example) repo should demonstrate how easy it is to setup the theme, but more importantly, to show how small the amount is you need. It is the bare bone start you want when using the theme from scratch. This way of using the theme will also make sure that your own content is not cluttered with theme files and that you can easily stay up to date when improvements to the theme are made." %}

### 2. Deploy using GitHub Actions

1. Go to Settings > Pages and enable GitHub Actions as a source
2. Go to Environments > github-pages and remove the rule under Deployment branches if you want to deploy other branches than master or main via Workflow Dispatch (manually triggered action)
3. Push a change to master/main branch and the GitHub Actions will be triggered.

**Deploy using GitHub Pages (alternative)**

This is the quickest way to deploy the elixir-toolkit-theme, but gives less flexibility and does not allow you to make use of the new way of tagging tools. Visit the [GitHub documentation](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/) to find out more about how to setup GitHub pages. 

NOTE: This way of deploying does not support the tool-tag in the text of the Markdown file to tag tools and resources.

### 3. Checking out your deployment

After waiting a minute or two (deployments can take  a while), you can checkout your website. THe deployment is by default served at https://USER.github.io/FORK-NAME/. 

### 4. Making changes

Any change to the master/main branch will automatically trigger the re-deployment of the website, so your changes come live. More information on how you can configure the theme can be found on the other documentation pages: 

- [Changing the navigation structures](navigation_structures)
- [Configuring the theme](configuring_theme)
- [Applying custom branding](custom_branding)
- [Markdown cheat sheet](markdown_cheat_sheet)

### 5. Add a LICENSE file to your GitHub repository. 

Add a license to your repository using the [GitHub instructions](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository).
