---
layout: none
permalink: assets/js/main.js
---

/**
 * AnchorJS
 */
$(document).ready(function () {
    anchors.options = {
        placement: 'left'
    };
    anchors.add('h2:not(.no-anchor)');
})

/**
 * Function to open external links in separate tab
 */
$(document).ready(function () {
    for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
        var b = c[a];
        if (b.getAttribute("href") && b.hostname !== location.hostname) {
            b.target = "_blank";
            b.rel = "noopener";
        }
    }
});

/**
 * Sidebar height
 */
$(document).ready(function () {
    const breakpointLg = 992; // Bootstrap's lg breakpoint in pixels
    const main = document.getElementById('main');
    const sideNav = document.getElementById('side-nav');

    // If either element is missing, don't do anything
    if (!main || !sideNav) return;

    function getVisibleHeight(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, windowHeight);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      return visibleHeight;
    }

    function adjustSidebarHeight() {
        window.requestAnimationFrame(() => {
            if (window.innerWidth < breakpointLg) {
                sideNav.style.height = 'auto';
            } else {
                const visibleHeight = getVisibleHeight(main);
                sideNav.style.height = visibleHeight + 'px';
            }
        });
    }

    adjustSidebarHeight();

    window.addEventListener('scroll', adjustSidebarHeight);
    window.addEventListener('resize', adjustSidebarHeight);
});


/**
 * Back to top button
 */

var toggleHeight = $(window).outerHeight() / 2;

$(window).scroll(function () {
    if ($(window).scrollTop() > toggleHeight) {
        //Adds active class to make button visible
        $("#back-to-top").addClass("visible");

    } else {
        //Removes active class to make button visible
        $("#back-to-top").removeClass("visible");
    }
});

//Scrolls the user to the top of the page again
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



/**
 * Making relevant events visible
 */
function nowToDateString() {
    return new Date().toISOString().substring(0, 10);
};

function show_upcoming_events() {
    var dstr = nowToDateString();
    var events_block = $(document.getElementsByClassName("upcoming_events"));
    var elements = $('li.upcoming_event').filter(function () {
        return $(this).data('start') >= dstr;
    });
    if ($(elements).length > 0) {
        events_block.show()
    }
    elements.show();
};

function show_past_events() {
    var dstr = nowToDateString();
    var events_block = $(document.getElementsByClassName("past_events"));
    var elements = $('li.past_event').filter(function () {
        return $(this).data('start') < dstr;
    });
    if ($(elements).length > 0) {
        events_block.show()
    }
    elements.show();
};

/**
 * Making tables responsive
 */
$(document).ready(function () {
    $('table').each(function (i, obj) {
        if (!$(obj).parents('.table-responsive').length) {
            $(obj).wrap('<div class="table-responsive mt-4 mb-5"/>');
        }
    });

});

/**
 * Add clipboard button to code blocks
 */
$(document).ready(function () {
    var codes = document.querySelectorAll('.highlight > pre > code');
    var countID = 0;
    codes.forEach((code) => {
        code.setAttribute("id", "code" + countID);
        var btn = document.createElement('button');
        var div = document.createElement('div');
        btn.innerHTML = '<i class="fa-regular fa-copy"></i>';
        btn.className = "btn text-secondary m-1 btn-copy py-1 px-2";
        btn.title = "Copy to clipboard";
        btn.type = "button";
        btn.setAttribute("data-bs-toggle", "tooltip");
        btn.setAttribute("data-clipboard-action", "copy");
        btn.setAttribute("data-clipboard-target", "#code" + countID);
        div.append(btn)
        code.closest('div.highlight').classList.add("d-flex","justify-content-between");
        code.closest('.highlight').after(div);
        countID++;
    });     
});

/**
 * Enabling Clipboard.js
 */
$(document).ready(function () {
    var clipboard = new ClipboardJS('.btn-copy')

    clipboard.on('success', function (event) {
        var tooltipBtn = bootstrap.Tooltip.getInstance(event.trigger)
        tooltipBtn.setContent({ '.tooltip-inner': 'Copied!' })
    });
});

/**
 * Activate tooltips
 */

$(function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            animation: true
        })
    })
})

/**
 * Activate popovers
 */

$(function () {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
})
