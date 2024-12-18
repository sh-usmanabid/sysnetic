var THEMEMASCOT = {};
(function($) {
	
	"use strict";


  /* ---------------------------------------------------------------------- */
  /* --------------------------- Start Demo Switcher  --------------------- */
  /* ---------------------------------------------------------------------- */
  var showSwitcher = true;
  var $body = $('body');
  var $style_switcher = $('#style-switcher');
  if( !$style_switcher.length && showSwitcher ) {
      $.ajax({
          url: "color-switcher/style-switcher.html",
          success: function (data) { $body.append(data); },
          dataType: 'html'
      });
  }
  /* ---------------------------------------------------------------------- */
  /* ----------------------------- En Demo Switcher  ---------------------- */
  /* ---------------------------------------------------------------------- */


  

  THEMEMASCOT.isRTL = {
    check: function() {
      if( $( "html" ).attr("dir") === "rtl" ) {
        return true;
      } else {
        return false;
      }
    }
  };

  THEMEMASCOT.isLTR = {
    check: function() {
      if( $( "html" ).attr("dir") !== "rtl" ) {
        return true;
      } else {
        return false;
      }
    }
  };
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header-style-one');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				sticky_header.addClass("fixed-header animated slideInDown");
				scrollLink.fadeIn(300);
			}else {
				sticky_header.removeClass("fixed-header animated slideInDown");
				scrollLink.fadeOut(300);
			}
			if (windowpos > 1) {
				siteHeader.addClass("fixed-header");
			}else {
				siteHeader.removeClass("fixed-header");
			}
		}
	}
	headerStyle();

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		var mobileMenuContent = $('.main-header .main-menu .navigation').html();

		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});

	}

	//Header Search
	if($('.search-btn').length) {
		$('.search-btn').on('click', function() {
			$('.main-header').addClass('moblie-search-active');
		});
		$('.close-search, .search-back-drop').on('click', function() {
			$('.main-header').removeClass('moblie-search-active');
		});
	}



	//Banner Carousel
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 500,
			autoHeight: true,
			autoplay: true,
			autoplayTimeout: 10000,
			navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1024: {
					items: 1
				},
			}
		});
	}

	//Services Carousel
	if ($('.services-carousel').length) {
		$('.services-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 20,
			nav: false,
			smartSpeed: 400,
			autoplay: true,
			navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				768: {
					items: 2
				},
				1023: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
	}



	//Event Countdown Timer
	if ($('.time-countdown').length) {
		$('.time-countdown').each(function () {
			var $this = $(this), finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function (event) {
				var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span><span class="title">Days</span></div> ' + '<div class="counter-column"><span class="count">%H</span><span class="title">Hours</span></div>  ' + '<div class="counter-column"><span class="count">%M</span><span class="title">Minutes</span></div>  ' + '<div class="counter-column"><span class="count">%S</span><span class="title">Seconds</span></div>'));
			});
		});
	}


	//Quantity box
  $(".quantity-box .add").on("click", function () {
    if ($(this).prev().val() < 999) {
      $(this)
        .prev()
        .val(+$(this).prev().val() + 1);
    }
  });
  $(".quantity-box .sub").on("click", function () {
    if ($(this).next().val() > 1) {
      if ($(this).next().val() > 1)
        $(this)
        .next()
        .val(+$(this).next().val() - 1);
    }
  });

	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 10,
			max: 99,
			values: [ 10, 60 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});

		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );
	}


	// Select2 Dropdown
	$('.custom-select').select2({
		minimumResultsForSearch: 7,
	});

	//Gallery Filters
	 if($('.filter-list').length){
	 	 $('.filter-list').mixItUp({});
	 }

	//Custom Data Attributes
	if($('[data-tm-bg-color]').length){
		$('[data-tm-bg-color]').each(function() {
		  $(this).css("cssText", "background-color: " + $(this).data("tm-bg-color") + " !important;");
		});
	}
	if($('[data-tm-bg-img]').length){
		$('[data-tm-bg-img]').each(function() {
		  $(this).css('background-image', 'url(' + $(this).data("tm-bg-img") + ')');
		});
	}
	if($('[data-tm-text-color]').length){
		$('[data-tm-text-color]').each(function() {
		  $(this).css('color', $(this).data("tm-text-color"));
		});
	}
	if($('[data-tm-font-size]').length){
		$('[data-tm-font-size]').each(function() {
		  $(this).css('font-size', $(this).data("tm-font-size"));
		});
	}
	if($('[data-tm-opacity]').length){
		$('[data-tm-opacity]').each(function() {
		  $(this).css('opacity', $(this).data("tm-opacity"));
		});
	}
	if($('[data-tm-height]').length){
		$('[data-tm-height]').each(function() {
		  $(this).css('height', $(this).data("tm-height"));
		});
	}
	if($('[data-tm-width]').length){
		$('[data-tm-width]').each(function() {
		  $(this).css('width', $(this).data("tm-width"));
		});
	}
	if($('[data-tm-border]').length){
		$('[data-tm-border]').each(function() {
		  $(this).css('border', $(this).data("tm-border"));
		});
	}
	if($('[data-tm-border-top]').length){
		$('[data-tm-border-top]').each(function() {
		  $(this).css('border-top', $(this).data("tm-border-top"));
		});
	}
	if($('[data-tm-border-bottom]').length){
		$('[data-tm-border-bottom]').each(function() {
		  $(this).css('border-bottom', $(this).data("tm-border-bottom"));
		});
	}
	if($('[data-tm-border-radius]').length){
		$('[data-tm-border-radius]').each(function() {
		  $(this).css('border-radius', $(this).data("tm-border-radius"));
		});
	}
	if($('[data-tm-z-index]').length){
		$('[data-tm-z-index]').each(function() {
		  $(this).css('z-index', $(this).data("tm-z-index"));
		});
	}

	if($('[data-tm-padding]').length){
		$('[data-tm-padding]').each(function() {
		  $(this).css('padding', $(this).data("tm-padding"));
		});
	}
	if($('[data-tm-padding-top]').length){
		$('[data-tm-padding-top]').each(function() {
		  $(this).css('padding-top', $(this).data("tm-padding-top"));
		});
	}
	if($('[data-tm-padding-right]').length){
		$('[data-tm-padding-right]').each(function() {
		  $(this).css('padding-right', $(this).data("tm-padding-right"));
		});
	}
	if($('[data-tm-padding-bottom]').length){
		$('[data-tm-padding-bottom]').each(function() {
		  $(this).css('padding-bottom', $(this).data("tm-padding-bottom"));
		});
	}
	if($('[data-tm-padding-left]').length){
		$('[data-tm-padding-left]').each(function() {
		  $(this).css('padding-left', $(this).data("tm-padding-left"));
		});
	}

	if($('[data-tm-margin]').length){
		$('[data-tm-margin]').each(function() {
		  $(this).css('margin', $(this).data("tm-margin"));
		});
	}
	if($('[data-tm-margin-top]').length){
		$('[data-tm-margin-top]').each(function() {
		  $(this).css('margin-top', $(this).data("tm-margin-top"));
		});
	}
	if($('[data-tm-margin-right]').length){
		$('[data-tm-margin-right]').each(function() {
		  $(this).css('margin-right', $(this).data("tm-margin-right"));
		});
	}
	if($('[data-tm-margin-bottom]').length){
		$('[data-tm-margin-bottom]').each(function() {
		  $(this).css('margin-bottom', $(this).data("tm-margin-bottom"));
		});
	}
	if($('[data-tm-margin-left]').length){
		$('[data-tm-margin-left]').each(function() {
		  $(this).css('margin-left', $(this).data("tm-margin-left"));
		});
	}

	if($('[data-tm-top]').length){
		$('[data-tm-top]').each(function() {
		  $(this).css('top', $(this).data("tm-top"));
		});
	}
	if($('[data-tm-right]').length){
		$('[data-tm-right]').each(function() {
		  $(this).css('right', $(this).data("tm-right"));
		});
	}
	if($('[data-tm-bottom]').length){
		$('[data-tm-bottom]').each(function() {
		  $(this).css('bottom', $(this).data("tm-bottom"));
		});
	}
	if($('[data-tm-left]').length){
		$('[data-tm-left]').each(function() {
		  $(this).css('left', $(this).data("tm-left"));
		});
	}


	// count Bar
	if ($(".count-bar").length) {
		$(".count-bar").appear(
			function () {
					var el = $(this);
					var percent = el.data("percent");
					$(el).css("width", percent).addClass("counted");
				}, {
					accY: -50
			}
		);
	}

	//product bxslider
	if ($('.product-details .bxslider').length) {
		$('.product-details .bxslider').bxSlider({
        nextSelector: '.product-details #slider-next',
        prevSelector: '.product-details #slider-prev',
        nextText: '<i class="fa fa-angle-right"></i>',
        prevText: '<i class="fa fa-angle-left"></i>',
        mode: 'fade',
        auto: 'true',
        speed: '700',
        pagerCustom: '.product-details .slider-pager .thumb-box'
    });
	};

	//Projects Carousel
	if ($('.projects-carousel').length) {
		$('.projects-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 30,
			nav: false,
			smartSpeed: 400,
			autoplay: true,
			//navText: ['<span class="fa fa-long-arrow-alt-left"></span>', '<span class="fa fa-long-arrow-alt-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				767: {
					items: 1
				},
				1023: {
					items: 1
				},
				1200: {
					items: 1
				}
			}
		});
	}

	//Projects Carousel Two
	if ($('.projects-carousel-two').length) {
		$('.projects-carousel-two').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 30,
			nav: false,
			smartSpeed: 400,
			autoplay: true,
			navText: [,],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				767: {
					items: 1
				},
				1023: {
					items: 1
				},
				1400: {
					items: 2
				}
			}
		});
		
		// Custom navigation controls functionality
		$('.owl-prev').click(function() {
			$('.projects-carousel-two').trigger('prev.owl.carousel');
		});

		$('.owl-next').click(function() {
			$('.projects-carousel-two').trigger('next.owl.carousel');
		});
	}

	// Testimonial Carousel
	$(document).ready(function() {
		if ($('.testimonial-carousel').length) {
			$('.testimonial-carousel').owlCarousel({
				// margin:30,
				// rtl: THEMEMASCOT.isRTL && THEMEMASCOT.isRTL.check(), // Ensure THEMEMASCOT is defined if used
				loop: true,
				// center:true,
				nav: false,
				smartSpeed: 700,
				autoplay: 5000,
				dots: false,
				
				navText: ['<span class="flaticon-left-chevron"></span>', '<span class="flaticon-right-chevron"></span>'],
				responsive: {
					0: {
						items: 1,
						stagePadding: 20
					},
					576: {
						items: 1,
						stagePadding: 50

					},
					992: {
						items: 2,
						//stagePadding: 50

					},
					1200:{
						items:2,
						// stagePadding: 100
					}
				}
			});
		}
	});
	

	// Testimonial Carousel Two
	if ($('.testimonial-carousel-two').length) {
		$('.testimonial-carousel-two').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 30,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
		});
	}

	// Testimonial Carousel Three
	if ($('.testimonial-carousel-three').length) {
		$('.testimonial-carousel-three').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 30,
			nav: true,
			items: 1,
			smartSpeed: 700,
			autoplay: 5000,
		});
	}

	//Clients Carousel
	if ($('.clients-carousel').length) {
		$('.clients-carousel').owlCarousel({
			rtl: THEMEMASCOT.isRTL.check(),
			loop: true,
			margin: 0,
			autoplay: true,
			autoplayTimeout: 1000, // Very short timeout for continuous effect
			autoplaySpeed: 16000, // Remove delay between slides
			smartSpeed: 8000, // Duration for smooth transition
			autoplayHoverPause: false, // Keep it moving even on hover
			// slideBy: 1, // Move one item at a time for smoothness
			nav: false,  // Keep it moving even on hover
			navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 2
				},
				480: {
					items: 4
				},
				600: {
					items: 4
				},
				768: {
					items: 5
				},
				1023: {
					items: 7
				},
			}
		});
	}


	//Jquery Knob animation  // Pie Chart Animation
	if ($('.dial').length) {
		$('.dial').appear(function () {
			var elm = $(this);
			var color = elm.attr('data-fgColor');
			var perc = elm.attr('value');

			elm.knob({
				'value': 0,
				'min': 0,
				'max': 100,
				'skin': 'tron',
				'readOnly': true,
				'thickness': 0.07,
				'dynamicDraw': true,
				'displayInput': false
			});

			$({ value: 0 }).animate({ value: perc }, {
				duration: 2000,
				easing: 'swing',
				progress: function () {
					elm.val(Math.ceil(this.value)).trigger('change');
				}
			});

			//circular progress bar color
			$(this).append(function () {
				// elm.parent().parent().find('.circular-bar-content').css('color',color);
				//elm.parent().parent().find('.circular-bar-content .txt').text(perc);
			});

		}, { accY: 20 });
	}



	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
	
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
				
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}


	//Progress Bar
	if ($('.progress-line').length) {
		$('.progress-line').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, { accY: 0 });
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 0);
	
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	

  /* ---------------------------------------------------------------------- */
  /* ----------- Activate Menu Item on Reaching Different Sections ---------- */
  /* ---------------------------------------------------------------------- */
