//Title: harper-calculator.js
//Author: James Harper
//Date: 4/29/2023
//Description: Web 231 - Week 7 - Assignment 7.2

//A function with two parameters that check if conditions are true. Then carry out multiplication of the parameters.
function multiply(multiplyOne, multiplyTwo) {
//if statement that verifies that the user input is a valid number. Uses the typeof operator.
  if (typeof multiplyOne != 'number' || typeof multiplyTwo != 'number') {
    //error message thrown if the result is false.
    throw alert('inputs must be numbers.');
    //additional check that the user input is a valid number using the isNaN() method.
  } else if (isNaN(multiplyOne) || isNaN(multiplyTwo)){
    //error message thrown if the result is true.
    throw alert('inputs must be numbers.');
  }
  //variable that multiplies the two parameters together.
  const product = multiplyOne * multiplyTwo;
  //variable sum returned as a result to executing the function.
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
  } else if (isNaN(divideOne) || isNaN(divideTwo)) {
    //error message thrown if the result is true.
    throw alert('inputs must be numbers.');
    //Additional check to ensure that neither of the numbers are negative.
  } else if (divideOne < 0 || divideTwo < 0) {
    //Alert thrown if either condition is true.
    throw alert('inputs must be valid numbers.');
  }
  //variable that divides the two parameters.
  const division = divideOne / divideTwo;
  //variable sum returned as a result to executing the function.
  return division;
}
//Checks if the function is operating properly.
//console.log(divide(28, 7));

//Function that executes multiply() then assigns it to a HTML element.
function displayMultiplyResults() {
  //Variable derived from the user input HTML id multInputOne.
  const multValueOne = document.getElementById('multInputOne').value;
  //Variable derived from the user input HTML id multInputTwo.
  const multValueTwo = document.getElementById('multInputTwo').value;
  //Ensures the input is in number form for the function parameter to operate.
  parseFloat(multValueOne);
  parseFloat(multValueTwo);
  //try statement that executes multiply(). Then assigns the value to the span with an id of mul-results.
  try {
    const sum = multiply(multValueOne, multValueTwo);
    document.getElementById('mul-results').innerHTML = multValueOne + ' * ' + multValueTwo + ' = ' + sum;
  }
  //Logs any errors that may occur when the function is executed.
  catch(err) {
    console.log(err);
  }
}
//Function that executes divide() then assigns it to a HTML element.
function displayDivideResults() {
  //Variable derived from the user input HTML id divInputOne.
  const divValueOne = document.getElementById("divInputOne").value;
  //Variable derived from the user input HTML id divInputTwo.
  const divValueTwo = document.getElementById("divInputTwo").value;
  //Ensures the input is in number form for the function parameter to operate.
  parseFloat(divValueOne);
  parseFloat(divValueTwo);
  //try statement that executes divide(). Then assigns the value to the span with an id of div-results.
  try {
    const sum = divide(divValueOne, divValueTwo);
    document.getElementById('div-results').innerHTML = divValueOne + ' / ' + divValueTwo + ' = ' + sum;
  }
  //Logs any errors that may occur when the function is executed.
  catch(err) {
    console.log(err);
  }
}
