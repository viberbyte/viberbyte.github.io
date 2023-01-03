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

/*start navbar add active class*/
$(".navbar-light .navbar-nav .nav-link").click(function(){
    $(this).parent().addClass("active").siblings().removeClass("active");
})
/*end navbar add active class*/

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
    $("html,body").animate({scrollTop: $(".about").offset().top} ,1300)
})
/*end slider*/

/*start about*/
$(".about .info button").click(function(){
    $("html,body").animate({scrollTop: $(".reservation").offset().top+1 },1300)
})
/*end about*/

/*start discount*/
$(".discount .info button").click(function(){
    $("html,body").animate({scrollTop: $(".special-offers").offset().top+1 },1300)
})
/*end discount*/

/*start menue*/
$(".menue .navigation p").click(function(){
    $(this).addClass("active").siblings().removeClass("active") //add active class
    var myele = $(this).data("show");
    console.log(myele);
    
    $("."+myele).addClass("item-active").siblings().removeClass("item-active")
})
/*start menue*/

/*start reservation*/
$("form input").focus(function(){
    // test only ::  console.log( $(this).attr("placeholder") )
    var oldvalue = $(this).attr("placeholder");  //store old value  
    $(this).attr("placeholder","") // empty placeholder
    
 $("form input").blur(function(){
    $(this).attr("placeholder",oldvalue) // restore old value  
 })   
})    
/*end reservation*/

/*start blogs*/
$(".blogs .item .image img").mouseenter(function(){
    $(this).css({transform:"scale(1.1,1.1)"})
})  
$(".blogs .item .image img").mouseleave(function(){
    $(this).css({transform:"scale(1,1)"})
})      
/*start blogs*/
    
/*start our-team*/
$(".our-team .item").mouseenter(function(){  // show it
    $(this).find(".links").animate({width:"15%"},400)
})  
    
$(".our-team .item").mouseleave(function(){ // hide it 
    $(this).find(".links").animate({width:"0%"},400)
})        
/*end our-team*/ 
    $('.carousel').carousel({
  interval: 442000
})

    
})/*main function do not touch*/

