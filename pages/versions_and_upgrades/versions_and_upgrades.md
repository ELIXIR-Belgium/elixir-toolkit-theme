---
title: Versions and upgrades
---

Treat the theme version, its release notes and the `Gemfile` published with that release as one set. Choose a released version, review its notes, use its dependency definitions and pin the theme to that exact version.

{: .important }
> Do this when starting a new website and repeat it for every upgrade. Do not copy the `Gemfile` from the `main` branch: use the file from the tag of the version you are installing.

## Choose a released version

All supported versions and their release notes are listed on the [ELIXIR Toolkit Theme releases page](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/releases). For example, the files belonging to version `6.1.0` can be viewed under the [`6.1.0` tag](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/tree/6.1.0), including its [released `Gemfile`](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/blob/6.1.0/Gemfile).

When a site needs additional gems, merge those site-specific entries into the released `Gemfile` instead of discarding them.

## Lock the theme version

Always use an exact release number. This prevents a rebuild from silently pulling a different theme and introducing unexpected changes.

For a remote theme, pin the tag in `_config.yml`:

```yml
remote_theme: ELIXIR-Belgium/elixir-toolkit-theme@6.1.0
```

Do not use an unversioned reference or a moving branch such as `main` for a production website.

When installing the theme as a Ruby gem, use an exact version in the website's `Gemfile`:

```ruby
gem "elixir-toolkit-theme", "6.1.0"
```

An exact constraint is more predictable than a range such as `~> 6.1`. If the website tracks a `Gemfile.lock`, regenerate and commit it after changing dependencies so local, continuous integration and production builds use the same resolved versions.

## Semantic versioning

The ELIXIR Toolkit Theme uses [Semantic Versioning](https://semver.org/):

| Version change | Meaning | Example |
| --- | --- | --- |
| Major | May contain incompatible or breaking changes | `6.1.0` to `7.0.0` |
| Minor | Adds functionality in a backward-compatible way | `6.1.0` to `6.2.0` |
| Patch | Contains backward-compatible fixes | `6.1.0` to `6.1.1` |

Semantic versioning helps estimate the likely impact of an upgrade, but it does not replace reading the release notes or testing the website. Always check every release note between the installed and target versions, paying particular attention to sections labelled **Breaking changes**, **Deprecated** or **Migration**.

## Recommended workflow

- For a new website, follow [Getting started](getting_started) and pin a release before the first deployment.
- For an existing website, follow the complete [Upgrade procedure](upgrading_theme).
- Before upgrading, review [Safe customization and overrides](safe_customization), especially if the website contains files under `_includes` or `_layouts`.
