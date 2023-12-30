// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
const start = document.getElementById("play-button");
start.onclick = () => {
  location.href = "game.html";
};