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
 * Settings for side navigation
 */
$(document).ready(function () {
    // Initialize navgoco with default options
    $("#sidebar>nav>ul").navgoco({
        caretHtml: '',
        accordion: true,
        openClass: 'active', // open
        save: false, // leave false or nav highlighting doesn't work right
        cookie: {
            name: 'navgoco',
            expires: false,
            path: '/'
        },
        slide: {
            duration: 400,
            easing: 'swing'
        }
    });
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
    const bs = window.bootstrap;
    // Initialize all popovers (click to open; HTML allowed; render in body)
    $('[data-bs-toggle="popover"]').each(function () {
        new bs.Popover(this, {
            html: true,
            sanitize: false,   // allow dropdown markup inside
            container: 'body',
            trigger: 'click'
        });
    });

    // When a popover is shown, initialize any dropdowns inside it
    $(document).on('shown.bs.popover', '[data-bs-toggle="popover"]', function () {
        const tipId = $(this).attr('aria-describedby');
        if (!tipId) return;
        const $tip = $('#' + tipId);
        if (!$tip.length) return;

        $tip.find('[data-bs-toggle="dropdown"]').each(function () {
            new bs.Dropdown(this);
        });
    });

    // Prevent clicks *inside* the popover from bubbling up (so it doesn't immediately close)
    $('body').on('click', function (e) {
        if ($(e.target).closest('.popover').length) {
            e.stopPropagation();
        }
    });

    // Close popovers when clicking outside any popover/trigger
    $(document).on('click', function (e) {
        const $t = $(e.target);
        const clickedTrigger = $t.closest('[data-bs-toggle="popover"]').length > 0;
        const clickedInsidePopover = $t.closest('.popover').length > 0;
        if (clickedTrigger || clickedInsidePopover) return;

        $('[data-bs-toggle="popover"]').each(function () {
            const inst = bs.Popover.getInstance(this);
            if (inst) inst.hide();
        });
    });

    // Close on ESC
    $(document).on('keydown', function (e) {
        if (e.key !== 'Escape') return;
        $('[data-bs-toggle="popover"]').each(function () {
            const inst = bs.Popover.getInstance(this);
            if (inst) inst.hide();
        });
    });
});
  

/**
 * Equalize contributor card heights in carousels and position arrows
 */
function equalizeContributorCardHeights() {
    $('.carousel[id^="contributors-carousel-"]').each(function() {
        var carousel = $(this);
        var maxHeight = 0;
        
        carousel.find('.contributor-cards .card').css('min-height', '');
        
        // Measure all slides by temporarily making them active
        carousel.find('.carousel-item').each(function() {
            var $item = $(this);
            var wasActive = $item.hasClass('active');
            
            $item.addClass('active').css({'visibility': 'hidden', 'position': 'absolute'});
            $item.find('.contributor-cards .card').each(function() {
                maxHeight = Math.max(maxHeight, $(this).outerHeight());
            });
            $item.css({'visibility': '', 'position': ''});
            if (!wasActive) $item.removeClass('active');
        });
        
        // Apply max height and position arrows
        if (maxHeight > 0) {
            carousel.find('.contributor-cards .card').css('min-height', maxHeight + 'px');
            carousel.find('.carousel-control-prev, .carousel-control-next').css('top', (maxHeight / 2 - 24) + 'px');
        }
    });
}

$(document).ready(function() {
    // Equalize heights on page load
    equalizeContributorCardHeights();
    
    // Re-equalize on window resize
    var resizeTimer;
    $(window).on('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            equalizeContributorCardHeights();
        }, 250);
    });
});
