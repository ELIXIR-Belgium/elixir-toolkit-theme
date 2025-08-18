// Modified from: https://github.com/ghiculescu/jekyll-table-of-contents
(function ($) {
  $.fn.toc = function (options) {
    var defaults = {
      title: '<i>Jump to...</i>',
      minimumHeaders: 3,
      headers: 'h1, h2, h3, h4, h5, h6',
      listType: 'ol',       // values: [ol|ul]
      showEffect: 'show',   // values: [show|slideDown|fadeIn|none]
      showSpeed: 'slow',    // set to 0 to deactivate effect
      classes: {
        list: '',
        item: '',
        link: '',
        toc: ''
      }
    };

    // Do not mutate defaults; merge into a fresh object
    var settings = $.extend({}, defaults, options);

    // Encode fragment identifiers safely (e.g., handle !'()*)
    function fixedEncodeURIComponent(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16);
      });
    }

    // Build an <a> for a given header; ensure it has an id
    function createLink(header) {
      var innerText = header.textContent || header.innerText || '';
      if (!header.id) {
        header.id = innerText.trim()
          ? innerText.trim().replace(/\s+/g, '-').toLowerCase()
          : ('heading-' + Math.random().toString(36).slice(2, 8)); // fallback id
      }
      return "<a class='" + settings.classes.link + "' href='#" +
             fixedEncodeURIComponent(header.id) + "'>" + innerText + "</a>";
    }

    // Collect headers and ensure they have IDs (filter out those that still don't)
    var headers = $(settings.headers).filter(function () {
      if (!this.id) {
        var text = $(this).text().trim();
        this.id = text ? text.replace(/\s+/g, '-').toLowerCase() : '';
      }
      return this.id;
    });

    var output = $(this);          // the TOC container (e.g., #toc-contents)
    var $main  = $('#main');   

    // Prevents calling get_level(headers[0]) on undefined and collapses layout/space.
    if (!headers.length || headers.length < settings.minimumHeaders || !output.length) {
      $main.removeClass('add-grid'); // collapse layout (your existing side-effect + our flag)
      output.empty().hide();                 // hide/clear inner TOC container
      return;
    }

    // If speed is 0, disable visual effect
    if (settings.showSpeed === 0) settings.showEffect = 'none';

    // Optional extra class on the container
    output.addClass(settings.classes.toc);

    var render = {
      show:      function () { output.hide().html(html).show(settings.showSpeed); },
      slideDown: function () { output.hide().html(html).slideDown(settings.showSpeed); },
      fadeIn:    function () { output.hide().html(html).fadeIn(settings.showSpeed); },
      none:      function () { output.html(html); }
    };

    // Resilient parser of header levels (H1..H6 → 1..6). Returns NaN if invalid.
    var get_level = function (ele) {
      return (ele && ele.nodeName) ? parseInt(ele.nodeName.replace(/H/i, ''), 10) : NaN;
    };

    // Validate first level before proceeding
    var level = get_level(headers[0]);
    if (!isFinite(level)) {
      output.hide().empty();
      return;
    }

    var this_level;
    var html = settings.title + " <" + settings.listType + " class=\"" + settings.classes.list + "\">";

    // Build nested list based on header levels
    headers.each(function (_, header) {
      this_level = get_level(header);
      if (!isFinite(this_level)) return; // skip anything unexpected

      if (this_level === level) { // same level; same indent
        html += "<li class=\"" + settings.classes.item + "\">" + createLink(header);
      } else if (this_level <= level) { // moving up; close lists
        for (var i = this_level; i < level; i++) {
          html += "</li></" + settings.listType + ">";
        }
        html += "<li class=\"" + settings.classes.item + "\">" + createLink(header);
      } else { // moving down; open nested lists
        for (var j = this_level; j > level; j--) {
          html += "<" + settings.listType + " class=\"" + settings.classes.list + "\">" +
                  "<li class=\"" + settings.classes.item + "\">";
        }
        html += createLink(header);
      }
      level = this_level; // update for next header
    });

    html += "</" + settings.listType + ">";

    // Render with the selected effect
    (render[settings.showEffect] || render.none)();

    // Add grid + flag on #main (if your layout uses it), and flag #toc so CSS applies margin.
    $main.addClass('add-grid');
  };
})(jQuery);
