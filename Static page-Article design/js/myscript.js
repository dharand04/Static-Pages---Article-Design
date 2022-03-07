$(window).resize(function () {
	if ($(window).width() < 769) {
		$("#js-toggle").addClass("hide");
	} else {
		$("#js-toggle").removeClass("hide");
	}
});

$(document).ready(function () {
	$(".icon").on("click", function () {
		$("#js-toggle").toggleClass(" hide");
	});
});

