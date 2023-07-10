let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

const newBook = document.querySelector('newBookForm');
newBookForm.addEventListener('click', openForm)

function openForm() {

}

function addBookToLibrary() {
    
  }

  //All of your book objects are going to be stored in a simple array, 
  //so add a function to the script (not the constructor) that can take user’s input 
  //and store the new book objects into an array.