# ASSIGNMENT 59
## Solutions with Dry Runs and Test Cases

**Project:** Student Management System  
**Subject:** Web Development  
**Language:** JavaScript

### Problem 1: Search Student
**Aim:** Search for a student using their name or roll number.

**Solution:**
function searchStudent(students, query) {
    const searchText = query.trim().toLowerCase();

    return students.filter(student =>
        student.name.toLowerCase().includes(searchText) ||
        student.rollNumber.toLowerCase().includes(searchText)
    );
}

const students = [
    { name: "Rahul Sharma", rollNumber: "BCA001" },
    { name: "Priya Verma", rollNumber: "BCA002" },
    { name: "Aman Singh", rollNumber: "BBA003" }
];

console.log(searchStudent(students, "rahul"));

**Sample Output:**
[ { name: 'Rahul Sharma', rollNumber: 'BCA001' } ]

**Dry Run:**
A dry run means manually tracing the execution of your code.

For Problem 1:
Step	Operation	Result
1	Query entered	rahul
2	Convert query to lowercase	rahul
3	Check Rahul Sharma	Match
4	Check Priya Verma	No match
5	Check Aman Singh	No match
6	Return matching student	Rahul Sharma

In simple words: The function checks each student's name and roll number. If either matches the search text, that student is included in the result.

**Test Cases:**
Test cases are different inputs used to check whether your program works correctly.
Test ID	Input	Expected output
TC01	rahul	Rahul Sharma
TC02	BCA002	Priya Verma
TC03	aman	Aman Singh
TC04	unknown	Empty array
TC05	Empty string	All students

For TC05, the empty search string matches all students because every string contains an empty string.

### Problem 2: Calculate Student Statistics
**Aim:** Calculate total students, unique courses and unique semesters.

**Solution:**
function calculateStatistics(students) {
    return {
        totalStudents: students.length,

        totalCourses: new Set(
            students.map(student => student.course)
        ).size,

        totalSemesters: new Set(
            students.map(student => student.semester)
        ).size
    };
}

**Sample Output:**
{
    totalStudents: 3,
    totalCourses: 2,
    totalSemesters: 2
}

**Dry Run:**
Input:
Student	Course	Semester
Rahul	BCA	3
Priya	BBA	2
Aman	BCA	3

- Total students = 3
- Unique courses = BCA, BBA = 2
- Unique semesters = 3, 2 = 2

**Test Cases:**
Test case	Expected result
4 student records	Total students: 4
Courses: BCA, BBA, BCA, BCom	Unique courses: 3
Semesters: 1, 2, 1, 3	Unique semesters: 3
Empty student array []	Total: 0, courses: 0, semesters: 0
All students in BCA, semester 1	Unique courses: 1, semesters: 1

---

### Problem 3: Delete Student
**Aim:** Remove a student using their unique ID.

**Solution:**
function deleteStudent(students, id) {
    return students.filter(student => student.id !== id);
}

**Sample Output:**
Student deleted successfully!

Remaining Students:
[
  { id: 1, name: "Rahul", rollNumber: "BCA001" },
  { id: 3, name: "Aman", rollNumber: "BCA003" }
]

**Dry Run:**
Input IDs: S101, S102, S103

Delete ID: S102
Student ID	Condition	Result
S101	Not equal to S102	Retained
S102	Equal to S102	Removed
S103	Not equal to S102	Retained

Expected result: S101, S103.

**Test Cases:**
Input IDs: S101, S102, S103

Delete ID: S102
Student ID	Condition	Result
S101	Not equal to S102	Retained
S102	Equal to S102	Removed
S103	Not equal to S102	Retained

Expected result: S101, S103.

---

### Conclusion
Through this assignment, I practiced JavaScript functions, arrays, objects, filtering and problem-solving. Dry runs helped me understand program execution, while test cases helped verify the correctness of the solutions.