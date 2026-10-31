// Problem 1: Reverse a string
function reverseText() {
    const text = document.getElementById("reverseInput").value;

    const reversed = text.split("").reverse().join("");

    document.getElementById("reverseResult").textContent =
        "Reversed: " + reversed;
}


// Problem 2: Find the largest number
function findLargest() {
    const input = document.getElementById("numbersInput").value;

    const numbers = input.split(",").map(Number);

    if (
        input.trim() === "" ||
        numbers.some(number => !Number.isFinite(number))
    ) {
        document.getElementById("largestResult").textContent =
            "Please enter valid comma-separated numbers.";
        return;
    }

    const largest = Math.max(...numbers);

    document.getElementById("largestResult").textContent =
        "Largest number: " + largest;
}


// Problem 3: Count vowels
function countVowels() {
    const text = document.getElementById("vowelInput").value;

    const matches = text.match(/[aeiou]/gi);

    const count = matches ? matches.length : 0;

    document.getElementById("vowelResult").textContent =
        "Total vowels: " + count;
}


// Problem 4: Remove duplicates
function removeDuplicates() {
    const input = document.getElementById("duplicateInput").value;

    if (input.trim() === "") {
        document.getElementById("duplicateResult").textContent =
            "Please enter some numbers.";
        return;
    }

    const numbers = input.split(",").map(Number);

    if (numbers.some(number => !Number.isFinite(number))) {
        document.getElementById("duplicateResult").textContent =
            "Please enter valid numbers.";
        return;
    }

    const uniqueNumbers = [...new Set(numbers)];

    document.getElementById("duplicateResult").textContent =
        "Unique numbers: " + uniqueNumbers.join(", ");
}


// Problem 5: Check palindrome
function checkPalindrome() {
    const text = document.getElementById("palindromeInput")
        .value.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (text === "") {
        document.getElementById("palindromeResult").textContent =
            "Please enter some text.";
        return;
    }

    const reversed = text.split("").reverse().join("");

    document.getElementById("palindromeResult").textContent =
        text === reversed
            ? "It is a palindrome!"
            : "It is not a palindrome.";
}