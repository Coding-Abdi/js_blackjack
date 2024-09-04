let firstCard = Math.floor(Math.random() * 10) + 2;

let secondCard = Math.floor(Math.random() * 10) + 2;

let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true

let msgEl = document.getElementById("msg-el")
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

function button() {
    console.log(sum)
    cardsEl.textContent = "Cards: " + firstCard + secondCard;
    sumEl.textContent = "Sum: " + sum;    
    if (sum <= 20) {
        msgEl.textContent = "Do you want to draw a new card?";
} else if (sum === 21) {
    msgEl.textContent = "Wohoo! You've got a Blackjack"
    hasBlackjack = true;
} else {
    msgEl.textContent = "Game over!"
    isAlive = false;
}
console.log("You win!" + " = " + hasBlackjack);
console.log("You are still in the game" + " = " + isAlive)

}

// if (sum <= 20) {
//     console.log("Do you want to draw a new card?")
// } else if (sum === 21) {
//     console.log("Wohoo! You've got a Blackjack")
//     hasBlackjack = true
// } else {
//     console.log("Game over!")
//     isAlive = false
// }





