"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);
// //handling click events - eventlistener

// we gonna listen the even on click button

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
    // when the player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    // changes the inline style:
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    //reveals the secret number
    document.querySelector(".number").textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score < 2) {
      document.querySelector(".message").textContent = " You lost the game";
    } else {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else if (guess < secretNumber) {
    if (score < 2) {
      document.querySelector(".message").textContent = " You lost the game";
    } else {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});
// change the background to green whenever player guesses the number and wins.

document.querySelector(".again").addEventListener("click", function () {
  const again = console.log(typeof document.querySelector(".again"));
  console.log(again);
  if (!again) {
    document.querySelector(".score").textContent = "20";
    document.querySelector("body").style.background = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".message").textContent = " Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = null;
  }
});
