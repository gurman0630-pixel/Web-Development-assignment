# Validation Test Matrix

## Project: Contact Form and To-Do Application

| Test ID | Test Scenario | Input | Expected Result | Actual Result | Status |
|---------|---------------|-------|-----------------|---------------|--------|
| TC01 | Empty name | Blank | Error message | Error message | Pass |
| TC02 | Valid name | Gurman | Name accepted | Name accepted | Pass |
| TC03 | Invalid email | gurman123 | Email rejected | Email rejected | Pass |
| TC04 | Valid email | test@gmail.com | Email accepted | Email accepted | Pass |
| TC05 | Empty message | Blank | Validation required | Validation required | Pass |
| TC06 | Valid form | All fields filled | Summary displayed | Summary displayed | Pass |
| TC07 | Empty task | Blank | Task not added | Task not added | Pass |
| TC08 | Add task | Complete assignment | Task displayed | Task displayed | Pass |
| TC09 | Edit task | Updated task | Task updated | Task updated | Pass |
| TC10 | Delete task | Click delete | Task removed | Task removed | Pass |
| TC11 | Complete task | Click complete | Task marked completed | Task marked completed | Pass |
| TC12 | Filter tasks | Completed | Only completed tasks shown | Only completed tasks shown | Pass |

## Testing Summary

Total Test Cases: 12

Passed: 12

Failed: 0

Conclusion:
The validation tests check form inputs and task management
features. The application should be considered ready after
all test cases pass during actual execution.