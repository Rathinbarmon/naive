(function ($) {
	"use strict"; 
	
	/*-----wow initialize-----*/
	new WOW().init();
	
	/*-----Preloading JS-----*/ 
    $(window).load(function() {
        $('.preloader-wrap').fadeOut('500', function() {
            $(this).remove();
        });
    });
	
	/*-----One PageNav initialize-----*/
	$(".main-menu-area").onePageNav();	 
	
	/*-----Mobile Nav-----*/
	jQuery('#mobile-nav').meanmenu();
  
	/*-----sticky nav-----*/
	$(window).on('scroll',function(){
		var scroll= $(window).scrollTop();
		if(scroll<600){
			$(".main-menu-area").removeClass("sticky");
		}
		else{
			$(".main-menu-area").addClass("sticky");
		}
	});
	
	/*-----Venobox JS-----*/
	$('.vbox-popup').venobox({
		numeratio: true,
		infinigall: true
	});  

	/*-----Mixutup JS----*/
	$('#portfolio-items').mixItUp({	
		animation: {
			effects: 'fade translateZ(-100px)',
			duration: 1000
		}
	});
	
	/*-----magnificPopup for pop-images-----*/
	$('.pop-up').magnificPopup({
		type: 'image',
		gallery: {
			  enabled: true, // set to true to enable gallery
		}
	});

	/*-----Magnific Popup for pop-up vedio-----*/
	$('.vedio-play-btn').magnificPopup({
		type: 'iframe'
	}); 
	
	/*-----ScrollToTop JS-----*/
	$(window).scroll(function() {
		var wScroll = $(this).scrollTop();
		if (wScroll > 800) {
			$('.scroll-to-top').fadeIn('slow');
		} else {
			$('.scroll-to-top').fadeOut('slow');
		}
	}); 
	$('.scroll-to-top').on('click', function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	}); 
	
	/*-----Smooth scroll Js-----*/
	$('.navbar-nav li a, .home-arrow-down a').on('click', function(event) {
		   $('.navbar-nav li a, .home-arrow-down a').parent().removeClass('active');
		var $anchor = $($(this).attr('href')).offset().top - 60;
		   $(this).parent().addClass('active');
		$('body, html').animate({scrollTop : $anchor}, 800);
					 event.preventDefault();
		return false;
	});  
	/*-----owlCarousel for testimonial-----*/
	$(".testimonial-slider").owlCarousel({
		items:3,
		autoplay:true,  
		loop:true,  
		nav:false,
		responsive:{
			0:{
				items:1, 
				nav:false,
				loop:true
			},
			600:{
				items:1,
				nav:false,
				loop:true
			},
			1000:{
				items:1, 
				nav:false,
				loop:true
			}
		} 
	});
	
	/*-----owlCarousel for testimonial-----*/
	$(".brand-active").owlCarousel({
		items:3,
		autoplay:true,  
		loop:true,  
		nav:false,
		responsive:{
			0:{
				items:2, 
				nav:false,
				loop:true
			},
			600:{
				items:3,
				nav:false,
				loop:true
			},
			1000:{
				items:6, 
				nav:false,
				loop:true
			}
		} 
	}); 
	
})(jQuery);	