// Challenge 1: Select an element by ID
function selectById() {
    const element = document.getElementById("mainHeading");

    element.style.color = "red";

    showOutput("Selected heading using getElementById().");
}


// Challenge 2: Select elements by class name
function selectByClass() {
    const elements = document.getElementsByClassName("info");

    Array.from(elements).forEach(element => {
        element.style.color = "green";
    });

    showOutput("Selected " + elements.length + " elements using getElementsByClassName().");
}


// Challenge 3: Select elements by tag name
function selectByTag() {
    const elements = document.getElementsByTagName("h2");

    Array.from(elements).forEach(element => {
        element.style.color = "blue";
    });

    showOutput("Selected " + elements.length + " headings using getElementsByTagName().");
}


// Challenge 4: Select using querySelector
function selectByQuery() {
    const element = document.querySelector(".section-title");

    element.style.backgroundColor = "lightyellow";
    element.style.padding = "10px";

    showOutput("Selected the first section heading using querySelector().");
}


// Challenge 5: Select all matching elements
function selectAll() {
    const subjects = document.querySelectorAll(".subject");

    subjects.forEach(subject => {
        subject.style.backgroundColor = "lightgreen";
        subject.style.padding = "8px";
        subject.style.margin = "5px";
    });

    showOutput("Selected all " + subjects.length + " subjects using querySelectorAll().");
}


// Display output
function showOutput(message) {
    document.getElementById("output").textContent = message;
}


// Reset page styles
function resetPage() {
    location.reload();
}