//Title: harper-calculator.js
//Author: James Harper
//Date: 4/29/2023
//Description: Web 231 - Week 7 - Assignment 7.2


function multiply(multiplyOne, multiplyTwo) {

  const product = multiplyOne * multiplyTwo;

  if (typeof multiplyOne == 'number' || typeof multiplyTwo == 'number') {
    throw alert('inputs must be numbers.');
  } else if (isNaN(multiplyOne) === true || isNaN(multiplyTwo) === true){
    throw alert('inputs must be numbers.');
  }

    return product;
}
//console.log(multiply(5, 9));


function divide(divideOne, divideTwo) {

  const division = divideOne / divideTwo;

  if (divideTwo == 0) {
    throw alert('cannot divide by zero');
  } else if (isNaN(divideOne) === true || isNaN(divideTwo) === true) {
    throw alert('inputs must be numbers.');
  } else if (divideOne < 0 || divideTwo < 0 === true) {
    throw alert('inputs must be valid numbers.');
  }

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
