const cart = {
    items: [],

    addItem(name, price, quantity) {
        if (!name.trim() || price <= 0 || quantity <= 0) {
            return false;
        }

        const existingItem = this.items.find(
            item => item.name.toLowerCase() === name.trim().toLowerCase()
        );

        if (existingItem) {
            existingItem.quantity += Number(quantity);
        } else {
            this.items.push({
                name: name.trim(),
                price: Number(price),
                quantity: Number(quantity)
            });
        }

        return true;
    },

    removeItem(index) {
        if (index < 0 || index >= this.items.length) {
            return false;
        }

        this.items.splice(index, 1);
        return true;
    },

    updateQuantity(index, quantity) {
        if (
            !this.items[index] ||
            !Number.isInteger(Number(quantity)) ||
            Number(quantity) <= 0
        ) {
            return false;
        }

        this.items[index].quantity = Number(quantity);
        return true;
    },

    getSubtotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    },

    getTax() {
        return this.getSubtotal() * 0.18;
    },

    getGrandTotal() {
        return this.getSubtotal() + this.getTax();
    }
};

function addToCart() {
    const name = document.getElementById("productName").value;
    const price = Number(document.getElementById("productPrice").value);
    const quantity = Number(document.getElementById("productQuantity").value);

    const message = document.getElementById("message");

    if (
        document.getElementById("productName").value.trim() === "" ||
        document.getElementById("productPrice").value === "" ||
        document.getElementById("productQuantity").value === ""
    ) {
        message.textContent = "Please fill in all fields.";
        return;
    }

    if (!cart.addItem(name, price, quantity)) {
        message.textContent = "Enter a valid name, price and quantity.";
        return;
    }

    message.textContent = "Product added successfully!";

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productQuantity").value = "";

    displayCart();
}

function removeFromCart(index) {
    cart.removeItem(index);
    displayCart();
}

function changeQuantity(index) {
    const quantity = prompt("Enter new quantity:");

    if (quantity === null) return;

    if (!cart.updateQuantity(index, quantity)) {
        alert("Please enter a positive whole number.");
        return;
    }

    displayCart();
}

function displayCart() {
    const container = document.getElementById("cartItems");

    if (cart.items.length === 0) {
        container.textContent = "Your cart is empty.";
    } else {
        container.innerHTML = cart.items.map((item, index) => `
            <div class="cart-item">
                <h3>${item.name}</h3>
                <p>Price: ₹${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Item Total: ₹${item.price * item.quantity}</p>
                <button onclick="changeQuantity(${index})">Update</button>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `).join("");
    }

    document.getElementById("subtotal").textContent =
        cart.getSubtotal().toFixed(2);

    document.getElementById("tax").textContent =
        cart.getTax().toFixed(2);

    document.getElementById("grandTotal").textContent =
        cart.getGrandTotal().toFixed(2);
}

displayCart();