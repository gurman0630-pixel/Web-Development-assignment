let profile = {};

function generateProfile() {
    const name = document.getElementById("name").value.trim();
    const course = document.getElementById("course").value.trim();
    const university = document.getElementById("university").value.trim();
    const skillsInput = document.getElementById("skills").value;
    const email = document.getElementById("email").value.trim();

    if (!name || !course || !university || !skillsInput || !email) {
        alert("Please fill in all fields.");
        return;
    }

    profile = {
        name,
        course,
        university,
        skills: skillsInput.split(",")
            .map(skill => skill.trim())
            .filter(Boolean),
        email
    };

    displayProfile();
}

function displayProfile() {
    const container = document.getElementById("profile");

    container.innerHTML = `
        <div class="profile-card">
            <h2>${profile.name}</h2>
            <p><strong>Course:</strong> ${profile.course}</p>
            <p><strong>University:</strong> ${profile.university}</p>
            <p><strong>Email:</strong> ${profile.email}</p>

            <h3>Skills</h3>
            <div class="skills">
                ${profile.skills.map(skill =>
                    `<span>${skill}</span>`
                ).join("")}
            </div>
        </div>
    `;

    const info = {
        keys: Object.keys(profile),
        values: Object.values(profile),
        entries: Object.entries(profile),
        hasSkills: Object.hasOwn(profile, "skills"),
        propertyCount: Object.keys(profile).length
    };

    document.getElementById("objectInfo").textContent =
        JSON.stringify(info, null, 2);

    console.log("Profile:", profile);
    console.log("Keys:", Object.keys(profile));
    console.log("Values:", Object.values(profile));
    console.log("Entries:", Object.entries(profile));
}