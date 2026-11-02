// Save tasks
export function saveTasks(tasks) {
    try {
        localStorage.setItem("todoTasks", JSON.stringify(tasks));
        return true;
    } catch (error) {
        console.error("Unable to save tasks:", error);
        return false;
    }
}

// Load tasks
export function loadTasks() {
    try {
        const data = localStorage.getItem("todoTasks");

        if (data === null) {
            return [];
        }

        const tasks = JSON.parse(data);

        if (!Array.isArray(tasks)) {
            return [];
        }

        return tasks;
    } catch (error) {
        console.error("Unable to load tasks:", error);
        return [];
    }
}