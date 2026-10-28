
const studentName = "Gurman Singh";          // String
const age = 19;                              // Number
const course = "BCA Artificial Intelligence"; // String
const university = "Invertis University";    // String

const skills = ["Python", "C", "HTML", "CSS"]; // Array
const isPresent = true;                        // Boolean
const isProfileActive = true;                  // Boolean
let futureGoal;                                 // Undefined

const student = {
    name: studentName,
    age: age,
    course: course,
    university: university
}; // Object

document.getElementById("avatar").textContent = "GS";
document.getElementById("student-name").textContent = student.name;
document.getElementById("student-course").textContent = student.course;
document.getElementById("age").textContent = student.age;
document.getElementById("university").textContent = student.university;
document.getElementById("skills").textContent = skills.join(", ");

document.getElementById("attendance").textContent =
    isPresent ? "Present" : "Absent";

document.getElementById("active").textContent =
    isProfileActive ? "Yes" : "No";

document.getElementById("learning").textContent =
    futureGoal ?? "Webdevelopment";

console.log("Student Profile:", student);
console.log("Skills:", skills);
console.log("Age data type:", typeof age);
console.log("Name data type:", typeof studentName);
console.log("Attendance data type:", typeof isPresent);
console.log("Future goal:", futureGoal);