//   var $onepage_nav = $('.onepage-nav');
//   var $sections = $('section');
//   var $window = $(window);
//   function TM_activateMenuItemOnReach() {
// 	  if( $onepage_nav.length > 0 ) {
// 	    var cur_pos = $window.scrollTop() + 2;
// 	    var nav_height = $onepage_nav.outerHeight();
// 	    $sections.each(function() {
// 	      var top = $(this).offset().top - nav_height - 80,
// 	        bottom = top + $(this).outerHeight();

// 	      if (cur_pos >= top && cur_pos <= bottom) {
// 	        $onepage_nav.find('a').parent().removeClass('current').removeClass('active');
// 	        $sections.removeClass('current').removeClass('active');
// 	        $onepage_nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('current').addClass('active');
// 	      }

// 	      if (cur_pos <= nav_height && cur_pos >= 0) {
// 	        $onepage_nav.find('a').parent().removeClass('current').removeClass('active');
// 	        $onepage_nav.find('a[href="#header"]').parent().addClass('current').addClass('active');
// 	      }
// 	    });
// 	  }
// 	}
	
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
		TM_activateMenuItemOnReach();
	});
	
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);

document.addEventListener('DOMContentLoaded', function() {
	const logosSlides = document.querySelectorAll('.logos-slide');

	logosSlides.forEach(slide => {
		const images = slide.querySelectorAll('img');
		let totalWidth = 0;
		
		images.forEach(img => {
			const imgStyles = window.getComputedStyle(img);
			const marginLeft = parseFloat(imgStyles.marginLeft);
			const marginRight = parseFloat(imgStyles.marginRight);
			const imgWidth = img.offsetWidth;
			totalWidth += imgWidth + marginLeft + marginRight;
		});

		slide.style.width = totalWidth + 'px';
	});
});

