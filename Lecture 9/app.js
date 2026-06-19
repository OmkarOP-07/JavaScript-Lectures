// 1. Memory Card Matching Game ⭐ 

// Skills you'll learn:

// Array shuffling
// Click events
// Game state management
// Timers
// Move counters
// Win detection

// Features to add:

// Flip cards
// Match pairs
// Timer
// Best score using Local Storage

// Difficulty: Slightly above Tic-Tac-Toe

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;

const emojis = ["🍎", "🍎", "🍌", "🍌", "🍇", "🍇", "🍓", "🍓"];

let shuffledCards = emojis.sort(() => Math.random() - 0.5);
const board = document.getElementById("board");
const movesText = document.getElementById("moves");

function createBoard() {
    shuffledCards.forEach((emoji) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.value = emoji;
        card.textContent = "?";
        card.addEventListener("click", flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    if (this.classList.contains("matched")) return;
    this.textContent = this.dataset.value;
    if (!firstCard) {
        firstCard = this;
        return;
    }
    secondCard = this;
    moves++;
    movesText.textContent = moves;
    checkMatch();
}

function checkMatch() {
    if (firstCard.dataset.value === secondCard.dataset.value) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        matchedPairs++;
        resetTurn();
        if (matchedPairs === 4) {
            setTimeout(() => {
                alert(`You Won in ${moves} moves!`);
            }
                , 300);
        }
    } else {
        lockBoard = true;
        setTimeout(() => {
            firstCard.textContent = "?";
            secondCard.textContent = "?";
            resetTurn();
        }, 1000);
    }
}

function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

createBoard();