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

    $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
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

// Вкладки через jquery-ui.min.js для страницы /price/

    $( "#tabs" ).tabs();

});

// Вариант JavaScript

var t;
var top         = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
var updownElem  = document.getElementById('updown');

if (top > 1) {
    updownElem.className = 'up';
}

function up() {
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}

// Вариант jQuery
// (function($) {
//     $(function() {
    
//       $('#up').click(function() {
//         $('html, body').animate({scrollTop: 0},500);
//         return false;
//       })
    
//     })
// })(jQuery)