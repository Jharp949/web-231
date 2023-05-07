//Title: harper-in-n-out-books.js
//Author: James Harper
//Date: 5/1/2023
//Description: Web 231 - Week 8 - Assignment 8.2

//Object with three properties containing three values each.
const books = {
  isbn: ["0592669418", "1160392877", "4001938421"],
  title: ["The Lord of the Rings", "East of Eden", "A Game of Thrones"],
  pages: [512, 498, 445]
};

//Object with two properties containing three values each.
const authors = {
  name: ["J.R.R. Tolkien", "John Steinbeck", "George R.R. Martin"],
  genre: ["Fantasy", "Drama", "Fantasy"]
};

//Function for the onclick event button from the linked HTML document.
function display() {

  //retrieves user selection from the select-value element.
  const choice = document.getElementById('select-value').value;

  //switch statement which executes a task based on the users selected option.
  switch(choice) {

      //When the books value is selected, returns the following program.
      case 'books':

        //variable which stores a preset table.
        let tblBooks = `
        <h3>Top 3 Favorite Books</h3>
        <table class='table'>
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Title</th>
              <th>Pages</th>
            </tr>
          </thead>
          <tbody>
        `;

        const valueIsbn = books.isbn; //Variable assigned to the first property array of books.
        const valueTitle = books.title; //Variable assigned to the second property array of books.
        const valuePages = books.pages; //Variable assigned to the third property array of books.

        //for loop which iterates through all index values of each array.
        for (let value = 0; value < books.isbn.length; value++) {

          //Variable containing the result of each iteration.
          let row = `
          <tr>
            <td>` + valueIsbn[value] + `</td>
            <td>` + valueTitle[value] + `</td>
            <td>` + valuePages[value] + `</td>
          </tr>
          `;

          tblBooks += row; //Adds the value of row to the tblBooks variable.
        };

        //Adds closing tags to the tblBooks variable.
        tblBooks += `
        </tbody>
        </table>
        `;

        //Assigns the completed information to the id results.
        document.getElementById('results').innerHTML = tblBooks;

      break; //End the switch statement.

      //When the authors value is selected, returns the following program.
      case 'authors':

        //variable which stores a preset table.
        let tblAuthors = `
        <h3>Top 3 Favorite Authors</h3>
        <table class='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
        `;

        const authorName = authors.name; //Variable assigned to the first property array of authors.
        const authorGenre = authors.genre; //Variable assigned to the second property array of authors.

        //for loop which iterates through all index values of each array.
        for (let value = 0; value < authors.name.length; value++) {

          //Variable containing the result of each iteration.
          let row = `
          <tr>
            <td>` + authorName[value] + `</td>
            <td>` + authorGenre[value] + `</td>
          </tr>
          `;

          tblAuthors += row; //Adds the value of row to the tblAuthors variable.
        };

        //Adds closing tags to the tblAuthors variable.
        tblAuthors += `
        </tbody>
        </table>
        `;

        //Assigns the completed information to the id results.
        document.getElementById('results').innerHTML = tblAuthors;

      break; //End the switch statement.

      //Displays an alert if neither books or authors is chosen as an option.
      default:

        alert('Invalid selection, please try again!');
  }
}
