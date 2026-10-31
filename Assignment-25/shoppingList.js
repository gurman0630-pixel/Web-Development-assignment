let shoppingList = [];

function addItem(name, quantity, price) {
    if (!name.trim() || quantity <= 0 || price < 0) {
        console.log("Invalid item details.");
        return;
    }

    shoppingList.push({
        id: Date.now(),
        name: name.trim(),
        quantity: Number(quantity),
        price: Number(price),
        purchased: false
    });

    console.log(name + " added successfully!");
}

function removeItem(id) {
    const initialLength = shoppingList.length;

    shoppingList = shoppingList.filter(item => item.id !== id);

    if (shoppingList.length < initialLength) {
        console.log("Item removed.");
    } else {
        console.log("Item not found.");
    }
}

function updateQuantity(id, quantity) {
    const item = shoppingList.find(item => item.id === id);

    if (!item || quantity <= 0) {
        console.log("Invalid item or quantity.");
        return;
    }

    item.quantity = Number(quantity);
    console.log("Quantity updated.");
}

function markPurchased(id) {
    const item = shoppingList.find(item => item.id === id);

    if (!item) {
        console.log("Item not found.");
        return;
    }

    item.purchased = true;
    console.log(item.name + " marked as purchased.");
}

function displayList() {
    console.log("\n----- SHOPPING LIST -----");

    if (shoppingList.length === 0) {
        console.log("Your shopping list is empty.");
        return;
    }

    shoppingList.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.name} | Qty: ${item.quantity} | ` +
            `Price: ₹${item.price} | ` +
            `${item.purchased ? "Purchased" : "Pending"}`
        );
    });
}

function calculateTotal() {
    return shoppingList.reduce(
        (total, item) => total + item.quantity * item.price,
        0
    );
}

// Sample operations
addItem("Milk", 2, 30);
addItem("Bread", 1, 40);
addItem("Eggs", 12, 6);

displayList();

updateQuantity(shoppingList[0].id, 3);
markPurchased(shoppingList[1].id);

displayList();

console.log("Total: ₹" + calculateTotal());