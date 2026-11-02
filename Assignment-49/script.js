import { saveTasks, loadTasks } from "./storage.js";

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const message = document.getElementById("message");
const submitButton = document.getElementById("submitButton");

let tasks = loadTasks();
let editingId = null;
let currentFilter = "all";

// Save updated data
function saveAndRender() {
    const saved = saveTasks(tasks);

    renderTasks();

    if (!saved) {
        message.textContent = "Warning: Changes could not be saved.";
    }
}

// Add or update task
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const text = taskInput.value.trim();

    if (!text) {
        message.textContent = "Please enter a task.";
        return;
    }

    if (editingId !== null) {
        const task = tasks.find(item => item.id === editingId);

        if (task) {
            task.text = text;
        }

        editingId = null;
        submitButton.textContent = "Add Task";

        message.textContent = "Task updated!";
    } else {
        tasks.push({
            id: Date.now(),
            text: text,
            completed: false
        });

        message.textContent = "Task added!";
    }

    taskInput.value = "";
    saveAndRender();
});

// Render tasks
function renderTasks() {
    taskList.innerHTML = "";

    const filteredTasks = tasks.filter(function(task) {
        if (currentFilter === "pending") {
            return !task.completed;
        }

        if (currentFilter === "completed") {
            return task.completed;
        }

        return true;
    });

    filteredTasks.forEach(function(task) {
        const li = document.createElement("li");

        if (task.completed) {
            li.classList.add("completed");
        }

        const taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = task.text;

        // Edit button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "edit";

        editButton.addEventListener("click", function() {
            taskInput.value = task.text;
            editingId = task.id;
            submitButton.textContent = "Update Task";
            taskInput.focus();
        });

        // Complete button
        const completeButton = document.createElement("button");
        completeButton.textContent = task.completed ? "Undo" : "Complete";
        completeButton.className = "complete";

        completeButton.addEventListener("click", function() {
            task.completed = !task.completed;

            message.textContent = "Task status updated!";
            saveAndRender();
        });

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete";

        deleteButton.addEventListener("click", function() {
            tasks = tasks.filter(item => item.id !== task.id);

            if (editingId === task.id) {
                editingId = null;
                taskInput.value = "";
                submitButton.textContent = "Add Task";
            }

            message.textContent = "Task deleted!";
            saveAndRender();
        });

        li.append(
            taskText,
            editButton,
            completeButton,
            deleteButton
        );

        taskList.appendChild(li);
    });

    const completed = tasks.filter(task => task.completed).length;
    const pending = tasks.length - completed;

    taskCount.textContent =
        "Total: " + tasks.length +
        " | Completed: " + completed +
        " | Pending: " + pending;
}

// Filter tasks
document.querySelectorAll(".filters button").forEach(function(button) {
    button.addEventListener("click", function() {
        currentFilter = button.dataset.filter;
        renderTasks();
    });
});

// Initial load and render
renderTasks();