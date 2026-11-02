const heading = document.getElementById("heading");
const studentSection = document.getElementById("studentSection");
const studentCard = document.getElementById("studentCard");
const studentName = document.getElementById("studentName");
const studentCourse = document.getElementById("studentCourse");
const studentUniversity = document.getElementById("studentUniversity");
const results = document.getElementById("results");

function analyzeRelationships() {
    results.innerHTML = "";

    const relationships = [
        {
            label: "Parent of Student Name",
            value: studentName.parentElement.id
        },
        {
            label: "Children of Student Card",
            value: Array.from(studentCard.children)
                .map(element => element.tagName)
                .join(", ")
        },
        {
            label: "First Child of Student Card",
            value: studentCard.firstElementChild.textContent
        },
        {
            label: "Last Child of Student Card",
            value: studentCard.lastElementChild.textContent
        },
        {
            label: "Next Sibling of Student Name",
            value: studentName.nextElementSibling.id
        },
        {
            label: "Previous Sibling of Student University",
            value: studentUniversity.previousElementSibling.id
        },
        {
            label: "Parent of Student Section",
            value: studentSection.parentElement.id
        },
        {
            label: "Number of Children in Student Card",
            value: studentCard.children.length
        }
    ];

    relationships.forEach(item => {
        const div = document.createElement("div");
        div.className = "result-item";

        const label = document.createElement("strong");
        label.textContent = item.label;

        const value = document.createElement("p");
        value.textContent = item.value;

        div.append(label, value);
        results.appendChild(div);
    });
}

document.getElementById("analyzeButton")
    .addEventListener("click", analyzeRelationships);