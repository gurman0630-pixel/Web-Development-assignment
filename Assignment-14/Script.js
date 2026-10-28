
console.log("Codewave website loaded!");

const menuToggle = document.getElementById("menu-toggle");
const landingMenu = document.getElementById("landing-menu");
const startButton = document.getElementById("start-button");
const contactButton = document.getElementById("contact-button");

// Open and close the mobile navigation
menuToggle.addEventListener("click", function () {
    const isOpen = landingMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "Close Menu" : "Menu";
});

// Get Started button
startButton.addEventListener("click", function () {
    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });
});

// Contact button
contactButton.addEventListener("click", function () {
    alert("Thanks for your interest in Codewave !");
});

// Close the mobile menu after selecting a link
const menuLinks = landingMenu.querySelectorAll("a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        landingMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "Menu";
    });
});
