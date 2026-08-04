---
title: Upgrade procedure
---

Upgrade the theme as a deliberate website change. Avoid changing the theme version as part of an unrelated content update, so any regression is easier to identify and reverse.

## 1. Identify the current and target versions

Find the current version in the website's `_config.yml` or `Gemfile`, then select a target version from the [releases page](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/releases).

Read the release notes for the target version **and every intermediate version**. Major releases can contain breaking changes, but release notes for minor and patch versions must be checked as well.

{: .warning }
> Resolve all documented breaking changes and deprecations before deploying the upgrade.

## 2. Prepare the upgrade

1. Create a dedicated branch for the upgrade.
2. Record any local theme overrides, particularly files in `_includes` and `_layouts`. See [Safe customization and overrides](safe_customization).
3. Make sure the website builds successfully before changing anything. This provides a known-good baseline.
4. Open the `Gemfile` from the target release tag. For example: [`Gemfile` for version 6.1.0](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/6.1.0/Gemfile).

## 3. Update the dependencies and version pin

Replace or merge the website's `Gemfile` with the one from the target release. Preserve gems that are specific to the website, but use the released versions for the theme's dependencies.

Then update the exact theme pin. For a remote theme:

```yml
remote_theme: ELIXIR-Belgium/elixir-toolkit-theme@6.1.0
```

For a Ruby gem installation:

```ruby
gem "elixir-toolkit-theme", "6.1.0"
```

Use the same version in the release links and the theme pin. Install the updated dependencies and rebuild the lock file where the website uses one:

```sh
bundle install
bundle exec jekyll build
```

Commit the updated `Gemfile` and, when tracked by the website, `Gemfile.lock` together with the version-pin change.

## 4. Test the website

Preview the complete site, not only the page changed most recently. At minimum, verify:

- the home page and representative content pages;
- top and side navigation, breadcrumbs and the table of contents;
- search, tables, events and other interactive components used by the website;
- page metadata, contributor information and footer content;
- custom styling and JavaScript;
- every locally overridden include or layout;
- the production build, including warnings and broken internal links; and
- desktop and mobile layouts.

When possible, let a second person review major-version upgrades or changes that affect navigation and accessibility.

## 5. Deploy and monitor

Deploy the upgrade only after the preview and production build pass. Check the deployed website once more and keep the upgrade in a separate commit or pull request so it can be reverted cleanly.

If a problem is found, restore the previous exact version pin together with its `Gemfile` and `Gemfile.lock`. Do not point the site at `main` or an unversioned theme while troubleshooting.
