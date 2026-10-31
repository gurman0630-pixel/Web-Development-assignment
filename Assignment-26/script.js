const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 55000, stock: 10 },
    { id: 2, name: "Headphones", category: "Electronics", price: 1500, stock: 25 },
    { id: 3, name: "T-Shirt", category: "Clothing", price: 700, stock: 40 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1200, stock: 15 },
    { id: 5, name: "Watch", category: "Accessories", price: 2500, stock: 12 },
    { id: 6, name: "Keyboard", category: "Electronics", price: 1800, stock: 20 },
    { id: 7, name: "Wallet", category: "Accessories", price: 600, stock: 30 },
    { id: 8, name: "Jacket", category: "Clothing", price: 2200, stock: 8 }
];

let filteredProducts = [...products];

function displayProducts(items) {
    const container = document.getElementById("productList");

    if (items.length === 0) {
        container.textContent = "No products found.";
        updateSummary([]);
        return;
    }

    container.innerHTML = items.map(product => `
        <div class="product">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price.toLocaleString("en-IN")}</p>
            <p>Stock: ${product.stock}</p>
        </div>
    `).join("");

    updateSummary(items);
}

function updateSummary(items) {
    const total = items.reduce((sum, p) => sum + p.price, 0);

    const stock = items.reduce(
        (sum, p) => sum + p.stock, 0
    );

    const average = items.length ? total / items.length : 0;

    document.getElementById("totalProducts").textContent = items.length;
    document.getElementById("averagePrice").textContent =
        "₹" + average.toFixed(2);
    document.getElementById("totalStock").textContent = stock;
}

function filterProducts() {
    const search = document.getElementById("search").value.toLowerCase();
    const category = document.getElementById("category").value;
    const maxPriceValue = document.getElementById("maxPrice").value;

    const maxPrice = maxPriceValue === "" ? Infinity : Number(maxPriceValue);

    filteredProducts = products.filter(product => {
        const matchesName = product.name.toLowerCase().includes(search);
        const matchesCategory =
            category === "all" || product.category === category;
        const matchesPrice = product.price <= maxPrice;

        return matchesName && matchesCategory && matchesPrice;
    });

    displayProducts(filteredProducts);
}

function resetFilters() {
    document.getElementById("search").value = "";
    document.getElementById("category").value = "all";
    document.getElementById("maxPrice").value = "";

    filteredProducts = [...products];
    displayProducts(filteredProducts);
}

displayProducts(products);