import "@babel/polyfill";
import Loading from "./lib/Loading";
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
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1438:{
				slidesPerView: 4,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
		},
	})
}
function productHomeSlide(){
	var swiper = new Swiper('.product__slide', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1440: {
				slidesPerView: 4,
			},
			768: {
				slidesPerView: 3,
			},
			575: {
				slidesPerView: 2,
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
document.addEventListener('DOMContentLoaded', () => {
	Loading();
	bannerHomeSile();
	collectionSlide();
	productHomeSlide();
	hightlightSlide();
});