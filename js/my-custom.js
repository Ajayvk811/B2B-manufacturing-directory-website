/*****************************Slider******************************/
$(document).ready(function () {
   $('.image-slider').slick({
     dots: false,
     infinite: true,
     slidesToShow: 1,
     fade:true,
     arrows: true,
     autoplay:true,
     autoplaySpeed: 3000,
   });
   $(".prev-btn").click(function () {
       $(".image-slider").slick("slickPrev");
    });
 
    $(".next-btn").click(function () {
       $(".image-slider").slick("slickNext");
    });
});
$(document).ready(function() {
   var $slider = $('.category-slider');
   $slider.slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      focusOnSelect: true,
      centerMode: false,
      infinite: false,
      responsive: [
         {
           breakpoint: 1440,
           settings: {
             slidesToShow: 4,
             slidesToScroll: 1,
           }
         },
         {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
         },
         {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
         },
         {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots:true
            }
         },
      ]
   });
   // Function to update the class based on the state of the navigation buttons
   function updateSliderNavClasses() {
      if ($('.slick-prev.slick-disabled').length) {
         $slider.addClass('slick-prev-end');
      } else {
         $slider.removeClass('slick-prev-end');
      }

      if ($('.slick-next.slick-disabled').length) {
         $slider.addClass('slick-next-end');
      } else {
         $slider.removeClass('slick-next-end');
      }
   }

   // Initial update
   updateSliderNavClasses();

   // Update classes after slide change
   $slider.on('afterChange', function() {
      updateSliderNavClasses();
   });

   // Update classes on initialization (in case slider starts at the end)
   $slider.on('init', function() {
      updateSliderNavClasses();
   });

   // Update classes on arrow click (in case user interacts with arrows)
   $slider.on('beforeChange', function() {
      updateSliderNavClasses();
   });
});
$(document).ready(function() {
   function initSlickSlider() {
       var $catsliderMobile = $('.top-cat-box');

       if ($(window).width() <= 575) {
           if (!$catsliderMobile.hasClass('slick-initialized')) {
               $catsliderMobile.slick({
                   slidesToShow: 1,
                   slidesToScroll: 1,
                   dots: true,
                   arrows:false,
                   infinite: true,
                   centerMode: false,
                   centerPadding: '0px',
               });
           }
       } else {
           if ($catsliderMobile.hasClass('slick-initialized')) {
               $catsliderMobile.slick('unslick');
           }
       }
   }

   // Initial call to check the viewport width and initialize/destroy the slider
   initSlickSlider();

   // Call initSlickSlider on window resize to handle changes in viewport width
   $(window).resize(function() {
       initSlickSlider();
   });
});
$(document).ready(function () {
   // Initialize all sliders
   function initializeSliders() {
       $('.top-cat-box-multiple').each(function() {
           $(this).slick({
               dots: false,
               infinite: true,
               slidesToShow: 6,
               slidesToScroll: 1,
               arrows: false,
               autoplay: true,
               autoplaySpeed: 3000,
               responsive: [
                  {
                  breakpoint: 1440,
                  settings: {
                     slidesToShow: 5,
                     slidesToScroll: 1,
                  }
                  },
                  {
                     breakpoint: 1200,
                     settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                     }
                  },
                  {
                     breakpoint: 991,
                     settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                     }
                  },
                  {
                     breakpoint: 767,
                     settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                     }
                  },
                  {
                     breakpoint: 439,
                     settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                     }
                  }
               ]
           });
       });
   }

   // Initialize sliders on document ready
   initializeSliders();

   // Event delegation for dynamically created buttons
   $(document).on('click', '.prev-btn', function () {
       var slider = $(this).closest('.card-body').find('.top-cat-box-multiple');
       slider.slick('slickPrev');
   });

   $(document).on('click', '.next-btn', function () {
       var slider = $(this).closest('.card-body').find('.top-cat-box-multiple');
       slider.slick('slickNext');
   });
});
/***********************************************************/
$(document).ready(function() {
   // Find the submit button
   $('.form-action input[type="submit"]').each(function() {
     // Create a new span element
     var $span = $('<span></span>');
     
     // Add the class to the span
     $span.addClass('submit-shad');
     
     // Append the span to the submit button
     $(this).after($span);
   });
});
/***************************************isotope Gird************************************/
$(document).ready(function() {
   $('.grid-insight').isotope({
      itemSelector: '.grid-item',
      masonry: {
         fitWidth: true
      }
   });
});
$(document).ready(function() {
   $('.category-grid').isotope({
      itemSelector: '.grid-item',
      masonry: {
         fitWidth: true
      }
   });
});
/***************************************Sidebar Menu************************************/
jQuery(document).ready(function(){
   jQuery('.navbar-nav>.dropdown').each(function() {
       
       // Prepend the dropdown trigger to each sidebar-dropdown
       var dropdownTrigger = jQuery('<span class="dropdown-Trigger"></span>');
       jQuery(this).prepend(dropdownTrigger);
       // Toggle sidebar-sub-menu when clicking on dropdown trigger
       dropdownTrigger.click(function() {
           var subMenu = jQuery(this).parent().find('ul.sub-menu');
           subMenu.slideToggle(200);
           jQuery(this).parent().toggleClass('open');
           // Hide other sidebar-sub-menus
           jQuery('.navbar-nav>.dropdown ul.sub-menu').not(subMenu).slideUp(200);
           jQuery('.navbar-nav>.dropdown ul.sub-menu').not(subMenu).parent().removeClass('open');
           return false; // Prevent default anchor behavior
       });
   });
});
/**************Animation*************************************/
$(document).ready(function() {
   if ($(".wow").length) {
      var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
      });
      wow.init();
   }
});
/******************List view and Grid View*******************/
$(document).ready(function() {
   $('.list-view-button').click(function() {
      $(this).addClass('list-active');
      $('.grid-view-button').removeClass('grid-active');
     $('.sublist').removeClass('grid-view-filter').addClass('list-view-filter');
     $('.card-box').removeClass('col-lg-4 col-md-6')
   });
 
   $('.grid-view-button').click(function() {
      $(this).addClass('grid-active');
      $('.list-view-button').removeClass('list-active');
      $('.sublist').removeClass('list-view-filter').addClass('grid-view-filter');
      $('.card-box').addClass('col-lg-4 col-md-6');
   });
});
/**********************Gallery*********************/

$( ".grid-insight-gallery" ).each(function( index ) {
   $(".grid-insight-gallery").lightGallery({
      selector: '.g-item',
      thumbnail: true,    
      fullScreen: false,  
      download: false,     
      pager: false,
      share: false,
      zoom: false,
      play: false
   });
 });


 /****************Rating Hover**************************/
$(document).ready(function() {
   $('.star-input span').on('mouseover', function(){
      var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
      // Now highlight all the stars that's not after the current hovered star
      $(this).parent().children('span').each(function(e){
      if (e < onStar) {
         $(this).addClass('hover');
      }
      else {
         $(this).removeClass('hover');
      }
      });
      
   }).on('mouseout', function(){
      $(this).parent().children('span').each(function(e){
      $(this).removeClass('hover');
      });
   });
});
$(document).ready(function(){
   // Attach click event to the button
   $(".review-tophead .btn-thm").click(function(){
     // Toggle the visibility of the content div
     $(".review-form").slideToggle(700);
   });
 });