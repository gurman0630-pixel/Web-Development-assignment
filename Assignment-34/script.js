async function loadCatalogue() {
    try {
        const response = await fetch("catalogue.json");

        if (!response.ok) {
            throw new Error("Unable to load catalogue.");
        }

        const data = await response.json();

        if (!validateCatalogue(data)) {
            throw new Error("Invalid catalogue data.");
        }

        document.getElementById("status").textContent =
            "Catalogue loaded successfully!";

        displayCatalogue(data);

        document.getElementById("summary").innerHTML = `
            <p>Total Products: ${getTotalProducts(data)}</p>
            <p>Catalogue Stock Value: ₹${calculateCatalogueValue(data).toLocaleString("en-IN")}</p>
        `;

        console.log("Laptop:", getProductById(data, 101));

        console.log(
            "Electronics:",
            getProductsByCategory(data, "Electronics")
        );

    } catch (error) {
        document.getElementById("status").textContent = error.message;
    }
}

function displayCatalogue(data) {
    const container = document.getElementById("catalogue");

    container.innerHTML = data.products.map(product => `
        <div class="product">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: ₹${product.price}</p>
            <p>Stock: ${product.stock}</p>
            <p>Features: ${product.features.join(", ")}</p>
        </div>
    `).join("");
}

loadCatalogue();