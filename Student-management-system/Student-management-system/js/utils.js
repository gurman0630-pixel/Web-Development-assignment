
export function generateId() {
    return "student-" + Date.now() + "-" +
        Math.random().toString(36).slice(2, 8);
}

export function validateStudent(student) {
    const errors = [];

    if (!student.name || student.name.trim().length < 2) {
        errors.push("Name must contain at least 2 characters.");
    }

    if (!student.rollNumber || !student.rollNumber.trim()) {
        errors.push("Roll number is required.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(student.email)) {
        errors.push("Enter a valid email address.");
    }

    if (!/^[0-9]{10}$/.test(student.phone)) {
        errors.push("Phone number must contain 10 digits.");
    }

    if (!student.course) {
        errors.push("Select a course.");
    }

    const semester = Number(student.semester);

    if (!Number.isInteger(semester) || semester < 1 || semester > 6) {
        errors.push("Select a valid semester.");
    }

    return errors;
}

export function searchStudents(students, searchText) {
    const query = searchText.trim().toLowerCase();

    return students.filter(function(student) {
        return (
            student.name.toLowerCase().includes(query) ||
            student.rollNumber.toLowerCase().includes(query)
        );
    });
}

export function getUniqueCourses(students) {
    return [...new Set(students.map(student => student.course))];
}

export function calculateStatistics(students) {
    return {
        totalStudents: students.length,
        totalCourses: getUniqueCourses(students).length,
        totalSemesters: new Set(
            students.map(student => student.semester)
        ).size
    };
}
