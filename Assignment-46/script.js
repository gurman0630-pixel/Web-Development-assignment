const theme = document.getElementById("theme");
const fontSize = document.getElementById("fontSize");
const resetButton = document.getElementById("resetButton");
const message = document.getElementById("message");

function loadSettings() {
    const savedTheme = localStorage.getItem("theme") || "light";
    const savedFontSize = localStorage.getItem("fontSize") || "16";

    theme.value = savedTheme;
    fontSize.value = savedFontSize;

    applySettings();
}

function applySettings() {
    document.body.classList.toggle("dark", theme.value === "dark");

    document.body.style.fontSize = fontSize.value + "px";
}

function saveSettings() {
    localStorage.setItem("theme", theme.value);
    localStorage.setItem("fontSize", fontSize.value);

    applySettings();

    message.textContent = "Settings saved successfully!";
}

theme.addEventListener("change", saveSettings);
fontSize.addEventListener("change", saveSettings);

resetButton.addEventListener("click", function () {
    localStorage.removeItem("theme");
    localStorage.removeItem("fontSize");

    theme.value = "light";
    fontSize.value = "16";

    applySettings();

    message.textContent = "Settings reset successfully!";
});

loadSettings();