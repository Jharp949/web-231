//Title: harper.payroll.js
//Author: James Harper
//Date: 3/21/2023
//Description: Web 231 - Week 2 - Assignment 2.2

//The following 15 variables are linked to the harper-payroll.html just before the closing body tag.

//Assigns list item 1 within the first unordered list of the HTML DOM to a string value.
const li_oneOne = document.getElementById("one-one").innerHTML = "Ludwig";
//Assigns list item 2 within the first unordered list of the HTML DOM to a string value.
const li_oneTwo = document.getElementById("one-two").innerHTML = "Beethoven";
//Assigns list item 3 within the first unordered list of the HTML DOM to a string value.
const li_oneThree = document.getElementById("one-three").innerHTML = "505 main street";
//Assigns list item 4 within the first unordered list of the HTML DOM to a string value.
//The string value is determined and kept current by the Date() object.
const li_oneFour = document.getElementById("one-four").innerHTML = new Date().toLocaleDateString('en-US');
//Assigns list item 5 within the first unordered list of the HTML DOM to a string value.
//The string value is derived by attaching the toFixed method to the number value 18.95.
//(1) rounds the string to one decimal value.
const li_oneFive = document.getElementById("one-five").innerHTML = 18.95.toFixed(1);

//Assigns list item 1 within the second unordered list of the HTML DOM to a string value.
const li_twoOne = document.getElementById("two-one").innerHTML = "Johann";
//Assigns list item 2 within the second unordered list of the HTML DOM to a string value.
const li_twoTwo = document.getElementById("two-two").innerHTML = "Bach";
//Assigns list item 3 within the second unordered list of the HTML DOM to a string value.
const li_twoThree = document.getElementById("two-three").innerHTML = "512 main street";
//Assigns list item 4 within the second unordered list of the HTML DOM to a string value.
//The string value is determined and kept current by the Date() object.
const li_twoFour = document.getElementById("two-four").innerHTML = new Date().toLocaleDateString('en-US');
//Assigns list item 5 within the second unordered list of the HTML DOM to a string value.
//The string value is derived by attaching the toFixed method to the number value 25.59.
//(1) rounds the string to the tenths value.
const li_twoFive = document.getElementById("two-five").innerHTML = 25.54.toFixed(1);

//Assigns list item 1 within the third unordered list of the HTML DOM to a string value.
const li_threeOne = document.getElementById("three-one").innerHTML = "Wolfgang";
//Assigns list item 2 within the third unordered list of the HTML DOM to a string value.
const li_threeTwo = document.getElementById("three-two").innerHTML = "Mozart";
//Assigns list item 3 within the third unordered list of the HTML DOM to a string value.
const li_threeThree = document.getElementById("three-three").innerHTML = "600 main street";
//Assigns list item 4 within the third unordered list of the HTML DOM to a string value.
//The string value is determined and kept current by the Date() object.
const li_threeFour = document.getElementById("three-four").innerHTML = new Date().toLocaleDateString('en-US');
//Assigns list item 5 within the third unordered list of the HTML DOM to a string value.
//The string value is derived by attaching the toFixed method to the number value 50.12.
//(1) rounds the string to the tenths value.
const li_threeFive = document.getElementById("three-five").innerHTML = 50.12.toFixed(1);
