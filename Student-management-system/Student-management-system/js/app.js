
import {
    generateId,
    validateStudent,
    searchStudents,
    calculateStatistics
} from "./utils.js";

const STORAGE_KEY = "studentHubRecords";

const form = document.getElementById("studentFormElement");
const table = document.getElementById("studentTable");
const searchInput = document.getElementById("searchInput");
const courseFilter = document.getElementById("courseFilter");
const message = document.getElementById("formMessage");

let students = loadStudents();
let editingId = null;

// LOAD
function loadStudents() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        const parsed = data ? JSON.parse(data) : [];

        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error("Could not load student records:", error);
        return [];
    }
}

// SAVE
function saveStudents() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
        return true;
    } catch (error) {
        console.error("Could not save student records:", error);
        message.textContent = "Unable to save records in browser storage.";
        return false;
    }
}

// UPDATE DASHBOARD
function updateDashboard() {
    const stats = calculateStatistics(students);

    document.getElementById("totalStudents").textContent =
        stats.totalStudents;

    document.getElementById("totalCourses").textContent =
        stats.totalCourses;

    document.getElementById("totalSemesters").textContent =
        stats.totalSemesters;
}

// RENDER
function renderStudents() {
    table.innerHTML = "";

    let visibleStudents = searchStudents(
        students,
        searchInput.value
    );

    if (courseFilter.value !== "all") {
        visibleStudents = visibleStudents.filter(student =>
            student.course === courseFilter.value
        );
    }

    document.getElementById("emptyMessage").hidden =
        visibleStudents.length > 0;

    visibleStudents.forEach(function(student) {
        const row = document.createElement("tr");

        const values = [
            student.rollNumber,
            student.name,
            student.email,
            student.course,
            "Semester " + student.semester
        ];

        values.forEach(function(value) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        const actionCell = document.createElement("td");

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.className = "action-btn edit-btn";

        editButton.addEventListener("click", function() {
            editStudent(student.id);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "action-btn delete-btn";

        deleteButton.addEventListener("click", function() {
            deleteStudent(student.id);
        });

        actionCell.append(editButton, deleteButton);
        row.appendChild(actionCell);
        table.appendChild(row);
    });

    updateDashboard();
}

// ADD / UPDATE
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const student = {
        id: editingId || generateId(),
        name: document.getElementById("name").value.trim(),
        rollNumber: document.getElementById("rollNumber").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        course: document.getElementById("course").value,
        semester: document.getElementById("semester").value
    };

    const errors = validateStudent(student);

    if (errors.length > 0) {
        message.textContent = errors.join(" ");
        return;
    }

    const duplicateRoll = students.some(function(existing) {
        return (
            existing.rollNumber.toLowerCase() ===
                student.rollNumber.toLowerCase() &&
            existing.id !== editingId
        );
    });

    if (duplicateRoll) {
        message.textContent = "This roll number already exists.";
        return;
    }

    if (editingId) {
        students = students.map(function(existing) {
            return existing.id === editingId ? student : existing;
        });

        message.textContent = "Student updated successfully!";
    } else {
        students.push(student);
        message.textContent = "Student added successfully!";
    }

    if (!saveStudents()) {
        return;
    }

    resetForm();
    renderStudents();
});

// EDIT
function editStudent(id) {
    const student = students.find(item => item.id === id);

    if (!student) return;

    editingId = id;

    document.getElementById("name").value = student.name;
    document.getElementById("rollNumber").value = student.rollNumber;
    document.getElementById("email").value = student.email;
    document.getElementById("phone").value = student.phone;
    document.getElementById("course").value = student.course;
    document.getElementById("semester").value = student.semester;

    document.getElementById("formTitle").textContent = "Edit Student";
    document.getElementById("saveBtn").textContent = "Update Student";

    document.getElementById("studentForm").scrollIntoView({
        behavior: "smooth"
    });
}

// DELETE
function deleteStudent(id) {
    const confirmed = confirm(
        "Are you sure you want to delete this student?"
    );

    if (!confirmed) return;

    students = students.filter(student => student.id !== id);

    if (editingId === id) {
        resetForm();
    }

    if (!saveStudents()) return;

    message.textContent = "Student deleted successfully!";
    renderStudents();
}

// RESET FORM
function resetForm() {
    form.reset();
    editingId = null;

    document.getElementById("formTitle").textContent = "Add New Student";
    document.getElementById("saveBtn").textContent = "Save Student";
}

// SEARCH AND FILTER
searchInput.addEventListener("input", renderStudents);
courseFilter.addEventListener("change", renderStudents);

document.getElementById("cancelBtn").addEventListener("click", function() {
    resetForm();
    message.textContent = "Form cleared.";
});

document.getElementById("addStudentBtn").addEventListener("click", function() {
    document.getElementById("studentForm").scrollIntoView({
        behavior: "smooth"
    });

    document.getElementById("name").focus();
});

// INITIAL RENDER
renderStudents();
