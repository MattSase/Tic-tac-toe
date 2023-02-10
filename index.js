
const squares = document.querySelectorAll('.square');
const restartBtn = document.getElementById('restart-btn');

let currentPlayer = 'X';

for (const square of squares) {
  square.addEventListener('click', handleClick);
}

restartBtn.addEventListener('click', restartGame);

function handleClick(e) {
  const square = e.target;
  square.textContent = currentPlayer;
  square.removeEventListener('click', handleClick);
  checkForWinner();
  switchPlayer();
}

function switchPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkForWinner() {
  const winningCombinations = [    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      squares[a].textContent === currentPlayer &&
      squares[b].textContent === currentPlayer &&
      squares[c].textContent === currentPlayer
    ) {
      displayWinner();
      return;
    }
  }

  if (Array.from(squares).every(square => square.textContent)) {
    displayDraw();
  }
}

function displayWinner() {
  alert(`Player ${currentPlayer} wins!`);
  restartGame();
}

function displayDraw() {
  alert('Draw!');
  restartGame();
}

function restartGame() {
  for (const square of squares) {
    square.textContent = '';
    square.addEventListener('click', handleClick);
  }
  currentPlayer = 'X';
}
