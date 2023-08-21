$('.loadingbar').delay(1500).animate({left: '0'}, 3000);
$('.loadingBox').delay(500).animate({opacity: '1'}, 1000);
$('.splashScreen').delay(4500).animate({top: '-100%'}, 1500);
$('.loadingCircle').delay(4500).animate({opacity: '0'}, 500);
$('body').delay(5000).queue(function(){
	$('body').addClass("visibleSplash");
});