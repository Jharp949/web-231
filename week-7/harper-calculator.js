//Title: harper-calculator.js
//Author: James Harper
//Date: 4/29/2023
//Description: Web 231 - Week 7 - Assignment 7.2


//Function for the onclick event button from the linked HTML document.
function display() {
  const choice = document.getElementById('input-value').value; //retrieves user selection from the select element.
  let row = ''; //Empty variable used to stored the iterated array values.
  //let index = 0;
//switch statement which executes a task based on the users selected option.
  switch(choice) {
    //When the books value is selected, returns the following program.
    case 'books':
      //variable which stores a preset table.
      let tblBooks = `
        <h3>Books Listing</h3>
        <table class='table'>
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
      `;
      //for loop setup to iterate through the books array. Each index value is stored in the row variable,
      //then added to the tblBooks variable to create the table data.
      for (let book = 0; book < books.length; book++) {
        row = `
          <tr>
            <td>` + books[book] + `</td>
          </tr>
        `;
        tblBooks += row;
      }
/*      do { index++
        row = `
        <tr>
          <td>` + books[index] + `</td>
        </tr>
      `;
      tblBooks += row;
      } while (index < books.length)*/
      //Adds the closing tags to the tblBooks variable.
      tblBooks += `
        </tbody>
      </table>
      `;
      //Assigns the completed information to the id bookResult.
      document.getElementById('bookResult').innerHTML = tblBooks;
    //Ends the program.
    break;
    //When the authors value is selected, returns the following program.
    case 'authors':
      //variable which stores a preset table.
      let tblAuthors = `
        <h3>Authors Listing</h3>
        <table class='table'>
          <thead>
            <tr>
              <th>Full Name</th>
            </tr>
          </thead>
          <tbody>
      `;
      //for loop setup to iterate through the authors array. Each index value is stored in the row variable,
      //then added to the tblAuthors variable to create the table data.
      for (let author = 0; author < authors.length; author++) {
        row = `
          <tr>
            <td>` + authors[author] + `</td>
          </tr>
        `;
        tblAuthors += row;
      }
      //Adds the closing tags to the tblAuthors variable.
      tblAuthors += `
        </tbody>
      </table>
    `;
      //Assigns the completed information to the id bookResult.
      document.getElementById('bookResult').innerHTML = tblAuthors;
    //Ends the program.
    break;
    //When the authors value is selected, returns the following program.
    case 'publishers':
      //variable which stores a preset table.
      let tblPublishers = `
        <h3>Publisher Listing</h3>
        <table class='table'>
          <thead>
            <tr>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
      `;
      //for loop setup to iterate through the publishers array. Each index value is stored in the row variable,
      //then added to the tblPublishers variable to create the table data.
      for (let publisher = 0; publisher < publishers.length; publisher++) {
        row = `
          <tr>
            <td>` + publishers[publisher] + `</td>
          </tr>
        `;
        tblPublishers += row;
      }
      //Adds the closing tags to the tblPublishers variable.
      tblPublishers += `
        </tbody>
      </table>
      `;
      //Assigns the completed information to the id bookResult.
      document.getElementById('bookResult').innerHTML = tblPublishers;
    //Ends the program./
    break;

    //Creates an alert box that displays a message if one of the three case values is not selected.
    default:
      alert('Invalid selection, please try again.')
  }
}
