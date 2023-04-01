// Constants for the game
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const SQUARE_SIZE = 28;
const COLORS = [
    '#ffffff', // Empty square
    '#ff0000', // Red square
    '#00ff00', // Green square
    '#0000ff', // Blue square
    '#ffff00', // Yellow square
    '#ff00ff', // Purple square
    '#00ffff', // Cyan square
    '#888888', // Gray square
];

// Variables for the game
let board = [];

// Initialize the game board
function initBoard() {
    for (let i = 0; i < BOARD_HEIGHT; i++) {
        let row = [];
        for (let j = 0; j < BOARD_WIDTH; j++) {
            row.push(0);
        }
        board.push(row);
    }
}

// Draw the game board
function drawBoard() {
    let gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    for (let i = 0; i < BOARD_HEIGHT; i++) {
        for (let j = 0; j < BOARD_WIDTH; j++) {
            let square = document.createElement('div');
            square.className = 'square';
            square.style.backgroundColor = COLORS[board[i][j]];
            gameBoard.appendChild(square);
        }
    }
}

// Initialize the game
function initGame() {
    initBoard();
    drawBoard();
}

// Call the initGame function when the page loads
window.onload = initGame;