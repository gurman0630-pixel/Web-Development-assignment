const statusButton = document.getElementById("statusButton");
const statusText = document.getElementById("statusText");
const statusIndicator = document.getElementById("statusIndicator");

const themeButton = document.getElementById("themeButton");
const detailsButton = document.getElementById("detailsButton");
const profileDetails = document.getElementById("profileDetails");

let isOnline = false;
let isDarkMode = false;
let detailsVisible = false;


// Toggle online/offline status
statusButton.addEventListener("click", function () {
    isOnline = !isOnline;

    if (isOnline) {
        statusText.textContent = "Status: Online";
        statusIndicator.classList.replace("offline", "online");
        statusButton.textContent = "Go Offline";
    } else {
        statusText.textContent = "Status: Offline";
        statusIndicator.classList.replace("online", "offline");
        statusButton.textContent = "Go Online";
    }

    statusButton.setAttribute("aria-pressed", String(isOnline));
});


// Toggle dark mode
themeButton.addEventListener("click", function () {
    isDarkMode = !isDarkMode;

    document.body.classList.toggle("dark-mode", isDarkMode);

    themeButton.textContent = isDarkMode
        ? "Disable Dark Mode"
        : "Enable Dark Mode";

    themeButton.setAttribute("aria-pressed", String(isDarkMode));
});


// Show or hide profile details
detailsButton.addEventListener("click", function () {
    detailsVisible = !detailsVisible;

    profileDetails.hidden = !detailsVisible;

    detailsButton.textContent = detailsVisible
        ? "Hide Details"
        : "Show Details";

    detailsButton.setAttribute(
        "aria-expanded",
        String(detailsVisible)
    );
});