function cleanSpaces(text) {
    return text.trim().replace(/\s+/g, " ");
}

function cleanName(name) {
    return cleanSpaces(name)
        .toLowerCase()
        .replace(/\b\w/g, letter => letter.toUpperCase());
}

function cleanEmail(email) {
    return cleanSpaces(email).toLowerCase();
}

function cleanPhone(phone) {
    return phone.replace(/\D/g, "");
}

function cleanMessage(message) {
    return cleanSpaces(message);
}

document.getElementById("cleanForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    document.getElementById("cleanedName").textContent =
        "Name: " + cleanName(name);

    document.getElementById("cleanedEmail").textContent =
        "Email: " + cleanEmail(email);

    document.getElementById("cleanedPhone").textContent =
        "Phone: " + cleanPhone(phone);

    document.getElementById("cleanedMessage").textContent =
        "Message: " + cleanMessage(message);
});