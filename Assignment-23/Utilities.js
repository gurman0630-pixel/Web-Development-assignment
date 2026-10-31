function mergeSettings(defaultSettings, userSettings) {
    return {
        ...defaultSettings,
        ...userSettings
    };
}

function calculateTotal(items) {
    if (!Array.isArray(items)) return 0;

    return items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

function calculateTax(amount, taxRate) {
    return amount * (taxRate / 100);
}

function calculateGrandTotal(amount, taxRate) {
    return amount + calculateTax(amount, taxRate);
}