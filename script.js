$(document).ready(function () {
    $(".cover-btn").hover(
      function () {
        $(this).css("background-color", "rgba(66, 240, 182, 0.8)");
        $(this).css("transform", "scale(1.05)");
      },
      function () {
        $(this).css("background-color", "");
        $(this).css("transform", "");
      }
    );
  
    $(".card-btn").hover(
      function () {
        $(this).css("background-color", "rgb(231, 246, 242)");
        $(this).css("color", "rgb(48, 58, 82)");
      },
      function () {
        $(this).css("background-color", "rgb(48, 58, 82)");
        $(this).css("color", "rgb(231, 246, 242)");
      }
    );
  
    $(".js-btn").on("click", function () {
      $(".menu , .btn-line").toggleClass("open");
    });
  
    $(".menu-list").on("click", function () {
      $(".menu, .btn-line").removeClass("open");
    });
  });
  