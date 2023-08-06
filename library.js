let library = [];
const mainContent = document.querySelector(".main-content");
const newBook = document.querySelector(".new-book");

function showHideForm() { 
  newBook.classList.toggle("hide");
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

function addBookToLibrary() {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector("#read");
  let newBook = new Book (title.value, author.value, pages.value, read.value);
  myLibrary.push(newBook);
  title.value = "";
  author.value = "";
  pages.value = "";
  read.value = "";
}

const displayBook = function (object) {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
};

newBook.addEventListener("submit", addBookToLibrary)