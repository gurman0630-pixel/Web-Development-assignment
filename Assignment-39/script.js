// Select HTML elements
const heading = document.getElementById("heading");
const description = document.getElementById("description");
const changeTextButton = document.getElementById("changeText");
const changeColorButton = document.getElementById("changeColor");

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

// Change heading text
changeTextButton.addEventListener("click", function () {
    heading.textContent = "JavaScript DOM is Working!";
});

// Change heading color
changeColorButton.addEventListener("click", function () {
    heading.style.color = "green";
});

// Add task
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskName = taskInput.value.trim();

    if (taskName === "") {
        message.textContent = "Please enter a task.";
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Add task text safely
    const taskText = document.createElement("span");
    taskText.textContent = taskName;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";

    // Add delete functionality
    deleteButton.addEventListener("click", function () {
        li.remove();
        message.textContent = "Task deleted.";
    });

    li.appendChild(taskText);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
    message.textContent = "Task added successfully!";
});