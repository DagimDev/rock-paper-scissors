// Computer move selection

const pickComputerMove = () => {
  const randomNumber = Math.random();
  return randomNumber < 0.33
    ? "rock"
    : randomNumber < 0.66
    ? "paper"
    : "scissors";
};
