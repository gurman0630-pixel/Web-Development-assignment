function runTests() {
    const results = [];

    function test(name, actual, expected) {
        const passed = JSON.stringify(actual) === JSON.stringify(expected);

        results.push({
            name: name,
            status: passed ? "PASS" : "FAIL"
        });
    }

    // Mathematical function tests
    test("Addition", add(10, 5), 15);
    test("Subtraction", subtract(10, 5), 5);
    test("Multiplication", multiply(10, 5), 50);
    test("Division", divide(10, 2), 5);
    test("Division by zero", divide(10, 0), null);
    test("Power", calculatePower(2, 3), 8);

    // Utility tests
    test(
        "Settings merge",
        mergeSettings({ theme: "light" }, { theme: "dark" }),
        { theme: "dark" }
    );

    test(
        "Shopping total",
        calculateTotal([
            { price: 100, quantity: 2 },
            { price: 50, quantity: 1 }
        ]),
        250
    );

    // Validation tests
    test("Required field", isRequired("Gurman"), true);
    test("Empty field", isRequired(""), false);
    test("Valid email", isValidEmail("test@gmail.com"), true);
    test("Invalid email", isValidEmail("testgmail.com"), false);
    test("Valid password", isValidPassword("password123"), true);
    test("Short password", isValidPassword("123"), false);

    const output = document.getElementById("testResults");

    output.innerHTML = results.map(result => `
        <div class="test ${result.status.toLowerCase()}">
            <span>${result.name}</span>
            <strong>${result.status}</strong>
        </div>
    `).join("");

    const passed = results.filter(r => r.status === "PASS").length;

    output.innerHTML += `
        <h3>${passed} / ${results.length} tests passed</h3>
    `;
}