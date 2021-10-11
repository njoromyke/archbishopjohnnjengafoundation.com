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
      
});

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 10);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

