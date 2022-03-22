$(document).ready(function() {
  $(".javascript").click(function() {
    $(".javascript-hidden").toggle();
    $(".javascript-showing").toggle();
  });

  $(".functions").click(function () {
    $(".functions-hidden").toggle();
    $(".functions-showing").toggle();
  });
  
  $(".bool").click(function () {
    $(".bool-hidden").toggle();
    $(".bool-showing").toggle();
  });

  $(".query").click(function () {
    $(".query-hidden").toggle();
    $(".query-showing").toggle();
  });
});