(function ($) {
	"use strict"; 
	/*-----------------------
		Slick Slider Custom Code
	------------------------*/
    $('.slider-active').slick({
      centerMode: true,
      dots: true,
      fade: true,
      centerPadding: '0',
      slidesToShow: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 970,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }); 
}); 