/*Jquery to Show and Hide the menu with a click */

jQuery(document).ready(function () {

	$("table").hide();


	$("h2").click(function () {
		$("table").hide(1000);
		$(this).next("table").slideToggle(1000);
	});

});