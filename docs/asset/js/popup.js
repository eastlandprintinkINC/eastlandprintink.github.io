$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 1500) {
            $('.prodsc').css('color', 'white');
        } else {
            $('.prodsc').css('color', 'green');
        }
    });
});