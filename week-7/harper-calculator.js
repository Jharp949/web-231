//Title: harper-calculator.js
//Author: James Harper
//Date: 4/29/2023
//Description: Web 231 - Week 7 - Assignment 7.2


function multiply(multiplyOne, multiplyTwo) {

  if (isNaN(multiplyOne) === true || isNaN(multiplyTwo) === true) {
    throw alert('inputs must be numbers.');
  } else {
    let product = multiplyOne * multiplyTwo;
    return product;
  }
}
console.log(multiply(5, 9));


function divide(divideOne, divideTwo) {

  let division = divideOne / divideTwo;

  if (divideTwo === 0) {
    throw alert('cannot divide by zero');
  } else if (isNaN(divideOne) === true || isNaN(divideTwo) === true) {
    throw alert('inputs must be numbers.');
  } else if (divideOne < 0 || divideTwo < 0 === 'True') {
    throw alert('inputs must be valid numbers.');
  }

  return division;
}
//console.log(divide(28, 7));

function displayMultiplyResults() {
  let multValueOne = document.getElementById('multInputOne').value;
  let multValueTwo = document.getElementById('multInputTwo').value;
  parseFloat(multValueOne);
  parseFloat(multValueTwo);

  try {
    const sum = multiply(multValueOne, multValueTwo);
    document.getElementById('multResult').innerHTML = sum;
  }
  catch(err) {
    alert(err);
  }
}

function displayDivideResults() {
  let divideValueOne = document.getElementById("divideInputOne").value;
  let divideValueTwo = document.getElementById("divideInputTwo").value;
  parseFloat(divideValueOne);
  parseFloat(divideValueTwo);

  try {
    const sum = divide(divideValueOne, divideValueTwo);
    document.getElementById('divResult').innerHTML = sum;
  }
  catch(err) {
    alert(err);
  }
}
