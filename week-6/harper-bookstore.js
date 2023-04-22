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

  switch(choice) {
    case books:
      let tblBooks = `
        <h3>Books Listing</h3>
        <table class='table'>
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
      `
    break;

    case authors:
      let tblAuthors = `
        <h3>Books Listing</h3>
        <table class='table'>
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
      `
    break;

    case publishers:
      let tblPublishers = `
        <h3>Books Listing</h3>
        <table class='table'>
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
      `
    break;

    //Creates an alert box that displays a message if one of the three case values is somehow not selected.
    default:
      alert('Invalid selection, please try again.')
  }
}
