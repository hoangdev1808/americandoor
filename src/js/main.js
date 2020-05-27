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


document.addEventListener('DOMContentLoaded', () => {
	Loading();
	bannerHomeSile();
});