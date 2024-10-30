// let firstCard = Math.floor(Math.random() * 10) + 2;
// let secondCard = Math.floor(Math.random() * 10) + 2;
let cards = []
let sum = 0;

let hasBlackjack = false;
let isAlive = false

let msgEl = document.getElementById("msg-el")
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el")

let player = {
    name: "Tom",
    chips: 155
}

playerEl.textContent = player.name + ": £" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    console.log(randomCard)
    if (randomCard === 1) {
        return 11;
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [  firstCard, secondCard ]
    sum = firstCard + secondCard

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
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card)
        console.log(cards)
        play();
    }
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




