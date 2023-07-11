$(document).ready(function () {
		Moving();
	});

	function Moving() {
		$(".scroll_img").animate({ marginTop: "10px" }, 500, "", function () {
		$(this).animate({ marginTop: "0px" }, 500, "", function () { 
		Moving(); });

		});
		
	}

$(document).ready(function() {
    $(".wbtn3").click(function() {
        window.open('about:blank', '_self').close();
    });

}); 




$(function(){

	$('.wbtn2').click(function(){
		
		var offset = $('.main_02').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});


	$('.up2').click(function(){
		
		var offset = $('.main_03').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});

	$('.up3').click(function(){
		
		var offset = $('.main_04').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});

	$('.up4').click(function(){
		
		var offset = $('.main_05').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});

	$('.down1').click(function(){
		
		var offset = $('.main_04').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});

	$('.down2').click(function(){
		
		var offset = $('.main_05').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});

	$('.down3').click(function(){
		
		var offset = $('.main_06').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});

	$('.li1').click(function(){
		
		var offset = $('.main_03').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});

	$('.li2').click(function(){
		
		var offset = $('.main_05').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});

	$('.li3').click(function(){
		
		var offset = $('.main_06').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});

	/*

	$('.main_01').on("mousewheel", function(){
		
		var offset = $('.main_02').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});

	$('.main_02').on("mousewheel", function(){
		
		var offset = $('.main_03').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});

	$('.main_03').on("mousewheel", function(){
		
		var offset = $('.main_04').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});

	$('.main_04').on("mousewheel", function(){
		
		var offset = $('.main_05').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});

	$('.main_05').on("mousewheel", function(){
		
		var offset = $('.main_06').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});

	$('.main_06').on("mousewheel", function(){
		
		var offset = $('.main_01').offset(); 
		$('html,body').stop().animate({scrollTop : offset.top}, 400);

	});

	*/




/*

	var mHtml = $("html");
	var page = 1;


	mHtml.animate({scrollTop : 0},10);

	$(window).on("mousewheel", function(e) {

		if(mHtml.is(":animated")) return;

		if(e.originalEvent.deltaY > 0) {

			if(page == 6) return;
			page++;

		} else if(e.originalEvent.deltaY < 0) {

			if(page == 1) return;
			page--;

		}

		var posTop =(page-1) * $(window).height();

		mHtml.stop().animate({scrollTop : posTop});

	});

	*/

});

