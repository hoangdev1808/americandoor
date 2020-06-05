const Loading = require('./lib/Loading')
function bannerHomeSile(){
	var mySwiper = new Swiper('.slide-home', {
		spaceBetween: 30,
		effect: 'fade',
		speed: 1000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}
function collectionSlide(){
	var swiper = new Swiper('.collection-slide', {
		slidesPerView: 4,
		loop: true,
		speed: 1000,
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1438:{
				slidesPerView: 4,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
			},
			575:{
				slidesPerView: 3,
			},
			320:{
				slidesPerView: 2,
				spaceBetween: 0,
			}
		},
	})
}
function productHomeSlide(){
	var swiper = new Swiper('.product__slide', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		speed: 1000,
		// autoplay: {
		// 	delay: 3000,
		// 	disableOnInteraction: false,
		// },
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1440: {
				slidesPerView: 4,
			},
			1280:{
				slidesPerView: 4,
			},
			575:{
				slidesPerView: 3,
				spaceBetween: 20,
			},
			320:{
				slidesPerView: 1,
				spaceBetween: 0,
			}
		},
	})
}
function hightlightSlide(){
	var mySwiper = new Swiper('.hightlight', {
		spaceBetween: 30,
		effect: 'fade',
		speed: 1000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}
// CHECK LAYOUT CÓ BANNER
const checkLayoutBanner = () => {
	const mainSlider = $('.slide-home');
const heightHeader = $('header').outerHeight();
	if (mainSlider.length >= 1 && mainSlider.css('display') == 'block') {
		mainSlider.css('padding-top', heightHeader);
	} else {
		$('main').css('padding-top', heightHeader);
	}
}

// Search form
function searchForm(){
	$('header').find('.search').on('click', function(){
		$('.search__form').slideToggle(200);
	});
	$(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.search__form').slideUp();
        }
	});
}

document.addEventListener('DOMContentLoaded', () => {
	Loading();
	bannerHomeSile();
	collectionSlide();
	productHomeSlide();
	hightlightSlide();
	checkLayoutBanner();
	searchForm();
});