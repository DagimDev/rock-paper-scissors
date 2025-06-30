const resultElement = document.querySelector(".result");
const movesElement = document.querySelector(".moves");
const scoreElement = document.querySelector(".score");

// Computer move selection

const pickComputerMove = () => {
  const randomNumber = Math.random();
  return randomNumber < 0.33
    ? "rock"
    : randomNumber < 0.66
    ? "paper"
    : "scissors";
};

// Add score
// Update and Add localStorage persistence
let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  ties: 0,
  losses: 0,
};

// basic game outcome logic

const playGame = (playerMove) => {
  let result = "";
  const computerMove = pickComputerMove();

  if (playerMove === "rock") {
    if (computerMove === "rock") result = "Tie.";
    else if (computerMove === "paper") result = "You lose.";
    else if (computerMove === "scissors") result = "You win.";
  } else if (playerMove === "paper") {
    if (computerMove === "rock") result = "You win.";
    else if (computerMove === "paper") result = "Tie.";
    else if (computerMove === "scissors") result = "You lose.";
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") result = "You lose.";
    else if (computerMove === "paper") result = "You win.";
    else if (computerMove === "scissors") result = "Tie.";
  }

  if (result === "You win.") score.wins++;
  else if (result === "Tie.") score.ties++;
  else if (result === "You lose.") score.losses++;

  //   result
  resultElement.innerHTML = result;

  //   moves
  movesElement.innerHTML = `You <img class="move-icons" src="../images/${playerMove}-emoji.png"> <img  class="move-icons" src="../images/${computerMove}-emoji.png"> Computer`;

  // score
  updateScoreElement();

  //   Add localStorage persistence
  localStorage.setItem("score", JSON.stringify(score));

  return result;
};

const updateScoreElement = () => {
  scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};
updateScoreElement();
// Reset score
const resetScore = () => {
  score = {
    wins: 0,
    ties: 0,
    losses: 0,
  };
  localStorage.removeItem("score");
  updateScoreElement();
};
