//Title: harper-calculator.js
//Author: James Harper
//Date: 4/29/2023
//Description: Web 231 - Week 7 - Assignment 7.2


function multiply(multiplyOne, multiplyTwo) {
  if (isNaN(multiplyOne) && isNaN(multiplyTwo) === 'False') {
    let product = multiplyOne * multiplyTwo;
  } else {
    throw alert('inputs must be numbers.');
  }
  return product;
}

function divide(divideOne, divideTwo) {
  if (divideTwo === 0) {
    throw alert('cannot divide by zero');
  } else if (isNaN(divideOne) && isNaN(divideTwo) && divideOne < 0 && divideTwo < 0 === 'False') {
    let division = divideOne / divideTwo;
  } else {
    throw alert('inputs must be numbers.');
  }
  return division;
}

function displayMultiplyResults() {
  multiplyValueOne = document.getElementById("multInputOne").value;
  multiplyValueTwo = document.getElementById("multInputTwo").value;
  parseFloat(multiplyValueOne);
  parseFloat(multiplyValueTwo);

  try {
    const sum = multiply(multiplyValueOne, multiplyValueTwo);
    document.getElementById('').innerHTML = sum;
  }
  catch(err) {

  }
}
