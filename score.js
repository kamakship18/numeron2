// Iteration 8: Making scoreboard functional
var finalScore = document.getElementById("score-board");
const playAgain = document.getElementById("play-again-button");

var urlThing = new URLSearchParams(window.location.search);
var score = urlThing.get("score");

finalScore.innerHTML = score;

playAgain.addEventListener ("click", () => {
    window.location.href = "./game.html"
}) 