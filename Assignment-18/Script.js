// Bug 1: Incorrect loop condition
function printNumbers() {
    console.log("Numbers from 1 to 5:");

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}


// Bug 2: Incorrect calculation
function calculateSum() {
    let sum = 0;

    for (let i = 1; i <= 5; i++) {
        sum += i;
    }

    console.log("Sum:", sum);
}


// Bug 3: Incorrect variable name
function greetStudent() {
    let studentName = "Gurman";

    console.log("Hello " + studentName);
}


// Bug 4: Function is not called
function showMessage() {
    console.log("JavaScript debugging practice!");
}


// Run all functions
printNumbers();
calculateSum();
greetStudent();
showMessage(); 
