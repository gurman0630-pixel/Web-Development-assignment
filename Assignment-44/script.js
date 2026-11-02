const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const message = document.getElementById("message");
const submitButton = document.getElementById("submitButton");

let tasks = [];
let editingId = null;
let currentFilter = "all";
let nextId = 1;

// Add a new task or update an existing task
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = taskInput.value.trim();

    if (text === "") {
        message.textContent = "Please enter a task.";
        return;
    }

    if (editingId !== null) {
        const task = tasks.find(function (item) {
            return item.id === editingId;
        });

        if (task) {
            task.text = text;
        }

        editingId = null;
        submitButton.textContent = "Add Task";
        message.textContent = "Task updated successfully!";
    } else {
        tasks.push({
            id: nextId++,
            text: text,
            completed: false
        });

        message.textContent = "Task added successfully!";
    }

    taskInput.value = "";
    renderTasks();
});

// Display tasks
function renderTasks() {
    taskList.innerHTML = "";

    const filteredTasks = tasks.filter(function (task) {
        if (currentFilter === "pending") {
            return !task.completed;
        }

        if (currentFilter === "completed") {
            return task.completed;
        }

        return true;
    });

    filteredTasks.forEach(function (task) {
        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        const text = document.createElement("span");
        text.className = "task-text";
        text.textContent = task.text;

        // Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit";

        editButton.addEventListener("click", function () {
            taskInput.value = task.text;
            editingId = task.id;
            submitButton.textContent = "Update Task";
            taskInput.focus();
        });

        // Complete button
        const completeButton = document.createElement("button");
        completeButton.textContent = task.completed ? "Undo" : "Complete";
        completeButton.className = "complete";

        completeButton.addEventListener("click", function () {
            task.completed = !task.completed;
            renderTasks();
            message.textContent = "Task status updated.";
        });

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";

        deleteButton.addEventListener("click", function () {
            tasks = tasks.filter(function (item) {
                return item.id !== task.id;
            });

            if (editingId === task.id) {
                editingId = null;
                taskInput.value = "";
                submitButton.textContent = "Add Task";
            }

            renderTasks();
            message.textContent = "Task deleted.";
        });

        li.append(text, editButton, completeButton, deleteButton);
        taskList.appendChild(li);
    });

    const completedCount = tasks.filter(function (task) {
        return task.completed;
    }).length;

    taskCount.textContent =
        "Total: " + tasks.length +
        " | Completed: " + completedCount +
        " | Pending: " + (tasks.length - completedCount);
}

// Filter tasks
document.querySelectorAll(".filters button").forEach(function (button) {
    button.addEventListener("click", function () {
        currentFilter = button.dataset.filter;
        renderTasks();
    });
});

renderTasks();