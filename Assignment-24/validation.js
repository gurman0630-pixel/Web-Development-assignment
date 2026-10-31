function isRequired(value) {
    return value !== null &&
           value !== undefined &&
           String(value).trim() !== "";
}

function isValidEmail(email) {
    if (!isRequired(email)) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
    if (!isRequired(password)) return false;
    return password.length >= 8;
}