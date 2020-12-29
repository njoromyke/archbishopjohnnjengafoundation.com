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
});

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 10);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}