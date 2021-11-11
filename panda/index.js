var scream = new Audio("scream2.mp3");
scream.volume = 1.0;

$(".start-button").on("click", () =>{
  $(".start-wrapper").css("display", "none");
  $(".quiz-wrapper").css("display", "block");
});

$(".trigger").on("click", () =>{
  scream.play();
  $(".quiz-wrapper").css("display", "none");
  $(".jumpscare").css("display", "block");
});
