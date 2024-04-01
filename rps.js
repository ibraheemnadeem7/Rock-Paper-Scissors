const buttons = document.querySelectorAll('.choices button');
const result = document.getElementById('result');

buttons.forEach(button => {
  button.addEventListener('click', playGame);
});

function playGame(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();
  const winner = determineWinner(playerSelection, computerSelection);
  displayResult(winner, computerSelection);
}

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer) {
  if (player === computer) {
    return 'It\'s a tie!';
  } else if ((player === 'rock' && computer === 'scissors') ||
             (player === 'paper' && computer === 'rock') ||
             (player === 'scissors' && computer === 'paper')) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

function displayResult(winner, computerChoice) {
  result.textContent = `${winner} Computer chose ${computerChoice}.`;
}
