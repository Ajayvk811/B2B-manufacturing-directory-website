var smallScreen = $(window).width()<1100?true:false;
// var wHeight = $(window).height();
var isTouch = $('html').hasClass('touch');
$(document).ready(function() {
		picturefill();
	// $(function () { objectFitImages() });

	// 	isTouch = true;
	// isSmScreen = true;
	// $('html').addClass('touch');

	if(isTouch) {
		$('.gallery-item,.row .image').hover(function(){
			$(this).find('.social-links').show();
		},function(){
			$(this).find('.social-links').hide();
		});
	}
	tuckNav();
	// anchorScroll();
	socialButton();
	// initScrollmagic();
	if($('#intro-img').length>0) resizeIntroImg();

	$('#menu-button').click(function(){
		$('nav .mobile-nav>div').slideToggle();
		$('.mobile-nav').toggleClass('active');
	});

	$('.before--btn').on('click',function() {
		$(this).toggleClass('clicked').text('Click to view after');
		var galleryItem = $(this).closest('.gallery-item');
// console.log(galleryItem.data('before'));
		if ($(this).hasClass('clicked')) {
			$(this).text('view after');
			galleryItem.css('background-image','url('+galleryItem.data('before')+')');
			// galleryItem.find("[data-hook*='after']").hide();
		} else {
			$(this).text('view before');
			galleryItem.css('background-image','url('+galleryItem.data('after')+')');

			// galleryItem.find("[data-hook*='after']").show();
			// galleryItem.find("[data-hook*='before']").hide();
		}
	});
	initImgLoading();
	if($('#return-to-top').length>0) initScrollToTop();

	if($('#read-more').length>0){
		$('#read-more').click(function(e){
			e.preventDefault();
			$('#collasped-content').slideDown();
			$("html,body").animate({ scrollTop: $('#collasped-content').offset().top-140}, 1000);
			$(this).fadeOut();
		});

	}
});
$(window).resize(function(){
	smallScreen = $(window).width()<1100?true:false;
	// wHeight = $(window).height();

	if($('#intro-img').length>0) resizeIntroImg();

	positionSocialIcons();
});
$(window).load(function() {
	initHistory();

	if ($('body').is('.home')) initFreewall();
		$.waypoints('refresh');
	picturefill();
});

function resizeIntroImg(){
	// console.log('he');
	var offset = $('main').is('.contact')?20:0;
	if(smallScreen) offset = 0;
	var newHeight = $(window).height()-$('.navigation-container').height()-offset;
	$('#intro-img').height(newHeight);

}

function positionSocialIcons(){
	// $('#social-icons').css('left',$('li#menu-item-619 a').position().left+(smallScreen?-17:5));
	// $('#social-icons').css('top',$('li#menu-item-619 a').position().top-(smallScreen?5:7));
}
function tuckNav() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height()*.15) $('body').addClass('tuckedNav');
		else $('body').removeClass('tuckedNav');
		positionSocialIcons();
	});
}
function socialButton() {
	positionSocialIcons();
	$('li#menu-item-619').hover(function(){
		$(this).addClass('visuallyhidden').closest('.nav-side').find('#social-icons').css('display','block');
	});
	$('.nav-side').hover(function(){},
		function(){
		$('li#menu-item-619').removeClass('visuallyhidden').closest('.nav-side').find('#social-icons').css('display','none');
	});
	if(smallScreen) { 
		$('.mobile-nav li.menu-item-619').addClass('visuallyhidden'); 
		$('#social-icons').fadeIn();	
	}
}

function initScrollToTop(){
	var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){
	       // downscroll code
	       // console.log('down');
	       // $("#return-to-top").delay(100).fadeOut();
	   } 
	   else {
	      // upscroll code
	      // console.log('up');
	      $("#return-to-top").css('opacity',1);

	   }
	   // console.log(st);
	   if(st <10) {$("#return-to-top").css('opacity',0); }
	   lastScrollTop = st;
	});
}


// function anchorScroll() {
// 	var offset;
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top-129
//         }, 1000);
//         return false;
//       }
//     }
//   });
// }
function initFreewall() {
	var wall = new freewall("main.grid");
	wall.reset({
		selector: '.grid-block',
		cellW: 0.25,
		cellH: 0.25,
		gutterX: 2,
		gutterY: 2,
		cache: 0,
		delay:250,
		sizeCache: true,
		onResize: function() {
			var wWidth = $(window).width();
			//takes over Freewall's default resizing, controlling only 3 views now
			if(wWidth<767){
				wall.fixSize({
				  block: $('.grid-block'),
				  width: wWidth,
				  height: wWidth
				});
			}
			else{
				wall.fixSize({
				  block: $('.grid-block.col-1-4'),
				  width: wWidth<960?wWidth*.5:wWidth*.25,
				  height: wWidth<960?wWidth*.5:wWidth*.25
				});
				wall.fixSize({
				  block: $('.grid-block.col-1-2'),
				  width: wWidth<960?wWidth:wWidth*.5,
				  height: wWidth<960?wWidth:wWidth*.5
				});
			}
			wall.refresh();
		}
	});
	wall.fitWidth();
	$(window).trigger("resize");
}