$(document).ready(function() {
	// Define all tech stack items
	const allTechStack = [
		{ imageSrc: "images/resource/1.png", alt: "Nuxt JS", name: "Nuxt JS", category: "frontend" },
		{ imageSrc: "images/resource/2.png", alt: "Firebase", name: "Firebase", category: "backend" },
		{ imageSrc: "images/resource/3.png", alt: "Flutter", name: "Flutter", category: "mobile" },
		{ imageSrc: "images/resource/4.png", alt: "Laravel", name: "Laravel", category: "backend" },
		{ imageSrc: "images/resource/5.png", alt: "MongoDB", name: "MongoDB", category: "database" },
		{ imageSrc: "images/resource/6.png", alt: "Node JS", name: "Node JS", category: "backend" },
		{ imageSrc: "images/resource/7.png", alt: "Vue JS", name: "Vue JS", category: "frontend" },
		{ imageSrc: "images/resource/8.png", alt: "React JS", name: "React JS", category: "frontend" },
		{ imageSrc: "images/resource/9.png", alt: "AWS", name: "AWS", category: "cloud" },
		{ imageSrc: "images/resource/10.png", alt: "Nest JS", name: "Nest JS", category: "backend" },
		{ imageSrc: "images/resource/11.png", alt: "PostgreSQL", name: "PostgreSQL", category: "database" },
		{ imageSrc: "images/resource/13.png", alt: "Express JS", name: "Express JS", category: "backend" },
		{ imageSrc: "images/resource/14.png", alt: "Adonis JS", name: "Adonis JS", category: "backend" },
		{ imageSrc: "images/resource/15.png", alt: "Typescript", name: "Typescript", category: "frontend" },
		{ imageSrc: "images/resource/16.png", alt: "GraphSQL", name: "GraphQL", category: "database" },
		{ imageSrc: "images/resource/17.png", alt: "MySQL", name: "MySQL", category: "database" },
		{ imageSrc: "images/resource/18.png", alt: "TypeORM", name: "TypeORM", category: "backend" },
		{ imageSrc: "images/resource/19.png", alt: "Prism ORM", name: "Prism ORM", category: "backend" },
		{ imageSrc: "images/resource/20.png", alt: "Knex JS", name: "Knex JS", category: "backend" },
		{ imageSrc: "images/resource/21.png", alt: "Sequelize", name: "Sequelize", category: "backend" },
		{ imageSrc: "images/resource/22.png", alt: "Next JS", name: "Next JS", category: "frontend" },
		{ imageSrc: "images/resource/23.png", alt: "Gatsby", name: "Gatsby", category: "frontend" },
		{ imageSrc: "images/resource/24.png", alt: "Angular", name: "Angular", category: "frontend" },
		{ imageSrc: "images/resource/25.png", alt: "Tailwind CSS", name: "Tailwind CSS", category: "frontend" },
		{ imageSrc: "images/resource/26.png", alt: "Bootstrap", name: "Bootstrap", category: "frontend" },
		{ imageSrc: "images/resource/27.png", alt: "PHP", name: "PHP", category: "backend" },
		{ imageSrc: "images/resource/28.png", alt: "SASS", name: "SASS", category: "frontend" },
		{ imageSrc: "images/resource/29.png", alt: "CodeIgniter", name: "CodeIgniter", category: "backend" },
		{ imageSrc: "images/resource/30.png", alt: "Kubernetes", name: "Kubernetes", category: "cloud" },
		{ imageSrc: "images/resource/31.png", alt: "Docker", name: "Docker", category: "cloud" },
		{ imageSrc: "images/resource/32.png", alt: "Swift", name: "Swift", category: "mobile" },
		{ imageSrc: "images/resource/33.png", alt: "Kotlin", name: "Kotlin", category: "mobile" },
		{ imageSrc: "images/resource/34.png", alt: "Ionic", name: "Ionic", category: "mobile" },
		{ imageSrc: "images/resource/35.png", alt: "Azure", name: "Azure", category: "cloud" }
	];

	$('.category-button').click(function() {
		const category = $(this).data('category');
		$('.tech-stack').empty();

		// Highlight the active button
        $('.category-button').removeClass('active'); // Remove 'active' class from all buttons
        $(this).addClass('active'); // Add 'active' class to the clicked button
		
		// Filter the tech stack based on the selected category
		const techStackData = category === 'all' ? allTechStack : allTechStack.filter(item => item.category === category);

		// Populate the tech stack items
		techStackData.forEach(item => {
			const techStackItem = $('<div class="tech-stack-item">');
			techStackItem.append($('<img>').attr('src', item.imageSrc).attr('alt', item.alt));
			techStackItem.append($('<div>').text(item.name));
			$('.tech-stack').append(techStackItem);
		});
	});

	// Trigger the 'All' category by default
	$('.category-button[data-category="all"]').trigger('click');
});

