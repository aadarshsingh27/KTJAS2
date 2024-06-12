document.addEventListener('DOMContentLoaded', () => {
    const boardElement = document.getElementById('game-board');
    const currentTurnElement = document.getElementById('current-turn');
    const playerXScoreElement = document.getElementById('player-x-score');
    const playerOScoreElement = document.getElementById('player-o-score');
    const resetScoresButton = document.getElementById('reset-scores');
    const resetGameButton = document.getElementById('reset-game');
    const boardSizeSelector = document.getElementById('board-size');
    const resetModal = document.getElementById('reset-modal');
    const confirmResetButton = document.getElementById('confirm-reset');
    const cancelResetButton = document.getElementById('cancel-reset');
    const playerXNameInput = document.getElementById('player-x-name');
    const playerONameInput = document.getElementById('player-o-name');
    const playerXDisplay = document.getElementById('player-x-display');
    const playerODisplay = document.getElementById('player-o-display');

    let currentPlayer = 'X';
    let gameBoard = [];
    let boardSize = 3;
    let scores = {
        X: 0,
        O: 0,
    };
    let playerNames = {
        X: 'Player X',
        O: 'Player O',
    };

    // Load scores and names from localStorage
    if (localStorage.getItem('scores')) {
        scores = JSON.parse(localStorage.getItem('scores'));
        updateScores();
    }
    if (localStorage.getItem('playerNames')) {
        playerNames = JSON.parse(localStorage.getItem('playerNames'));
        updatePlayerNames();
    }

    function createBoard(size) {
        gameBoard = Array(size).fill(null).map(() => Array(size).fill(null));
        boardElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        boardElement.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        boardElement.innerHTML = '';

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const cell = document.createElement('div');
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.addEventListener('click', handleCellClick);
                boardElement.appendChild(cell);
            }
        }
    }

    function handleCellClick(event) {
        const row = event.target.dataset.row;
        const col = event.target.dataset.col;

        if (gameBoard[row][col] === null) {
            gameBoard[row][col] = currentPlayer;
            event.target.textContent = currentPlayer;

            if (checkWin(currentPlayer)) {
                alert(`${playerNames[currentPlayer]} wins!`);
                scores[currentPlayer]++;
                updateScores();
                saveScores();
                setTimeout(resetBoard, 5000);
            } else if (checkTie()) {
                alert("It's a tie!");
                setTimeout(resetBoard, 5000);
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                currentTurnElement.textContent = currentPlayer;
            }
        }
    }

    function checkWin(player) {
        // Check rows, columns, and diagonals
        for (let i = 0; i < boardSize; i++) {
            if (gameBoard[i].every(cell => cell === player) || gameBoard.map(row => row[i]).every(cell => cell === player)) {
                return true;
            }
        }
        if (gameBoard.map((row, index) => row[index]).every(cell => cell === player) ||
            gameBoard.map((row, index) => row[boardSize - index - 1]).every(cell => cell === player)) {
            return true;
        }
        return false;
    }

    function checkTie() {
        return gameBoard.flat().every(cell => cell !== null);
    }

    function resetBoard() {
        createBoard(boardSize);
        currentPlayer = 'X';
        currentTurnElement.textContent = currentPlayer;
    }

    function updateScores() {
        playerXScoreElement.textContent = scores.X;
        playerOScoreElement.textContent = scores.O;
    }

    function saveScores() {
        localStorage.setItem('scores', JSON.stringify(scores));
    }

    function updatePlayerNames() {
        playerXDisplay.textContent = playerNames.X;
        playerODisplay.textContent = playerNames.O;
    }

    function savePlayerNames() {
        localStorage.setItem('playerNames', JSON.stringify(playerNames));
    }

    playerXNameInput.addEventListener('input', (event) => {
        playerNames.X = event.target.value || 'Player X';
        updatePlayerNames();
        savePlayerNames();
    });

    playerONameInput.addEventListener('input', (event) => {
        playerNames.O = event.target.value || 'Player O';
        updatePlayerNames();
        savePlayerNames();
    });

    resetScoresButton.addEventListener('click', () => {
        scores = { X: 0, O: 0 };
        updateScores();
        saveScores();
    });

    resetGameButton.addEventListener('click', () => {
        resetModal.style.display = 'flex';
    });

    confirmResetButton.addEventListener('click', () => {
        resetModal.style.display = 'none';
        resetBoard();
    });

    cancelResetButton.addEventListener('click', () => {
        resetModal.style.display = 'none';
    });

    boardSizeSelector.addEventListener('change', (event) => {
        boardSize = parseInt(event.target.value);
        resetBoard();
    });

    // Initial board setup
    createBoard(boardSize);
});
