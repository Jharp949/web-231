//Title: harper-calculator.js
//Author: James Harper
//Date: 4/29/2023
//Description: Web 231 - Week 7 - Assignment 7.2

//A function with two parameters that check if conditions are true. Then carry out multiplication of the parameters.
function multiply(multiplyOne, multiplyTwo) {
//if statement that verifies that the user input is a valid number. Uses the typeof operator.
  if (typeof multiplyOne == 'number' || typeof multiplyTwo == 'number') {
    //error message thrown if the result is false.
    throw alert('inputs must be numbers.');
    //additional check that the user input is a valid number using the isNaN() method.
  } else if (isNaN(multiplyOne) || isNaN(multiplyTwo) === true){
    //error message thrown if the result is true.
    throw alert('inputs must be numbers.');
  }
  //variable that multiplies the two parameters together.
  const product = multiplyOne * multiplyTwo;
  //variable product returned as a result to executing the function.
  return product;
}
//Checks if the function is operating properly.
//console.log(multiply(5, 9));

//A function with two parameters with check statements. Division is carried out if the conditions are met.
function divide(divideOne, divideTwo) {
  //checks whether or not the divisor parameter is zero.
  if (divideTwo == 0) {
    //alert thrown if the parameter is zero.
    throw alert('cannot divide by zero');
    //Checks that the user input is a valid number using the isNaN() method.
  } else if (isNaN(divideOne) === true || isNaN(divideTwo) === true) {
    //error message thrown if the result is true.
    throw alert('inputs must be numbers.');
    //Additional check to ensure that neither of the numbers are negative.
  } else if (divideOne < 0 || divideTwo < 0 === true) {
    //Alert thrown is
    throw alert('inputs must be valid numbers.');
  }

  const division = divideOne / divideTwo;
  return division;
}
//console.log(divide(28, 7));

function displayMultiplyResults() {
  const multValueOne = document.getElementById('multInputOne').value;
  const multValueTwo = document.getElementById('multInputTwo').value;
  parseFloat(multValueOne);
  parseFloat(multValueTwo);

  try {
    const sum = multiply(multValueOne, multValueTwo);
    document.getElementById('mul-results').innerHTML = multValueOne + ' * ' + multValueTwo + ' = ' + sum;
  }
  catch(err) {
    console.log(err);
  }
}

function displayDivideResults() {
  const divValueOne = document.getElementById("divInputOne").value;
  const divValueTwo = document.getElementById("divInputTwo").value;
  parseFloat(divValueOne);
  parseFloat(divValueTwo);

  try {
    const sum = divide(divValueOne, divValueTwo);
    document.getElementById('div-results').innerHTML = divValueOne + ' / ' + divValueTwo + ' = ' + sum;
  }
  catch(err) {
    console.log(err);
  }
}
