var scream = new Audio("scream.mp3");

$(".start-button").on("click", () =>{
  $(".start-wrapper").css("display", "none");
  $(".quiz-wrapper").css("display", "block");
});

$(".trigger").on("click", () =>{
  $(".quiz-wrapper").css("display", "none");
  $(".jumpscare").css("display", "block");
  scream.play();
});
