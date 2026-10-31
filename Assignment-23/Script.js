const defaultSettings = {
    theme: "light",
    language: "English",
    notifications: true,
    fontSize: 16
};

const userSettings = {
    theme: "dark",
    notifications: false
};

const merged = mergeSettings(defaultSettings, userSettings);

document.getElementById("defaultSettings").textContent =
    JSON.stringify(defaultSettings, null, 2);

document.getElementById("customSettings").textContent =
    JSON.stringify(userSettings, null, 2);

document.getElementById("mergedSettings").textContent =
    JSON.stringify(merged, null, 2);

const cartItems = [
    { name: "Keyboard", price: 1200, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Headphones", price: 1500, quantity: 1 }
];

const total = calculateTotal(cartItems);
const tax = calculateTax(total, 18);
const grandTotal = calculateGrandTotal(total, 18);

document.getElementById("totalResult").innerHTML = `
    <p>Subtotal: ₹${total}</p>
    <p>Tax (18%): ₹${tax.toFixed(2)}</p>
    <h3>Grand Total: ₹${grandTotal.toFixed(2)}</h3>
`;