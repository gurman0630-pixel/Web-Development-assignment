function calculate(operation) {
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);

    if (
        document.getElementById("num1").value === "" ||
        document.getElementById("num2").value === ""
    ) {
        document.getElementById("result").textContent =
            "Please enter both numbers";
        return;
    }

    let answer;

    switch (operation) {
        case "add":
            answer = add(a, b);
            break;

        case "subtract":
            answer = subtract(a, b);
            break;

        case "multiply":
            answer = multiply(a, b);
            break;

        case "divide":
            answer = divide(a, b);
            break;

        case "power":
            answer = calculatePower(a, b);
            break;
    }

    document.getElementById("result").textContent =
        "Result: " + answer;
}