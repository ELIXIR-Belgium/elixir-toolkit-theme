// Without `future: true` in _config.yml, Jekyll does not build blog posts with
// a publication date in the future. This script hides those posts in the browser
// so they are not listed without a page. Only loaded when `future` is not true.
$(function () {
    // Hide every post that is not published yet, in the overview, the sidebar
    // and the links to the neighbouring posts
    $('[data-blog-date]').each(function () {
        var publicationDate = new Date($(this).attr('data-blog-date') + "T00:00:00Z");
        if (publicationDate > Date.now()) {
            $(this).addClass('blog-unpublished').removeClass('d-flex').hide();
        }
    });

    // Lists with a limit contain all posts: only keep the first published ones
    $('[data-blog-limit]').each(function () {
        var limit = parseInt($(this).attr('data-blog-limit'), 10);
        $(this).find('[data-blog-date]').not('.blog-unpublished').slice(limit).hide();
    });

    // Hide the years that are left without a published post. Collapsed sidebar
    // items are not visible, so count the hidden posts instead.
    $('[data-blog-year]').each(function () {
        var posts = $(this).find('[data-blog-date]');
        if (posts.length == posts.filter('.blog-unpublished').length) {
            $(this).addClass('blog-unpublished').removeClass('d-flex').hide();
            $('[data-blog-year-heading="' + $(this).attr('data-blog-year') + '"]').removeClass('d-flex').hide();
        }
    });
});
