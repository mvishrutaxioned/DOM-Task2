$(document).ready(function() {
    console.log('ready')

    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true
    });

    $('#menu').click(() => {
        $('nav').addClass('showNav')
        $('html, body').css("overflow", "hidden")
    })

    $('#close').click(() => {
        $('nav').removeClass('showNav')
        $('html, body').css("overflow", "visible")
    })
})