//Title: harper-dino-app.js
//Author: James Harper
//Date: 5/12/2023
//Description: Web 231 - Week 9 - Assignment 9.2

//Defines a parent class and gives it one property called name. Contains a method roar() which returns a string
//concatenated with the user's selected radio button choice.
class Gigantosaurus {
  constructor(name) {
    this.name = name;
  }
  roar() {
    return `${this.name} says: rooooooar`;
  }
}

//Child class of Gigantosaurus. Uses the same format for the name property. Changes the method name to growl()
//which also has a different returned string.
class Tyrannosaurus extends Gigantosaurus {
  constructor(name) {
    super(name);
  }
  growl() {
    return `${this.name} says: groooooowl`;
  }
}

//Child class of Tyrannosaurus. Uses the same format for the name property. Changes the method name to growl()
//which also has a different returned string.
class Velociraptor extends Tyrannosaurus {
  constructor(name) {
    super(name);
  }
  awk() {
    return `${this.name} says: awk awk awwwwwwk`;
  }
}

//The three following variables are assigned to the method for each preceding class.
const gigantosaurus = new Gigantosaurus('Alfred').roar();
const tyrannosaurus = new Tyrannosaurus('Georgie').growl();
const velociraptor = new Velociraptor('Suzy').awk();
//Checks output of the preceding three variables.
//console.log(gigantosaurus);
//console.log(tyrannosaurus);
//console.log(velociraptor);


//function linked to the HTML document button via an "onclick" event.
function display() {

  //retrieves all user selectable options of inputs named choice.
  const choice = document.querySelectorAll('input[name="dinoChoice"]');
  //empty variable to hold a returned valye from the following loop.
  let radioSelected = '';
  //Loops through each radio button to see which one is selected.
  for (let radioButton of choice) {
    if (radioButton.checked) {
      //Adds the checked radio button value to the variable radioSelected.
      radioSelected += radioButton.value;
      break;
    }
  }

  //Switch statement that assigns the selected method to the HTML id "results". If none of the values are
  //selected, then an alert message to make a selection is returned.
  switch (radioSelected) {

    case 'gigantosaurus':
      document.getElementById('results').innerHTML = gigantosaurus;

    break;

    case 'tyrannosaurus':
      document.getElementById('results').innerHTML = tyrannosaurus;

    break;

    case 'velociraptor':
      document.getElementById('results').innerHTML = velociraptor;

    break;

    default:

        alert('Invalid selection, please try again!');
  }
}
