---
title: Safe customization and overrides
---

Jekyll gives files in a website precedence over files with the same path in the theme. This makes the theme flexible, but a copied theme file becomes a complete local override that can hide future fixes and improvements.

## Be careful when overriding includes

A file such as `_includes/topnav.html` in the website replaces the theme's `_includes/topnav.html`; it does not extend or partially modify it. When the theme's include changes in a later release, the website continues using its local copy. The result can be broken markup, missing accessibility improvements or behaviour that no longer matches the rest of the theme.

The same risk applies to copied layouts and other theme files.

{: .warning }
> Every overridden theme include must be reviewed during every theme upgrade. An override that still builds can nevertheless cause unwanted behaviour.

## Prefer supported extension points

Use the least invasive option that meets the website's needs:

1. Use settings in `_config.yml` and the documented theme variables.
2. Use the intended custom files, such as `_sass/_custom_variables.scss`, `_sass/_custom_classes.scss` and `assets/js/custom.js`.
3. Request a reusable configuration option or extension point upstream.
4. Override an include or layout only when no supported extension point is available.

See [Configuring the theme](configuring_theme) and [Branding](custom_branding) for the available customization mechanisms.

## Propose reusable features upstream

If an override adds behaviour that could benefit other websites, propose it to the theme maintainers through a [GitHub issue](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/issues) or [pull request](https://github.com/ELIXIR-Belgium/elixir-toolkit-theme/pulls). A configuration option, parameter or reusable include in the theme is easier to maintain than separate copies across multiple websites.

Describe the use case rather than only the local implementation. This allows the maintainers to account for compatibility, accessibility and other theme users when designing the feature.
