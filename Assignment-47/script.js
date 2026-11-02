import {
    saveData,
    getData,
    deleteData,
    clearStorage
} from "./storage.js";

const keyInput = document.getElementById("key");
const valueInput = document.getElementById("value");
const output = document.getElementById("output");

document.getElementById("saveButton").addEventListener("click", function () {
    const key = keyInput.value.trim();
    const value = valueInput.value;

    if (!key || !value.trim()) {
        output.textContent = "Enter both key and value.";
        return;
    }

    if (saveData(key, value)) {
        output.textContent = "Data saved successfully!";
    } else {
        output.textContent = "Unable to save data.";
    }
});

document.getElementById("getButton").addEventListener("click", function () {
    const key = keyInput.value.trim();

    if (!key) {
        output.textContent = "Enter a key first.";
        return;
    }

    const data = getData(key);

    output.textContent = data === null
        ? "No data found."
        : "Stored value: " + data;
});

document.getElementById("deleteButton").addEventListener("click", function () {
    const key = keyInput.value.trim();

    if (!key) {
        output.textContent = "Enter a key first.";
        return;
    }

    deleteData(key);
    output.textContent = "Data deleted.";
});

document.getElementById("clearButton").addEventListener("click", function () {
    clearStorage();
    output.textContent = "All local storage data cleared.";
});