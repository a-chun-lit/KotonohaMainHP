$(function($){
    $('.bg-switcher').bgSwitcher({
        images: ['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval: 5000,
        loop: true
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

    $('.slider').slick({
        arrows: true,
        autoplay: true,
        dots: true,

        responsive:[{
          breakpoint: 480,
          settings:{
            slidesToShow: 1,
          }
        }]
    });
});