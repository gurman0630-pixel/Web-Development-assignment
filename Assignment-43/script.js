
const testCases = [
    {
        id: "TC01",
        scenario: "Empty name validation",
        input: "Blank name",
        expected: "Name should be required"
    },
    {
        id: "TC02",
        scenario: "Valid name",
        input: "Gurman",
        expected: "Name should be accepted"
    },
    {
        id: "TC03",
        scenario: "Invalid email",
        input: "gurman123",
        expected: "Email should be rejected"
    },
    {
        id: "TC04",
        scenario: "Valid email",
        input: "test@gmail.com",
        expected: "Email should be accepted"
    },
    {
        id: "TC05",
        scenario: "Empty contact message",
        input: "Blank message",
        expected: "Message should be required"
    },
    {
        id: "TC06",
        scenario: "Valid contact form",
        input: "All fields completed",
        expected: "Submission summary displayed"
    },
    {
        id: "TC07",
        scenario: "Empty task",
        input: "Blank task",
        expected: "Task should not be added"
    },
    {
        id: "TC08",
        scenario: "Add task",
        input: "Complete assignment",
        expected: "Task should appear"
    },
    {
        id: "TC09",
        scenario: "Edit task",
        input: "Updated task name",
        expected: "Task should be updated"
    },
    {
        id: "TC10",
        scenario: "Delete task",
        input: "Click delete",
        expected: "Task should be removed"
    },
    {
        id: "TC11",
        scenario: "Complete task",
        input: "Click complete",
        expected: "Task should be marked completed"
    },
    {
        id: "TC12",
        scenario: "Filter tasks",
        input: "Select completed",
        expected: "Only completed tasks displayed"
    }
];

const testTable = document.getElementById("testTable");
const notes = document.getElementById("notes");
const message = document.getElementById("message");

function displayTests() {
    testTable.innerHTML = "";

    testCases.forEach(function (test, index) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${test.id}</td>
            <td>${test.scenario}</td>
            <td>${test.input}</td>
            <td>${test.expected}</td>
            <td>
                <input
                    type="text"
                    class="actual"
                    data-index="${index}"
                    placeholder="Enter actual result"
                >
            </td>
            <td>
                <select class="status" data-index="${index}">
                    <option value="Not Tested">Not Tested</option>
                    <option value="Pass">Pass</option>
                    <option value="Fail">Fail</option>
                </select>
            </td>
        `;

        testTable.appendChild(row);
    });

    updateSummary();
}

function updateSummary() {
    const statuses = document.querySelectorAll(".status");

    let passedCount = 0;
    let failedCount = 0;

    statuses.forEach(function (status) {
        if (status.value === "Pass") {
            passedCount++;
        } else if (status.value === "Fail") {
            failedCount++;
        }
    });

    document.getElementById("total").textContent = testCases.length;
    document.getElementById("passed").textContent = passedCount;
    document.getElementById("failed").textContent = failedCount;
}

testTable.addEventListener("change", function (event) {
    if (event.target.classList.contains("status")) {
        updateSummary();
    }
});

document.getElementById("saveButton").addEventListener("click", function () {
    const actualResults = document.querySelectorAll(".actual");
    const statuses = document.querySelectorAll(".status");

    const report = testCases.map(function (test, index) {
        return {
            ...test,
            actual: actualResults[index].value,
            status: statuses[index].value
        };
    });

    const documentation = {
        tests: report,
        observations: notes.value
    };

    localStorage.setItem(
        "validationReport",
        JSON.stringify(documentation)
    );

    message.textContent = "Test report saved successfully!";
});

displayTests();
