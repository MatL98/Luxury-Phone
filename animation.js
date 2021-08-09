$(document).ready(function () {
  /* Animacion botones navbar */
	const btnNav = document.querySelector("#nav-home");
	const btnNav1 = document.querySelector("#nav-cel");
	const btnNav2 = document.querySelector("#nav-cart");
	const btnNav3 = document.querySelector("#nav-form");

	btnNav.onmousemove = function (e) {
		const x = e.pageX - btnNav.offsetLeft;
		const y = e.pageY - btnNav.offsetTop;

		btnNav.style.setProperty("--x", x + "px");
		btnNav.style.setProperty("--y", y + "px");
	};
	btnNav1.onmousemove = function (e) {
		const x = e.pageX - btnNav1.offsetLeft;
		const y = e.pageY - btnNav1.offsetTop;

		btnNav1.style.setProperty("--x", x + "px");
		btnNav1.style.setProperty("--y", y + "px");
	};
	btnNav2.onmousemove = function (e) {
		const x = e.pageX - btnNav2.offsetLeft;
		const y = e.pageY - btnNav2.offsetTop;

		btnNav2.style.setProperty("--x", x + "px");
		btnNav2.style.setProperty("--y", y + "px");
	};
	btnNav3.onmousemove = function (e) {
		const x = e.pageX - btnNav3.offsetLeft;
		const y = e.pageY - btnNav3.offsetTop;

		btnNav3.style.setProperty("--x", x + "px");
		btnNav3.style.setProperty("--y", y + "px");
	};
	/* Animacion navbar cambia de color*/
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > $("#section__cels").offset().top - 150) {
		$("#nav").addClass("navbar__nav-color");
		$(".nav-link").addClass("nav-link-color");
		} else {
		$("#nav").removeClass("navbar__nav-color");
		$(".nav-link").removeClass("nav-link-color");
		}
	});
	/* Animacion Titulos */
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > $("#section__cels").offset().top - 300) {
		let animation1 = $("#animado-1");
		animation1.css("opacity", "1").addClass("moveLeft");
		}
		if ($(window).scrollTop() > $("#section__cart").offset().top - 300) {
		let animation2 = $("#animado-2");
		animation2.css("opacity", "1").addClass("moveLeft");
		}
		if ($(window).scrollTop() > $("#section__form").offset().top - 480) {
		let animation3 = $("#animado-3");
		animation3.css("opacity", "1").addClass("moveLeft");
		}
	});
	/* Modal */

	$("#modal-cel").append(`<h5> Se agregó al carrito </h5>`);
	$("h5").addClass("alert-buy");
	$("button#btn-carrito").click(function () {
		$(".modal-overlay").css("opacity", "1");
		let divModal = $("div#modal");
		divModal.slideDown("slow").fadeOut("slow");
	});
});