$('.ask').on('click', function() {
    $('.ask').not(this).removeClass('active').next().slideUp(500);
    $(this).toggleClass('active').next().slideToggle(500);
});

$('.js-filter').click(function () {
    const attr = $(this).attr('data-filter');

    if (attr == 'all') {
        $(`div[data-filter]`).slideDown(500);
    } else {
        $(`div[data-filter]`).slideUp(100);
    }
    $(`div[data-filter = ${attr}]`).slideDown(500);
});

$('.read-more').on('click', function() {
    $('.text-hidden').toggleClass('hidden');

    if ($('.read-more').html().trim() == 'Read More') {
        $('.read-more').html('Hide');
    }else {
        $('.read-more').html('Read More');
    }
});

let inner = $('h1').html(),
            fullText = '';

function write(i = 0) {
    fullText += inner[i++];
    $('h1').html(fullText);

    setTimeout(() => {
        if (fullText != inner) {
            write(i);
        }
    }, 100);
}

write();