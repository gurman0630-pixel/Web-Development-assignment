# ASSIGNMENT 57: STUDENT MANAGEMENT SYSTEM – BUG LOG

**Project:** Student Management System  
**Version:** v1.0.0-rc1

## 1. Introduction

A bug log is a document used to record errors or unexpected behaviour found during software testing. It helps developers identify problems, understand their causes, apply fixes and verify that the issues have been resolved.

## 2. Bug Log

| Bug ID | Issue | Possible Cause | Fix Applied | Verification |
|---|---|---|---|---|
| BUG01 | Student records disappear after refresh | Data not saved to Local Storage | Save updated records using JSON.stringify() | Refresh and check saved records |
| BUG02 | Duplicate roll numbers accepted | No duplicate validation | Check existing roll numbers before adding | Try adding the same roll number twice |
| BUG03 | Dashboard count does not update | Statistics not recalculated | Call updateDashboard() after changes | Add and delete students |
| BUG04 | Search does not find matching students | Search comparison is case-sensitive | Convert search text to lowercase | Search using different letter cases |
| BUG05 | Long tables overflow on mobile | Missing responsive table wrapper | Use overflow-x: auto | Test at mobile width |
| BUG06 | Empty student records accepted | Missing form validation | Validate required fields | Submit an empty form |

## 3. Bug Severity

- **High:** Important functionality does not work.
- **Medium:** A feature works incorrectly in certain conditions.
- **Low:** Minor visual or usability issue.

## 4. Bug Verification Process

1. Reproduce the reported issue.
2. Identify its possible cause.
3. Apply the correction.
4. Repeat the original test.
5. Confirm that the issue is resolved.
6. Record the verification result.

## 5. Conclusion

The bug log provides a systematic way to track and resolve software issues. It improves application reliability and helps ensure that the Student Management System is ready for release.

**Note:** The listed bugs are potential issues to check, not claims that they were actually found. Update the log with your own observed bugs and fixes.