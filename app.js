console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

///////////////////////////////////
class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [];
    this.count = 0;
  }

  addBook() {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const read = document.querySelector("#checkbox1");
    const insert = document.querySelector("#insert");
    const form = document.querySelector("form");
    const submit2 = document.querySelectorAll("submit2");
    const newBook = new Book(title.value, author.value, read.value);
    this.books.push(newBook);

    this.count++;
    if (document.querySelector("#checkbox1").checked == false) {
      insert.insertAdjacentHTML(
        "afterend",
        `<tr>
    <td>${newBook.title}</td>
    <td>${newBook.author}</td>
    <td>
      <input
        type="checkbox"
        name="read"
        id="checkbox"
       
        
        />
        <input type="submit" id="submit2" onclick="doOnSubmit()" value="Read" />
    </td>
  </tr>`
      );
    } else if (document.querySelector("#checkbox1").checked == true) {
      insert.insertAdjacentHTML(
        "afterend",
        `<tr>
    <td>${newBook.title}</td>
    <td>${newBook.author}</td>
    <td>
      <input
        type="checkbox"
        name="read"
        id="checkbox"
        checked
        disabled
        
        />
    </td>
  </tr>`
      );
    }
  }
  markread(checkbox, id) {
    if (document.querySelector("#checkbox1").checked == true) {
      return (Book.read = "true");
    } else {
      return (Book.read = "false");
    }
  }
}
const form = document.querySelector("#form");
const lib1 = new Library("books");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  lib1.addBook();
  lib1.markread();
  form.reset();

  console.log(lib1);
});
let checked = document.querySelector("#checkbox");
function doOnSubmit() {
  document.getElementById("submit2").disabled = true;
  // document.getElementById("submit2").style.visibility = "hidden";
  document.getElementById("submit2").style.display = "none";
  document.getElementById("checkbox").disabled = true;
  document.getElementById("checkbox").checked = true;
}
