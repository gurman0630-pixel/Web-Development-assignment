function isRequired(value) {
    if (value === null || value === undefined) {
        return false;
    }

    return String(value).trim() !== "";
}

function isValidEmail(email) {
    if (!isRequired(email)) return false;

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidAge(age) {
    if (!isRequired(age)) return false;

    const number = Number(age);

    if (!Number.isFinite(number)) return false;

    return number >= 18 && number <= 100;
}

function isValidPassword(password) {
    if (!isRequired(password)) return false;

    return password.length >= 8;
}

function isValidPhone(phone) {
    if (!isRequired(phone)) return false;

    return /^[0-9]{10}$/.test(phone);
}