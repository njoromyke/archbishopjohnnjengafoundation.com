$(document).ready(function(){
  

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:0,
                nav:false,
                loop:false
            },
            600:{
                items:1,
                nav:false,
                loop:true
            },
            1000:{
                items:1,
                nav:false,
                loop:true,
                autoHeight:false,
            }
        },
        autoplay:true,
        autoplayHoverPause:true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        autoHeight:true,
        



    });

 
        $(window).scroll(function(){
            var top = $(window).scrollTop();
            if(top>=60){
                $('nav').addClass('bg-color');
            }else{
                if($('nav').hasClass('bg-color')){
                    $('nav').removeClass('bg-color');
    
                }
    
            }
          });
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery:{
          enabled:true
        },
        
      });

      new WOW().init();
      jump('#myBtn', {
        duration: 1000,
        offset: 0,
        callback: undefined,
        easing: easeInOutQuad,
        a11y: false
      });
      $(function () {

        $('#myBtn').goTop({
      
          // top offset
          scrollTop: 100,
      
          // scroll speed in milliseconds
          scrollSpeed: 1000,
      
          // fade in/out speed in milliseconds
          fadeInSpeed: 1000,
          fadeOutSpeed: 500
          
        })
      
      })
});

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 10);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

