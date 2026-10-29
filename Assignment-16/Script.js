
const marksForm = document.getElementById("marks-form");
const resultCard = document.getElementById("result-card");
const message = document.getElementById("message");

marksForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("student-name").value.trim();

    const mathsInput = document.getElementById("maths").value;
    const scienceInput = document.getElementById("science").value;
    const englishInput = document.getElementById("english").value;

    message.textContent = "";
    resultCard.hidden = true;

    if (name === "") {
        message.textContent = "Please enter the student's name.";
        return;
    }

    if (
        mathsInput.trim() === "" ||
        scienceInput.trim() === "" ||
        englishInput.trim() === ""
    ) {
        message.textContent = "Please enter marks for all three subjects.";
        return;
    }

    const maths = Number(mathsInput);
    const science = Number(scienceInput);
    const english = Number(englishInput);

    const marks = [maths, science, english];

    const invalidMarks = marks.some(function (mark) {
        return !Number.isFinite(mark) || mark < 0 || mark > 100;
    });

    if (invalidMarks) {
        message.textContent = "Each subject's marks must be between 0 and 100.";
        return;
    }

    const total = maths + science + english;
    const average = total / 3;
    const percentage = (total / 300) * 100;

    const passed = marks.every(function (mark) {
        return mark >= 40;
    });

    document.getElementById("result-name").textContent =
        "Student: " + name;

    document.getElementById("total-marks").textContent =
        total + " / 300";

    document.getElementById("average-marks").textContent =
        average.toFixed(2);

    document.getElementById("percentage").textContent =
        percentage.toFixed(2) + "%";

    document.getElementById("maths-result").textContent =
        "Mathematics: " + maths + " / 100";

    document.getElementById("science-result").textContent =
        "Science: " + science + " / 100";

    document.getElementById("english-result").textContent =
        "English: " + english + " / 100";

    const statusElement = document.getElementById("final-status");

    statusElement.textContent = passed ? "PASS" : "FAIL";
    statusElement.className = passed ? "pass" : "fail";

    resultCard.hidden = false;
});

marksForm.addEventListener("reset", function () {
    message.textContent = "";
    resultCard.hidden = true;
    document.getElementById("final-status").className = "";
});
