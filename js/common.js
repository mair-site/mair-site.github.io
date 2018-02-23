$(document).ready(function() {
    var $header = $('header');
    var $logo = $('.company-name');

    $(window).scroll( function() {
        if ($(this).scrollTop() > 100 ) {
            $header.addClass('minimised');
        } else {
            $header.removeClass('minimised');
        }
    });

    $('#open-nav').click( function() {
        $('body').toggleClass('nav-open');
    });

});

$('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

$(document).ready(function(){
    // Activate Carousel
    $('#myCarousel').carousel({interval: 4000});

    // Enable Carousel Indicators
    $('.item1').click(function(){
        $('#myCarousel').carousel(0);
    });
    $('.item2').click(function(){
        $('#myCarousel').carousel(1);
    });
    $('.item3').click(function(){
        $('#myCarousel').carousel(2);
    });

    // Enable Carousel Controls
    $('.left').click(function(){
        $('#myCarousel').carousel('prev');
    });
    $('.right').click(function(){
        $('#myCarousel').carousel('next');
    });
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    navText: "",
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})