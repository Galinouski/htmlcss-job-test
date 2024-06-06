$(function() {
   
    $('.mobile-menu-button').click(function(e){
        $('.mobile-menu').stop().slideToggle(200);
        e.preventDefault();
    
    });

});
    