// let firstCard = Math.floor(Math.random() * 10) + 2;
// let secondCard = Math.floor(Math.random() * 10) + 2;
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [  firstCard, secondCard ]
let sum = firstCard + secondCard;

let hasBlackjack = false;
let isAlive = true

let msgEl = document.getElementById("msg-el")
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 10) + 2;
    return randomCard;
}

function startGame() {
    play();
}
function play() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "; 
    }
    sumEl.textContent = "Sum: " + sum; 
    console.log(sum)
    if (sum <= 20) {
        msgEl.textContent = "Do you want to draw a new card?";
    } else if (sum === 21) {
    msgEl.textContent = "You've got a Blackjack"
    hasBlackjack = true;
    } else {
    msgEl.textContent = "Game over!"
    isAlive = false;
}
console.log("You win!" + " = " + hasBlackjack);
console.log("You are still in the game" + " = " + isAlive)
}

function newCard() {
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    console.log(cards)
    play();
}

// function restart() {
//     msgEl.textContent = "Want to play a round?";
//     cardsEl.textContent = "Cards:";
//     sumEl.textContent = "Sum:";
//     firstCard = 0;
//     secondCard = 0;
//     sum = 0;
// }

// if (sum <= 20) {
//     console.log("Do you want to draw a new card?")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got a Blackjack")
//     hasBlackjack = true
// } else {
//     console.log("Game over!")
//     isAlive = false
// }