function initHistory(){
			if($('body').is('.page-template-page_wilderworks' )) return;

	var newUrlTitle = window.location.href.substring(siteURL.length);
	// console.log(newUrlTitle.substring(newUrlTitle.lastIndexOf('/')+1));

	newUrlTitle = newUrlTitle.substring(newUrlTitle.lastIndexOf('/')+1).replace(/\//g,'');
	if(newUrlTitle == "careers") newUrlTitle = "";
	if(newUrlTitle.indexOf('?')>0) return;
	var jumpTo = $('#'+newUrlTitle);
	if(jumpTo.length){
		offset = smallScreen?50:0;
		var jumpToY = jumpTo.offset().top+offset;
// console.log(jumpToY);
		$("html,body").scrollTop(jumpToY-85);
		//currentSlide = jumpTo.index();
		setTimeout("initWaypoints();",1000)

	} 
	else {	initWaypoints(); }

	History.Adapter.bind(window,'statechange',function(e){
		var state = History.getState();
		var newUrlTitle = window.location.href.substring(siteURL.length);
		newUrlTitle = newUrlTitle.substring(newUrlTitle.lastIndexOf('/')+1);

		var jumpTo = $('#'+newUrlTitle);

		if(jumpTo.length){
			var jumpToY = jumpTo.offset().top;
		} 
	});
}
function initWaypoints(){
	$('section:not(.widget)').waypoint(function(direction) {
		
		if(direction=="down"){ onSectionChange($(this));}
	}, {
		offset: '50%'
	}); 
	$('section:not(.widget)').waypoint(function(direction) {
		if(direction=="up") { onSectionChange($(this)); }
	}, {
	  offset: function() {
	    return -$(this).height() + $(window).height()*.55;
	  }
	});
}

var originalTitleTag = document.title;
var mainSection = $('main').attr('rel')+'/';

function onSectionChange(newSection,newSubsection){
	var newString;
	if(newSection.is('#contact')) return;
	if(newSection.is('#contact-form-2')) return;
	// console.log(newSection,newSubsection);
	if(newSubsection) newString = newSection.attr('id')+"/"+newSubsection.attr('id');
	else newString = newSection.attr('id')+"/";
	if (newString.indexOf(mainSection)==-1) newString = mainSection+newString;
	newString = siteURL+"/"+newString;

	History.pushState({snappedTo:newSection.attr('id')}, originalTitleTag+" | ", newString);
	// setCurNavLink(newSection.data('panel')); 
	
}


function initImgLoading(){
	$('#intro-img img.loaderimg').imagesLoaded()
		.always( function( instance ) {
		})
		.done( function( instance ) {
		})
		.fail( function() {
		})
		.progress( function( instance, image ) {
			$(image.img).closest('#intro-img').addClass('loaded');
	});

	// $('#grid .item img.loader-img, #images .banner .item img.loader-img').imagesLoaded()
	// 	.progress( function( instance, image ) {
	// 		$(image.img).closest('.item').addClass('loaded');
	// });

	$('.image img.loaderimg').imagesLoaded()
		.progress( function( instance, image ) {
			$(image.img).closest('.image').addClass('loaded');
	});


	$('.gallery-item img.loaderimg').imagesLoaded()
		  .always( function( instance ) {
		    // console.log('all images loaded');
		  })
		  .done( function( instance ) {
		    // console.log('all images successfully loaded');
		  })
		  .fail( function() {
		    // console.log('all images loaded, at least one is broken');
		  })
		  .progress( function( instance, image ) {
		    var result = image.isLoaded ? 'loaded' : 'broken';
		    // console.log( 'image is ' + result + ' for ' + image.img.src );
		    $(image.img).closest('.gallery-item').addClass('loaded');
		    // console.log(result);

	});

	// $('.inline-slideshow img').imagesLoaded()
	// 	.progress( function( instance, image ) {
	// 		$(image.img).addClass('loaded');
	// });
}

// function initScrollmagic() {
// 	controller = new ScrollMagic();

//   $('#parallax').each(function() {
//   	var timeline, scene, tweens;
// 		timeline = new TimelineMax();
// 	  tweens = [];

// 	  tweens.push(TweenMax.fromTo($('#parallax').find('blockquote'), 5, {y: -$(window).height()*0.1},  { y: $(window).height()*0.3, force3D:true, ease: Linear.easeNone}));
//   })
	
// 	timeline.add(tweens);
// 	scene = new ScrollScene({
// 		triggerElement: $('#thing'),
//     triggerHook: 'onLeave',
// 		reverse:true,
// 		duration: $(window).height()*.5
// 	});
// 	scene.setTween(timeline).addTo(controller);
// }

MicroModal.init({
	disableScroll: true,
});

const gallerySlider = document.querySelector('.aw-gallery-slider');
if(gallerySlider) {
	const swiper = new Swiper('.swiper', {
		slidesPerView: 1,
		spaceBetween: 0,
		centeredSlides: true,
		initialSlide: 1,
		allowTouchMove: false,
		navigation: {
			nextEl: '.aw-gallery-slider-button-next',
			prevEl: '.aw-gallery-slider-button-prev',
		},

		breakpoints: {
			600: {
				slidesPerView: 'auto',
				spaceBetween: 60,
			},

			960: {
				slidesPerView: 'auto',
				spaceBetween: 100,
			},
		},
	});
}