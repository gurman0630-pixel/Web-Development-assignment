const answers = {
    1: "Gurman",
    2: "ReferenceError",
    3: "undefined",
    4: "ReferenceError"
};

const explanations = {
    1: "The variable name is declared globally, so the function can access it.",
    2: "The variable age is declared inside the function and cannot be accessed outside it.",
    3: "Variables declared with var are hoisted and initialized with undefined.",
    4: "Variables declared with let cannot be accessed before initialization because of the temporal dead zone."
};

function checkAnswer(number) {
    const userAnswer = document
        .getElementById("answer" + number)
        .value.trim();

    const feedback = document.getElementById("feedback" + number);

    if (userAnswer.toLowerCase() === answers[number].toLowerCase()) {
        feedback.textContent = "Correct prediction!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Try again!";
        feedback.style.color = "red";
    }
}

function showExplanation(number) {
    document.getElementById("explanation" + number).textContent =
        explanations[number];
}