// Modified from: https://github.com/ghiculescu/jekyll-table-of-contents
(function ($) {
  $.fn.toc = function (options) {
    var defaults = {
      title: '<i>Jump to...</i>',
      minimumHeaders: 3,
      headers: 'h1, h2, h3, h4, h5, h6',
      listType: 'ol', // values: [ol|ul]
      showEffect: 'show', // values: [show|slideDown|fadeIn|none]
      showSpeed: 'slow', // set to 0 to deactivate effect
      classes: {
        list: '',
        item: '',
        link: '',
        toc: ''
      }
    };

    // do not mutate defaults
    var settings = $.extend({}, defaults, options);

    function fixedEncodeURIComponent(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16);
      });
    }

    function createLink(header) {
      var innerText = header.textContent || header.innerText || '';
      // Ensure an id exists even if the text is empty
      if (!header.id) {
        header.id = innerText.trim()
          ? innerText.trim().replace(/\s+/g, '-').toLowerCase()
          : ('heading-' + Math.random().toString(36).slice(2, 8));
      }
      return "<a class='" + settings.classes.link + "' href='#" + fixedEncodeURIComponent(header.id) + "'>" + innerText + "</a>";
    }

    // Collect headers and ensure they have IDs
    var headers = $(settings.headers).filter(function () {
      if (!this.id) {
        var text = $(this).text().trim();
        this.id = text ? text.replace(/\s+/g, '-').toLowerCase() : '';
      }
      return this.id;
    });

    var output = $(this);

    // === SAFE GUARD: exit cleanly when no (or not enough) headers, regardless of page image ===
    if (!headers.length || headers.length < settings.minimumHeaders || !output.length) {
      $('#main').removeClass('add-grid');   // keep your original side-effect
      output.hide().empty();                // operate on the selected TOC container
      return;
    }

    if (settings.showSpeed === 0) {
      settings.showEffect = 'none';
    }

    output.addClass(settings.classes.toc);

    var render = {
      show: function () { output.hide().html(html).show(settings.showSpeed); },
      slideDown: function () { output.hide().html(html).slideDown(settings.showSpeed); },
      fadeIn: function () { output.hide().html(html).fadeIn(settings.showSpeed); },
      none: function () { output.html(html); }
    };

    // === Resilient level parser ===
    var get_level = function (ele) {
      return (ele && ele.nodeName) ? parseInt(ele.nodeName.replace(/H/i, ''), 10) : NaN;
    };

    var level = get_level(headers[0]);
    if (!isFinite(level)) {
      output.hide().empty();
      return;
    }

    var this_level;
    var html = settings.title + " <" + settings.listType + " class=\"" + settings.classes.list + "\">";

    headers.each(function (_, header) {
      this_level = get_level(header);
      if (!isFinite(this_level)) { return; } // skip weird nodes just in case

      if (this_level === level) { // same level as before; same indenting
        html += "<li class=\"" + settings.classes.item + "\">" + createLink(header);
      } else if (this_level <= level) { // higher level than before; end parent list(s)
        for (var i = this_level; i < level; i++) {
          html += "</li></" + settings.listType + ">";
        }
        html += "<li class=\"" + settings.classes.item + "\">" + createLink(header);
      } else if (this_level > level) { // lower level than before; expand previous to contain a list
        for (var j = this_level; j > level; j--) {
          html += "<" + settings.listType + " class=\"" + settings.classes.list + "\">" +
                  "<li class=\"" + settings.classes.item + "\">";
        }
        html += createLink(header);
      }
      level = this_level; // update for the next one
    });

    html += "</" + settings.listType + ">";

    (render[settings.showEffect] || render.none)();
  };
})(jQuery);
