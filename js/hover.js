$(function() {
   
    $('.js-hover-fade').each(function() {
     var off_img = $(this).find('img').attr('src').replace('_off', '_on');
     var on_img = $('<img src="'+ off_img +'" alt="" style="position:absolute; opacity:0;" />');
      
 
     $(this).find('img').before(on_img);
 
     $(this).find('img').hover(function() {
         $(this).stop().animate({'opacity': '1'}, 400);
       },　function(){
         $(this).stop().animate({'opacity': '0'}, 300);
       }
     )
   });
 
  });
 
 