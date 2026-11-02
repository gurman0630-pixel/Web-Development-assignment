// Save data
export function saveData(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        console.error("Storage save failed:", error);
        return false;
    }
}

// Retrieve data
export function getData(key) {
    try {
        const data = localStorage.getItem(key);

        if (data === null) {
            return null;
        }

        return JSON.parse(data);
    } catch (error) {
        console.error("Storage read failed:", error);
        return null;
    }
}

// Delete specific data
export function deleteData(key) {
    try {
        localStorage.removeItem(key);
        return true;
    } catch (error) {
        console.error("Storage delete failed:", error);
        return false;
    }
}

// Clear all data
export function clearStorage() {
    try {
        localStorage.clear();
        return true;
    } catch (error) {
        console.error("Storage clear failed:", error);
        return false;
    }
}