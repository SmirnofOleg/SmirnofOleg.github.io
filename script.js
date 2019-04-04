$(document).ready(function() {
	$("#burger").on("click", function(e){
		e.preventDefault();
		$(".menu-list").toggleClass("menu_active");
		$("#burger").toggleClass("content_active");
		$("#burger").toggleClass("burger_active");
		$(".top-slide").toggleClass("content_active");
		$(".middle-slide").toggleClass("content_active");
		$(".bottom-slide").toggleClass("content_active");

	})

});


	
