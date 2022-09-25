$(function ($) {
  $('.slider').slick({
    arrows: true,
    autoplay: true,
    dots: true,

    responsive: [{
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
});