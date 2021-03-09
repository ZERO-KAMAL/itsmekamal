AOS.init();
$(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
        $('.navbar').addClass("fixed")
        $('.arrow').show();
    } else {
        $('.navbar').removeClass("fixed")
        $('.arrow').hide();
    }
})