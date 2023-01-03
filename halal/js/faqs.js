$(document).ready(function(){
   
/*start slider*/
$(".slider .info button").click(function(){
    $("html,body").animate({scrollTop: $(".faqs").offset().top} ,1300)
})
/*end slider*/    
    
/*start faqs*/
$(".faqs .faqs-list .item h3 ").click(function(){   /*toggle icon on click*/
  $(this) .find("i").toggleClass("fa-arrow-right fa-arrow-down") 
}) 
    
$(".faqs .faqs-list .item h3 ").click(function(){   /* show - hide hidden paragraph*/
  $(this).parent().find("p").slideToggle(400)
}) 
    
/*end faqs*/  
    
   
}) /*end main fuction dpn not touch */
