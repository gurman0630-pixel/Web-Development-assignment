# Assignment 49: Persistent To-Do App Testing Checklist

## Project Information

**Project Name:** Persistent To-Do Application  
**Technology:** HTML, CSS, JavaScript and localStorage

## Testing Checklist

| Test ID | Test Scenario | Expected Result | Status |
|---|---|---|---|
| TC01 | Add a new task | Task appears in list | Pending |
| TC02 | Add an empty task | Task is rejected | Pending |
| TC03 | Edit a task | Task text is updated | Pending |
| TC04 | Complete a task | Task is marked completed | Pending |
| TC05 | Undo completed task | Task becomes pending | Pending |
| TC06 | Delete a task | Task is removed | Pending |
| TC07 | Select All filter | All tasks appear | Pending |
| TC08 | Select Pending filter | Only pending tasks appear | Pending |
| TC09 | Select Completed filter | Only completed tasks appear | Pending |
| TC10 | Refresh the browser | Previously saved tasks appear | Pending |
| TC11 | Add another task after refresh | New task is saved | Pending |
| TC12 | Check task counter | Counts are updated correctly | Pending |

## Testing Procedure

1. Open the application using VS Code Live Server.
2. Add multiple tasks.
3. Edit one task.
4. Mark another task as completed.
5. Test the Undo and Delete features.
6. Test all three filters.
7. Refresh the browser.
8. Verify that saved tasks are restored.

## Conclusion

The persistent To-Do application uses localStorage to preserve tasks between browser sessions. It supports adding, editing, completing, filtering and deleting tasks.

Testing verifies that task management and data persistence work as expected.

**Final test results:** Update the status column after executing each test.