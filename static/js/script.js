!function(e){"use strict";function a(){if(e(".main-header").length){var a=e(window).scrollTop(),t=e(".main-header"),s=e(".scroll-to-top");a>=200?(t.addClass("fixed-header"),s.fadeIn(300)):(t.removeClass("fixed-header"),s.fadeOut(300))}}if(a(),e(".main-header li.dropdown ul").length&&(e(".main-header li.dropdown").append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'),e(".main-header li.dropdown .dropdown-btn").on("click",(function(){e(this).prev("ul").slideToggle(500)})),e(".fullscreen-menu .navigation li.dropdown > a").on("click",(function(){e(this).next("ul").slideToggle(500)})),e(".navigation li.dropdown > a").on("click",(function(e){e.preventDefault()})),e(".main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a").on("click",(function(e){e.preventDefault()}))),e(".hidden-bar,.fullscreen-menu").length){var t=e(".hidden-bar"),s=e(".nav-toggler"),n=e(".hidden-bar-closer,.close-menu");e(".hidden-bar-wrapper").mCustomScrollbar(),s.on("click",(function(){e("body").addClass("visible-menu-bar"),t.addClass("visible-sidebar")})),n.on("click",(function(){e("body").removeClass("visible-menu-bar"),t.removeClass("visible-sidebar")}))}(e(".custom-select-box").length&&e(".custom-select-box").selectmenu().selectmenu("menuWidget").addClass("overflow"),e(".filter-list").length&&e(".filter-list").mixItUp({}),e(".count-box").length&&e(".count-box").appear((function(){var a=e(this),t=a.find(".count-text").attr("data-stop"),s=parseInt(a.find(".count-text").attr("data-speed"),10);a.hasClass("counted")||(a.addClass("counted"),e({countNum:a.find(".count-text").text()}).animate({countNum:t},{duration:s,easing:"linear",step:function(){a.find(".count-text").text(Math.floor(this.countNum))},complete:function(){a.find(".count-text").text(this.countNum)}}))}),{accY:0}),e(".main-slider-carousel").length&&e(".main-slider-carousel").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",loop:!0,margin:0,nav:!0,autoHeight:!0,smartSpeed:500,autoplay:6e3,navText:['<span class="flaticon-back-5"></span>','<span class="flaticon-next-7"></span>'],responsive:{0:{items:1},600:{items:1},800:{items:1},1024:{items:1},1200:{items:1}}}),e(".team-carousel").length&&e(".team-carousel").owlCarousel({loop:!0,margin:30,nav:!0,autoHeight:!0,smartSpeed:500,autoplay:5e3,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:2},800:{items:3},1024:{items:3},1200:{items:3}}}),e(".single-item-carousel").length&&e(".single-item-carousel").owlCarousel({loop:!0,margin:0,nav:!0,smartSpeed:500,autoplay:4e3,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},480:{items:1},600:{items:1},800:{items:1},1024:{items:1}}}),e(".two-item-carousel").length&&e(".two-item-carousel").owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:500,autoplay:4e3,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},480:{items:1},600:{items:1},800:{items:2},1024:{items:2}}}),e(".three-item-carousel").length&&e(".three-item-carousel").owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:500,autoplay:4e3,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},480:{items:2},600:{items:3},800:{items:3},1024:{items:3}}}),e(".four-item-carousel").length&&e(".four-item-carousel").owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:500,autoplay:4e3,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},480:{items:2},600:{items:3},800:{items:3},1024:{items:4}}}),e(".sponsors-carousel").length&&e(".sponsors-carousel").owlCarousel({loop:!0,margin:30,nav:!0,smartSpeed:500,autoplay:4e3,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},480:{items:2},600:{items:3},800:{items:4},1024:{items:5}}}),e(".project-tab").length&&e(".project-tab .product-tab-btns .p-tab-btn").on("click",(function(a){a.preventDefault();var t=e(e(this).attr("data-tab"));if(e(t).hasClass("actve-tab"))return!1;e(".project-tab .product-tab-btns .p-tab-btn").removeClass("active-btn"),e(this).addClass("active-btn"),e(".project-tab .p-tabs-content .p-tab").removeClass("active-tab"),e(t).addClass("active-tab")})),e(".tabs-box").length&&e(".tabs-box .tab-buttons .tab-btn").on("click",(function(a){a.preventDefault();var t=e(e(this).attr("data-tab"));if(e(t).is(":visible"))return!1;t.parents(".tabs-box").find(".tab-buttons").find(".tab-btn").removeClass("active-btn"),e(this).addClass("active-btn"),t.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0),t.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab"),e(t).fadeIn(300),e(t).addClass("active-tab")})),e(".project-carousel").length&&e(".project-carousel").owlCarousel({loop:!0,margin:0,nav:!0,smartSpeed:700,autoplay:5e3,navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>'],responsive:{0:{items:1},600:{items:2},800:{items:2},1024:{items:3},1200:{items:4},1400:{items:5}}}),e(".accordion-box").length&&e(".accordion-box").on("click",".acc-btn",(function(){var a=e(this).parents(".accordion-box"),t=e(this).parents(".accordion");if(!0!==e(this).hasClass("active")&&e(a).find(".accordion .acc-btn").removeClass("active"),e(this).next(".acc-content").is(":visible"))return!1;e(this).addClass("active"),e(a).children(".accordion").removeClass("active-block"),e(a).find(".accordion").children(".acc-content").slideUp(300),t.addClass("active-block"),e(this).next(".acc-content").slideDown(300)})),e(".lightbox-image").length&&e(".lightbox-image").fancybox({openEffect:"fade",closeEffect:"fade",helpers:{media:{}}}),e("#contact-form").length&&e("#contact-form").validate({rules:{firstname:{required:!0},email:{required:!0,email:!0},phone:{required:!0},subject:{required:!0},message:{required:!0}}}),e(".scroll-to-target").length&&e(".scroll-to-target").on("click",(function(){var a=e(this).attr("data-target");e("html, body").animate({scrollTop:e(a).offset().top},1500)})),e(".wowallow").length)&&new WOW({boxClass:"wowallow",animateClass:"animated",offset:0,mobile:!0,live:!0}).init();e(window).on("scroll",(function(){a()})),e(window).on("load",(function(){e(".preloader").length&&e(".preloader").delay(200).fadeOut(500)}))}(window.jQuery);



(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery); 