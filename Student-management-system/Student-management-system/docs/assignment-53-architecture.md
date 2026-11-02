# ASSIGNMENT 53: ARCHITECTURE NOTES

## 1. Project Architecture

The Student Management System follows a simple modular front-end architecture.

### Presentation Layer
- index.html provides the structure.
- style.css controls the appearance and responsive layout.

### Application Layer
- app.js manages application logic.
- Handles adding, editing, deleting, searching and filtering students.
- Updates dashboard statistics and renders student records.

### Utility Layer
- utils.js contains reusable helper functions.
- Handles input validation, ID generation and text formatting.

### Storage Layer
- Browser localStorage stores student records.
- Records are loaded when the application starts.
- Updated records are saved after each operation.

## 2. Data Structure

Each student is stored as a JavaScript object.

Example:

```javascript
{
    id: "student-101",
    name: "Rahul Sharma",
    rollNumber: "BCA001",
    email: "rahul@gmail.com",
    phone: "9876543210",
    course: "BCA",
    semester: "3"
}
```

## 3. Application Flow

1. Application starts.
2. Student records are loaded from localStorage.
3. Dashboard statistics are calculated.
4. Student records are rendered.
5. User performs an operation.
6. Data is updated and validated.
7. Updated data is saved.
8. Interface is rendered again.

## 4. Benefits of Modular Architecture

- Code is easier to understand.
- Functions can be reused.
- Debugging becomes easier.
- Different responsibilities remain separated.
- Future features can be added more easily.

## 5. Limitations

This project uses browser storage instead of a server database. Records are available in the browser profile where they were saved. It is not a secure multi-user institutional database.