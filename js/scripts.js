// $(document).ready(function() {
//   $(".clickable").click(function() {
//     $("#walrus-showing").fadeToggle();
//     $("#walrus-hidden").fadeToggle();
//   });
// });

$(document).ready(function() {
  $(".clickable").click(function() {
    $(".show-images").toggle();
    $(".hide-images").toggle();
  });
});

$(document).ready(function() {
  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
  });

  $("button#purple").click(function() {
    $("body").removeClass();
    $("body").addClass("purple-background");
  });

  $("button#pink").click(function() {
    $("body").removeClass();
    $("body").addClass("pink-background");
  });
});
