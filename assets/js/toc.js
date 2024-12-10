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
    },
    settings = $.extend(defaults, options);

    function fixedEncodeURIComponent(str) {
      return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16);
      });
    }

    function createLink(header) {
      var innerText = header.textContent || header.innerText;
      return "<a class='" + settings.classes.link + "' href='#" + fixedEncodeURIComponent(header.id) + "'>" + innerText + "</a>";
    }

    var headers = $(settings.headers).filter(function () {
      // Ensure headers have IDs
      if (!this.id) {
        this.id = $(this).text().trim().replace(/\s+/g, '-').toLowerCase();
      }
      return this.id;
    });

    var output = $(this);

    // Check if there are any headers
    if (!headers.length || headers.length < settings.minimumHeaders || !output.length || $('#page-img').length) {
      $('#main').removeClass("add-grid");
      $("#toc").hide();
      return;  // Exit early if there are no headers
    }

    if (settings.showSpeed === 0) {
      settings.showEffect = 'none';
    }

    $(this).addClass(settings.classes.toc);

    var render = {
      show: function () { output.hide().html(html).show(settings.showSpeed); },
      slideDown: function () { output.hide().html(html).slideDown(settings.showSpeed); },
      fadeIn: function () { output.hide().html(html).fadeIn(settings.showSpeed); },
      none: function () { output.html(html); }
    };

    var get_level = function (ele) { return parseInt(ele.nodeName.replace("H", ""), 10); };
    var highest_level = headers.map(function (_, ele) { return get_level(ele); }).get().sort()[0];
    var level = get_level(headers[0]), this_level;
    var html = settings.title + " <" + settings.listType + " class=\"" + settings.classes.list + "\">";

    headers.each(function (_, header) {
      this_level = get_level(header);
      if (this_level === level) { // same level as before; same indenting
        html += "<li class=\"" + settings.classes.item + "\">" + createLink(header);
      } else if (this_level <= level) { // higher level than before; end parent ol
        for (var i = this_level; i < level; i++) {
          html += "</li></" + settings.listType + ">"
        }
        html += "<li class=\"" + settings.classes.item + "\">" + createLink(header);
      } else if (this_level > level) { // lower level than before; expand the previous to contain a ol
        for (i = this_level; i > level; i--) {
          html += "<" + settings.listType + " class=\"" + settings.classes.list + "\">" +
            "<li class=\"" + settings.classes.item + "\">"
        }
        html += createLink(header);
      }
      level = this_level; // update for the next one
    });
    html += "</" + settings.listType + ">";
    render[settings.showEffect]();
  };
})(jQuery);
