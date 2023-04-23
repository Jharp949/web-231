//Title: harper-bookstore.js
//Author: James Harper
//Date: 4/21/2023
//Description: Web 231 - Week 6 - Assignment 6.2

const books = ['The Lord of the Rings', 'East of Eden', 'A Game of Thrones'];
const authors = ['J.R.R. Tolkien', 'John Steinbeck', 'George R.R. Martin'];
const publishers = ['Allen & Unwin', 'The Viking Press', 'Bantam Spectra'];

authors.sort();
publishers.reverse();

//Checks to see if the sort and reverse methods operate.
//console.log(authors);
//console.log(publishers);

function display() {
  const choice = document.getElementById('input-value').value;
  let row = '';

  switch(choice) {
    case 'books':
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

      for (let book = 0; book < books.length; book++) {
        row = `
          <tr>
            <td>` + books[book] + `</td>
          </tr>
        `;
        tblBooks += row;
      }

      tblBooks += `
        </tbody>
      </table>
      `;

      document.getElementById('bookResult').innerHTML = tblBooks;

    break;

    case 'authors':
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

      for (let author = 0; author < authors.length; author++) {
        row = `
          <tr>
            <td>` + authors[author] + `</td>
          </tr>
        `;
        tblAuthors += row;
      }

      tblAuthors += `
        </tbody>
      </table>
    `;
      document.getElementById('bookResult').innerHTML = tblAuthors;
    break;

    case 'publishers':
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

      for (let publisher = 0; publisher < publishers.length; publisher++) {
        row = `
          <tr>
            <td>` + publishers[publisher] + `</td>
          </tr>
        `;
        tblPublishers += row;
      }

      tblPublishers += `
        </tbody>
      </table>
      `;
      document.getElementById('bookResult').innerHTML = tblPublishers;
    break;

    //Creates an alert box that displays a message if one of the three case values is not selected.
    default:
      alert('Invalid selection, please try again.')
  }
}
