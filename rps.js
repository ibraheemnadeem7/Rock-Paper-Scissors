// Selecting buttons individually instead of through .choices class
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const result = document.getElementById('result');
const playAgainButton = document.getElementById('play-again');

// Adding event listeners to each button
rockButton.addEventListener('click', () => playGame('rock'));
paperButton.addEventListener('click', () => playGame('paper'));
scissorsButton.addEventListener('click', () => playGame('scissors'));
playAgainButton.addEventListener('click', resetGame);

function playGame(playerSelection) {
  const computerSelection = computerPlay();
  const winner = determineWinner(playerSelection, computerSelection);
  displayResult(winner, playerSelection, computerSelection);
  playAgainButton.style.display = 'inline-block';
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

function displayResult(winner, playerChoice, computerChoice) {
  if (winner === 'It\'s a tie!') {
    result.textContent = `It's a tie! You both chose ${playerChoice}.`;
  } else if (winner === 'You win!') {
    result.textContent = `You win! You chose ${playerChoice}, computer chose ${computerChoice}.`;
  } else {
    result.textContent = `Computer wins! You chose ${playerChoice}, computer chose ${computerChoice}.`;
  }
}

function resetGame() {
  result.textContent = '';
  playAgainButton.style.display = 'none';
}

