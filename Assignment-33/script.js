async function loadCatalogue() {
    const status = document.getElementById("status");
    const container = document.getElementById("catalogue");

    try {
        const response = await fetch("catalogue.json");

        if (!response.ok) {
            throw new Error("Catalogue file could not be loaded.");
        }

        const data = await response.json();

        if (!validateCatalogue(data)) {
            throw new Error("Catalogue structure is invalid.");
        }

        status.textContent = "Catalogue loaded and validated successfully!";
        status.className = "success";

        displayCatalogue(data);

        console.log("Catalogue:", data);
    } catch (error) {
        status.textContent = error.message;
        status.className = "error";
    }
}

function validateCatalogue(data) {
    if (!data || typeof data !== "object") return false;
    if (!Array.isArray(data.products)) return false;
    if (typeof data.catalogueName !== "string") return false;

    return data.products.every(product => {
        return (
            Number.isInteger(product.id) &&
            typeof product.name === "string" &&
            typeof product.category === "string" &&
            Number.isFinite(product.price) &&
            Number.isInteger(product.stock) &&
            product.price >= 0 &&
            product.stock >= 0 &&
            typeof product.specifications === "object" &&
            Array.isArray(product.features)
        );
    });
}

function displayCatalogue(data) {
    const container = document.getElementById("catalogue");

    container.innerHTML = `
        <h2>${data.catalogueName}</h2>

        <div class="products">
            ${data.products.map(product => `
                <div class="product">
                    <h3>${product.name}</h3>
                    <p>Category: ${product.category}</p>
                    <p>Price: ₹${product.price.toLocaleString("en-IN")}</p>
                    <p>Stock: ${product.stock}</p>

                    <h4>Specifications</h4>
                    <pre>${JSON.stringify(product.specifications, null, 2)}</pre>

                    <h4>Features</h4>
                    <p>${product.features.join(", ")}</p>
                </div>
            `).join("")}
        </div>
    `;
}