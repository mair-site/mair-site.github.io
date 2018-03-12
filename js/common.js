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

$( "#tabs" ).tabs();


var updownElem = document.getElementById('updown');

var pageYLabel = 0;

updownElem.onclick = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;

  switch (this.className) {
    case 'up':
      pageYLabel = pageY;
      window.scrollTo(0, 0);
      this.className = 'down';
      break;

    case 'down':
      window.scrollTo(0, pageYLabel);
      this.className = 'up';
  }

}

window.onscroll = function() {
  var pageY = window.pageYOffset || document.documentElement.scrollTop;
  var innerHeight = 2*document.documentElement.clientHeight;

  switch (updownElem.className) {
    case '':
      if (pageY > innerHeight) {
        updownElem.className = 'up';
      }
      break;

    case 'up':
      if (pageY < innerHeight) {
        updownElem.className = '';
      }
      break;

    case 'down':
      if (pageY > innerHeight) {
        updownElem.className = 'up';
      }
      break;

  }
}