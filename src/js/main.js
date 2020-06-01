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
			1280:{
				slidesPerView: 4,
			},
			575: {
				slidesPerView: 3,
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
function ajaxForm() {
	$('form button card__body').on('click', function(e) {
		e.preventDefault();
		const url = $(this).attr('data-url');
		const name = $('#name').val();
		const phone = $('#phone').val();
		const email = $('#email').val();
		const content = $('#content').val();
		$.ajax({
			type: "POST",
			url: url,
			data: {
				url: url,
				name: name,
				phone: phone,
				email: email,
				content: content
			},
			success: function(res) {
				if (res.Code === 200) {
					alert('Thành công');
				} else {
					alert('Thất bại');
				}
			}
		});
	});
}
document.addEventListener('DOMContentLoaded', () => {
	Loading();
	bannerHomeSile();
	collectionSlide();
	productHomeSlide();
	hightlightSlide();
	ajaxForm();
});