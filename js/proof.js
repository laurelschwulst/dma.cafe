$(function () {
  var camera = document.getElementById("camera");

  function togglePopup() {
    $(".process-popup").fadeToggle("fast");
    $(".process-popup-container").toggleClass("active");
  }

  $(".sun").click(function () {
    togglePopup();
    camera.play();
  });

  $(".version").click(function () {
    togglePopup();
    camera.play();
  });

  $(".process-popup #close").click(function () {
    togglePopup();
  });
});
