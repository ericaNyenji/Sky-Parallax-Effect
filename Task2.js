$(window).on('scroll', function () {
    parallaxScroll();
});

function parallaxScroll() {
    var scrolled = $(window).scrollTop();

   
    $('.layer-1').css('top', (scrolled * 0.1) + 'px');  
    $('.layer-2').css('bottom', (scrolled * 0.2) + 'px');   
    $('.layer-3').css('top', (scrolled * 0.4) + 'px');   
    $('.layer-4').css('top', (scrolled * 0.6) + 'px');    
}
