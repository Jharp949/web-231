//Title: harper-temp-conversion.js
//Author: James Harper
//Date: 4/1/2023
//Description: Web 231 - Week 3 - Assignment 3.3

//A function that converts fahrenheit to celsius. The user enters a value into the linked HTML form input.
//When the convert temperature button is clicked. The conversion formula is carried out and returned to
//the span on the linked HTML document with an id of "calculation".
function calcCelsius() {
//assigns the users input value to the variable fahrenheit.
  const fahrenheit = document.getElementById("input-value").value;
//carries out the F to C conversion based on the fahrenheit value input.
  const celsius = (fahrenheit - 32) / 1.8;
//returns the calculated value rounded to hundredths.
  return document.getElementById("calculation").innerHTML = celsius.toFixed(2);
}

