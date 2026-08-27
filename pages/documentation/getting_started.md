---
title: Getting started
---

Follow these steps to use the theme.


## 1. Use the template or fork the example repository

Go to the [example repository](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme-example). Click `Use this template` or `Fork` in the top right to create a new repository from this template.

{: .note }
> The [example repository](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme-example) demonstrates how easy it is to set up the theme and how small the theme footprint can be. It contains the minimum files needed to start using the theme, so your own content stays separate from theme files and upgrades remain easier to review.

## 2. Select and pin a theme version

Before the first deployment, select a version from the [theme releases](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/releases), read its release notes and update the website's `Gemfile` using the file linked from that release tag. Pin the same exact theme version in `_config.yml` so a later rebuild cannot silently pull breaking changes.

See [Versions and upgrades](versions_and_upgrades) for examples and the policy to follow for every future upgrade.

## 3. Deploy using GitHub Actions

1. Go to Settings > Pages and enable GitHub Actions as a source
2. Go to Environments > github-pages and remove the rule under Deployment branches if you want to deploy branches other than master or main through Workflow Dispatch.
3. Push a change to the master or main branch to trigger GitHub Actions.

**Deploy using GitHub Pages (alternative)**

This is the quickest way to deploy the elixir-toolkit-theme, but it gives less flexibility and does not support the tool tagging workflow. Visit the [GitHub documentation](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/) to learn more about how to set up GitHub Pages.

NOTE: This deployment method does not support the tool tag in Markdown files.

## 4. Checking out your deployment

After waiting a minute or two, you can check your website. Deployments are served at `https://USER.github.io/FORK-NAME/` by default.

## 5. Making changes

Any change to the master or main branch will automatically trigger a redeployment of the website. More information on configuring the theme can be found on these documentation pages:

- [Changing the navigation structures](navigation_structures)
- [Configuring the theme](configuring_theme)
- [Applying custom branding](custom_branding)
- [Markdown cheat sheet](markdown_cheat_sheet)

## 6. Add a LICENSE file to your GitHub repository

Add a license to your repository using the [GitHub instructions](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository).
