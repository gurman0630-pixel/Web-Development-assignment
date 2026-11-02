const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
const message = document.getElementById("message");

let books = [];

function displayBooks() {
    bookList.innerHTML = "";

    books.forEach(function (book, index) {
        const card = document.createElement("div");
        card.className = "book";

        const title = document.createElement("h3");
        title.textContent = book.name;

        const author = document.createElement("p");
        author.textContent = "Author: " + book.author;

        const button = document.createElement("button");
        button.textContent = "Remove";
        button.className = "delete";

        button.addEventListener("click", function () {
            books.splice(index, 1);
            displayBooks();
            message.textContent = "Book removed.";
        });

        card.append(title, author, button);
        bookList.appendChild(card);
    });
}

bookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("bookName").value.trim();
    const author = document.getElementById("authorName").value.trim();

    if (!name || !author) {
        message.textContent = "Please fill in both fields.";
        return;
    }

    books.push({
        name: name,
        author: author
    });

    bookForm.reset();
    displayBooks();

    message.textContent = "Book added successfully!";
});