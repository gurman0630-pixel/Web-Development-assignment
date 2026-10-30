
function printNumbers() {
    let output = "";

    for (let i = 1; i <= 10; i++) {
        output += i + " ";
    }

    document.getElementById("numbers-output").textContent = output.trim();
}

function calculateSum() {
    const input = document.getElementById("sum-number");
    const number = Number(input.value);
    const output = document.getElementById("sum-output");

    if (input.value === "" || !Number.isInteger(number) || number < 1 || number > 1000) {
        output.textContent = "Enter a whole number from 1 to 1000.";
        return;
    }

    let sum = 0;

    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    output.textContent = "Sum from 1 to " + number + " = " + sum;
}

function generateTable() {
    const input = document.getElementById("table-number");
    const number = Number(input.value);
    const output = document.getElementById("table-output");

    if (input.value === "" || !Number.isInteger(number) || number < 1 || number > 100) {
        output.textContent = "Enter a whole number from 1 to 100.";
        return;
    }

    let table = "";

    for (let i = 1; i <= 10; i++) {
        table += number + " x " + i + " = " + (number * i) + "\n";
    }

    output.textContent = table.trim();
}

function printEvenNumbers() {
    const input = document.getElementById("even-number");
    const number = Number(input.value);
    const output = document.getElementById("even-output");

    if (input.value === "" || !Number.isInteger(number) || number < 1 || number > 1000) {
        output.textContent = "Enter a whole number from 1 to 1000.";
        return;
    }

    let evenNumbers = [];

    for (let i = 2; i <= number; i += 2) {
        evenNumbers.push(i);
    }

    output.textContent = evenNumbers.length
        ? evenNumbers.join(", ")
        : "No even numbers found.";
}

function calculateFactorial() {
    const input = document.getElementById("factorial-number");
    const number = Number(input.value);
    const output = document.getElementById("factorial-output");

    if (input.value === "" || !Number.isInteger(number) || number < 0 || number > 18) {
        output.textContent = "Enter a whole number from 0 to 18.";
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    output.textContent = number + "! = " + factorial;
}

function showDebugSolution() {
    let output = "";

    for (let i = 1; i <= 5; i++) {
        output += i + " ";
    }

    document.getElementById("debug-output").textContent =
        "Corrected loop output: " + output.trim() +
        "\nFix: change i < 5 to i <= 5.";
}
