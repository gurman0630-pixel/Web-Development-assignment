const product = {
    id: 101,
    name: "Lenovo LOQ",
    brand: "Lenovo",
    category: "Laptop",
    price: 65000,
    inStock: true,

    specifications: {
        processor: {
            brand: "AMD",
            model: "Ryzen 5",
            generation: "7000 Series"
        },

        memory: {
            ram: "12 GB",
            storage: "512 GB SSD"
        },

        display: {
            size: "15.6 inches",
            resolution: "1920 x 1080",
            refreshRate: "144 Hz"
        },

        graphics: {
            brand: "NVIDIA",
            model: "RTX 3050",
            vram: "6 GB"
        }
    },

    warranty: {
        duration: "1 Year",
        type: "Manufacturer Warranty"
    },

    features: [
        "Backlit Keyboard",
        "Wi-Fi",
        "Bluetooth",
        "Gaming Performance"
    ]
};

function displayProduct() {
    const container = document.getElementById("productDetails");

    container.innerHTML = `
        <div class="product-card">
            <h2>${product.name}</h2>
            <p><strong>Brand:</strong> ${product.brand}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Price:</strong> ₹${product.price.toLocaleString("en-IN")}</p>
            <p><strong>Availability:</strong> ${product.inStock ? "In Stock" : "Out of Stock"}</p>

            <h3>Processor</h3>
            <p>${product.specifications.processor.brand}
               ${product.specifications.processor.model}
               ${product.specifications.processor.generation}</p>

            <h3>Memory</h3>
            <p>RAM: ${product.specifications.memory.ram}</p>
            <p>Storage: ${product.specifications.memory.storage}</p>

            <h3>Display</h3>
            <p>Size: ${product.specifications.display.size}</p>
            <p>Resolution: ${product.specifications.display.resolution}</p>
            <p>Refresh Rate: ${product.specifications.display.refreshRate}</p>

            <h3>Graphics</h3>
            <p>${product.specifications.graphics.brand}
               ${product.specifications.graphics.model}</p>
            <p>VRAM: ${product.specifications.graphics.vram}</p>

            <h3>Warranty</h3>
            <p>${product.warranty.duration} - ${product.warranty.type}</p>

            <h3>Features</h3>
            <ul>
                ${product.features.map(feature => `<li>${feature}</li>`).join("")}
            </ul>
        </div>
    `;
}

displayProduct();

console.log("Complete Product Object:", product);
console.log("Processor:", product.specifications.processor.model);
console.log("RAM:", product.specifications.memory.ram);
console.log("Features:", product.features);