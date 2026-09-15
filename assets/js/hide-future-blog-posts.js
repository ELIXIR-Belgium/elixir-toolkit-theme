// loop through all blog post items with a date
$('.blog-list-item[date]').each(function () {
    // parse the date
    var itemDate = new Date($(this).attr('date') + "T00:00:00Z");
    // compare dates and hide future posts
    if (itemDate > Date.now()) {
        $(this).removeClass('d-flex');
        $(this).hide();
    }
});
