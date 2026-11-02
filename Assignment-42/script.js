const contactForm = document.getElementById("contactForm");
const summary = document.getElementById("summary");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const userMessage = document.getElementById("userMessage").value.trim();

    if (!name || !email || !subject || !userMessage) {
        alert("Please complete all fields.");
        return;
    }

    document.getElementById("summaryName").textContent =
        "Name: " + name;

    document.getElementById("summaryEmail").textContent =
        "Email: " + email;

    document.getElementById("summarySubject").textContent =
        "Subject: " + subject;

    document.getElementById("summaryMessage").textContent =
        "Message: " + userMessage;

    summary.hidden = false;

    contactForm.reset();
});