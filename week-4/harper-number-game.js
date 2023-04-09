//Title: harper-number-game.js
//Author: James Harper
//Date: 4/9/2023
//Description: Web 231 - Week 4 - Assignment 4.2

const rnd = Math.floor((Math.random() * 10) + 1) // Generates a random number between 1 and 10.

//Function which is linked to the HTML document with an onClick event for button with a class btn-primary.
function chkGuess() {
  const msgLessThan = "The number is less than"; //variable with a string for input values less than const rnd.
  const msgGreaterThan = "The number is greater than"; //variable with a string for input values greater than const rnd.
  const mstCongrats = "Congratulations! You picked the correct number!"; //variable with a string for exact const rnd match.
  const guess = document.getElementById("input-value").value; //Retrieves the user input value from the HTML document with an id of "input-value".

//An if statement followed by two else if statements. The if statement checks if rnd is equal to the user guess.
//If the statement is true, then mstCongrats is displayed within the span with an id of guessResult on the HTML document.
//If the statement is false, then the next condition is checked which is if rnd is greater than guess.
//If that condition is true, then the string from msgGreaterThan is displayed until the condition is false.
//If the last else if is true, then the statement checks if rnd is less than guess.
//msgLessThan continues to display until the condition is false.
  if (rnd == guess) {
    return document.getElementById("guessResult").innerHTML = mstCongrats;
  } else if (rnd > guess) {
    return document.getElementById("guessResult").innerHTML = msgGreaterThan;
  } else if (rnd < guess) {
    return document.getElementById("guessResult").innerHTML = msgLessThan;
  }
}
