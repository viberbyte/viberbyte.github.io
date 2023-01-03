$(document).ready(function(){
/* start top-nav*/
$(".top-nav .lang-selection span.active").click(function(){ // show -hide language-list
    $(this).toggleClass("show-now") ;
    if( $(this).hasClass("show-now")) {
          $(".top-nav .lang-selection .lang-hidden-list").show() // show it
    }
    else{
        $(".top-nav .lang-selection .lang-hidden-list").hide() // hide it again
    }
})
/* start top-nav*/
    
/*start navbar*/
$(".navbar-light .search-item").click(function(){
    $(this).toggleClass("is-hidden")
    
    if( $(this).hasClass("is-hidden"))  { /*show search box*/
        $(".navbar-light .search-box").show()
    }
    else{
         $(".navbar-light .search-box").hide() /*hide  search box*/
    }
})

/*end navbar*/
    
/*start go-up button*/
$(window).scroll(function(){ // show -hide button
    if( $(window).scrollTop()>200){
        $(".go-up").fadeIn(300)
    }
    else{
        $(".go-up").fadeOut(300)
    }
})    

$(".go-up").click(function(){  // go to up on click 
    $("html,body").animate({scrollTop:0},1300)
})    
/*end go-up button*/
    
/*start slider*/
$(".slider .info button").click(function(){
    $("html,body").animate({scrollTop: $(".reservation").offset().top+1 },1300)
})
/*end slider*/

/*start about*/
$(".about .info button").click(function(){
    $("html,body").animate({scrollTop: $(".news-letter").offset().top+1 },1300)
})
/*end about*/

 })/*main function do not touch*/