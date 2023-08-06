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

  const title = document.createElement('h3');
  title.textContent = object.title;
  bookDiv.appendChild(title);

  const author = document.createElement('h4');
  author.textContent = object.author;
  bookDiv.appendChild(author);

  const pages = document.createElement('h4');
  pages.textContent = object.pages;
  bookDiv.appendChild(pages);

  const read = document.createElement('button');
  read.textContent = "read";
  bookDiv.appendChild(read);

  if(object.read === "read") {
    read.setAttribute("data-clicked", "true");
    read.style.backgroundColor = '#008000';
  } else {
  read.style.backgroundColor = '#808080';
  };
};

newBook.addEventListener("submit", addBookToLibrary)