const nameInput = document.getElementById("nameInput");
const courseInput = document.getElementById("courseInput");
const bioInput = document.getElementById("bioInput");

const displayName = document.getElementById("displayName");
const displayCourse = document.getElementById("displayCourse");
const displayBio = document.getElementById("displayBio");

const message = document.getElementById("message");
const updateButton = document.getElementById("updateButton");

function updateProfile() {
    const name = nameInput.value.trim();
    const course = courseInput.value.trim();
    const bio = bioInput.value.trim();

    if (!name || !course || !bio) {
        message.textContent = "Please fill in all fields.";
        message.className = "error";
        return;
    }

    // Use textContent instead of innerHTML.
    displayName.textContent = name;
    displayCourse.textContent = course;
    displayBio.textContent = bio;

    message.textContent = "Profile updated successfully!";
    message.className = "success";

    nameInput.value = "";
    courseInput.value = "";
    bioInput.value = "";
}

updateButton.addEventListener("click", updateProfile);