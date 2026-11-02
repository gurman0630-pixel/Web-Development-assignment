 Assignment 45: Comparison of localStorage and sessionStorage
1. Introduction

Web Storage is a browser feature that allows websites to store data on a user's device. JavaScript provides two main Web Storage methods: localStorage and sessionStorage.

 2. localStorage

localStorage stores data in the browser without an automatic expiration time. The stored data remains available even after closing and reopening the browser, until it is manually cleared or removed.

**Uses:**
- Saving user preferences.
- Remembering theme settings.
- Saving to-do lists.
- Storing application settings.

 3. sessionStorage

sessionStorage stores data for the duration of a browser tab's page session. The data is normally removed when that tab or window session ends.

Uses:
- Temporary form information.
- Temporary user selections.
- Multi-step form progress.
- Session-specific interface data.

 4. Comparison Table

| Feature | localStorage | sessionStorage |
|---|---|---|
| Storage duration | Persistent | Current page session |
| Data after closing tab | Remains | Normally removed |
| Capacity | Browser-dependent, commonly around 5 MiB per origin | Browser-dependent, commonly around 5 MiB per origin |
| JavaScript API | localStorage | sessionStorage |
| Data format | Strings | Strings |
| Scope | Same origin | Same origin and page session |
| Common use | User preferences | Temporary data |

 5. JavaScript Examples

 localStorage

javascript
localStorage.setItem("username", "Gurman");

const username = localStorage.getItem("username");

console.log(username);


 sessionStorage

javascript
sessionStorage.setItem("username", "Gurman");

const username = sessionStorage.getItem("username");

console.log(username);


 6. Important Methods

- setItem() – Stores data.
- getItem() – Retrieves stored data.
- removeItem() – Removes a specific item.
- clear() – Removes all items for that storage area.

 7. Conclusion

Both localStorage and sessionStorage are useful browser storage mechanisms. localStorage is suitable for information that needs to persist across browser sessions, whereas sessionStorage is suitable for temporary data associated with a page session.