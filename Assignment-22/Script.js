const form = document.getElementById("registrationForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    const errors = [];

    if (!isRequired(name)) errors.push("Name is required.");
    if (!isValidEmail(email)) errors.push("Enter a valid email.");
    if (!isValidAge(age)) errors.push("Age must be between 18 and 100.");
    if (!isValidPassword(password)) errors.push("Password must have at least 8 characters.");
    if (!isValidPhone(phone)) errors.push("Phone must contain 10 digits.");

    if (errors.length > 0) {
        result.innerHTML = errors.map(error =>
            `<p class="error">${error}</p>`
        ).join("");
        return;
    }

    result.textContent = "Registration details are valid!";
    result.className = "success";
});