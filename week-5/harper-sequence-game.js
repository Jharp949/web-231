//Title: harper-sequence-game.js
//Author: James Harper
//Date: 4/14/2023
//Description: Web 231 - Week 5 - Assignment 5.2


//A function that displays a list of numbers based on the selection HTML option.
//There are four switch statements. Three are cases which represent three selectable values.
//One is a default error alert if not value is selected.
function displaySequence() {

  //Retrieves the user input value from harper-sequence-game.html.
  const choice = document.getElementById('input-value').value;

//switch statement based on the choice option.
  switch(choice) {

    //first case is a list of numbers from 0 to 10.
    case 'numbers':
      //variable used to iterate through numbers.
      let index = 0;
      //Variable used to store each number.
      let txtNumSequence = '';

      //while loop setup to stop after the number 10 is iterated.
      while (index < 11) {
        //Adds the value of index to txtNumSequence.
        txtNumSequence += index;
        //Adds 1 to each iteration.
        index++;
        //If statement that adds a comma after each value.
        if (index < 11) {
          txtNumSequence += ', '
        }
      }
      //Assigns the value of txtNumSequence to the span in harper-sequence-game.html with an id of 'seqResult'.
      document.getElementById('seqResult').innerHTML = txtNumSequence;
      //Stops the loop.
      break;

    //Second case, lists even numbers from 0 to 20.
    case 'even':
      //variable used to iterate through numbers.
      let evenNumber = 0;
      //Variable used to store each number.
      let txtEvenSequence = '';

      //A do while loop which runs until the value of evenNumber is less than 21.
      do {
        //Adds the value of evenNumber to txtEvenSequence.
        txtEvenSequence += evenNumber;
        //Adds 2 to evenNumber
        evenNumber += 2;
        //Adds a comma after each number
        if (evenNumber < 21) {
          txtEvenSequence += ', ';
        }
      }
      //Determines the condition for the loop to stop.
      while (evenNumber < 21);
      //Assigns the value of txtEvenSequence to the span in harper-sequence-game.html with an id of 'seqResult'.
      document.getElementById('seqResult').innerHTML = txtEvenSequence;
      //Stops the loop.
      break;

    case 'odd':
      //Empty variable set to a string value.
      let txtOddSequence = '';

      //for loop with three conditions. The first assigns a variable with a start point. The second determines the
      //condition for the loop to run. The third executes an action on the variable.
      for (let oddNum = 1; oddNum < 20; oddNum += 2) {
        //Assigns each iterated value to the variable txtOddSequence.
        txtOddSequence += oddNum;

        //Adds a comma after each number.
        if (oddNum < 19) {
          txtOddSequence += ', '
        }
      }
      //Assigns the value of txtOddSequence to the span in harper-sequence-game.html with an id of 'seqResult'.
      document.getElementById('seqResult').innerHTML = txtOddSequence;
      //Stops the loop.
      break;

    //Creates an alert box that displays a message if one of the three case values is somehow not selected.
    default:
      alert('Invalid selection, please try again.')
  }
}

