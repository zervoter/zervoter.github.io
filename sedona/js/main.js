$(function(){
	$(document).ready(function() {

		setTimeout(function() {
			$("body").toggleClass("loaded");
			$("#loader").fadeOut();
			$('#preloader').delay(300).fadeOut('slow');
		}, 1500);
	});
});