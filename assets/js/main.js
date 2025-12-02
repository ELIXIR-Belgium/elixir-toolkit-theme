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
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
})

/**
 * Equalize contributor card heights in carousels and position arrows
 */
function equalizeContributorCardHeights() {
    // Find all contributor carousels
    $('.carousel[id^="contributors-carousel-"]').each(function() {
        var carousel = $(this);
        var maxHeight = 0;
        
        // Reset any previously set heights
        carousel.find('.contributor-cards .card').css('min-height', '');
        
        // Find the maximum natural height across all cards in this carousel
        carousel.find('.contributor-cards .card').each(function() {
            var cardHeight = $(this).outerHeight();
            if (cardHeight > maxHeight) {
                maxHeight = cardHeight;
            }
        });
        
        // Apply the maximum height to all cards in this carousel
        if (maxHeight > 0) {
            carousel.find('.contributor-cards .card').css('min-height', maxHeight + 'px');
            
            // Position carousel control arrows at 50% of the card height
            var arrowTopPosition = (maxHeight / 2) - 24; // 24px is half of the 3rem (48px) button height
            carousel.find('.carousel-control-prev, .carousel-control-next').css('top', arrowTopPosition + 'px');
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
