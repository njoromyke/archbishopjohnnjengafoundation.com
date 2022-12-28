$(document).ready(function () {
  $(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top >= 60) {
      $("nav").addClass("shadow bg-color").fadeIn("slow");
    } else if ($("nav").hasClass("bg-color")) {
      $("nav").removeClass("bg-color");
    }
  });
  $(".gallery-item").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  new WOW().init();
});

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 5);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
