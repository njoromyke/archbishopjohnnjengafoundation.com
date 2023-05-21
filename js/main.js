$(document).ready(function () {
  $(window).scroll(function () {
    var top = $(window).scrollTop();
    if (top >= 60) {
      $("nav").addClass("shadow bg-color");
    } else if ($("nav").hasClass("bg-color")) {
      $("nav").removeClass("bg-color shadow")
    }
  });
  $(".gallery-item").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 5);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
