---
title: Events
---

## Simple example with past events

```
{% raw %}
{% include events.html event_type="past_event" %}
{% endraw %}
```

Becomes:

{% include events.html event_type="past_event" %}

## More complex example with upcoming events

```
{% raw %}
{% include events.html caption=true title=true event_type="upcoming_event" caption_url="/about/events" truncate=true limit=3 %}
{% endraw %}
```

Becomes:

{% include events.html caption=true title=true event_type="upcoming_event" caption_url="/about/events" truncate=true limit=3 %}

### Parameters

* `event_type`: MANDATORY! *upcoming_event* or *past_event* as value
* `title`: Visualize the *event_type* as title when events are present from this type. Use *true* as value to enable this.
* `caption`: Show the "An overview of all our events can be fount on the events page." by using *true*.
* `caption_url`: Add a custom url if the main events page is not served at */events*
* `truncate`: If longer event descriptions are used and this parameter is set to *true*, descriptions which are longer than 40 words will get collapsed behind a button.
* `limit`: Integer to determine the amount of news items shown.




