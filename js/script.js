// Computer move selection

const pickComputerMove = () => {
  const randomNumber = Math.random();
  return randomNumber < 0.33
    ? "rock"
    : randomNumber < 0.66
    ? "paper"
    : "scissors";
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
  return result;
};
