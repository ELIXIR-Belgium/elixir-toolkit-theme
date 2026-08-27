---
title: Events
---

## Examples

### Past events

Use this snippet:

```liquid
{% raw %}{% include events.html event_type="past_event" col=2 %}{% endraw %}
```

This renders as:

{% include events.html event_type="past_event" col=2 %}

### Upcoming events with title, caption and truncation

Use this snippet:

```liquid
{% raw %}{% include events.html caption=true title=true event_type="upcoming_event" caption_url="/events" truncate=true limit=3 %}{% endraw %}
```

This renders as:

{% include events.html caption=true title=true event_type="upcoming_event" caption_url="/events" truncate=true limit=3 %}

### Parameters

* **`event_type`**: Required. Use `upcoming_event` or `past_event`.
* **`title`**: Show the event type as a heading when matching events are present (`true` or `false`).
* **`caption`**: Show the "An overview of all our events can be found on the events page." caption (`true` or `false`).
* **`caption_url`**: Use a custom URL when the main events page is not served at `/events`.
* **`truncate`**: Collapse descriptions longer than 40 words behind a button (`true` or `false`).
* **`limit`**: Limit the number of event items shown.
* **`col`**: Set the number of event columns from the medium breakpoint upwards. Defaults to `1`; use `col=2` for a two-column layout.
* **`related_pages`**: Show only events tagged with a `page_id`. Add the same ID to each event's `related_pages` list in `_data/events.yml`.

### Filter events by related page

Use this snippet:

```liquid
{% raw %}{% include events.html event_type="upcoming_event" related_pages="gp5" %}{% endraw %}
```

This renders as:

{% include events.html event_type="upcoming_event" related_pages="gp5" %}
