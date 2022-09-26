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

  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $(".fadein").each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 200) {
        $(this).addClass("is-fadein");
      }
    });
  });


  $(".modal-button").modaal();

  $('nav a[href^="#"]').click(function() {
      var adjust = 10;
      var speed = 400;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - adjust;
      $('body,html').animate({
          scrollTop: position
      }, speed,'swing');
      return false;
  })
});