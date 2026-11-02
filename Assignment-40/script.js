// Product data
const products = [
    {
        name: "Laptop",
        description: "Powerful laptop for coding and gaming.",
        price: 55000
    },
    {
        name: "Smartphone",
        description: "Smartphone with excellent performance.",
        price: 25000
    },
    {
        name: "Headphones",
        description: "Wireless headphones with clear sound.",
        price: 2000
    },
    {
        name: "Keyboard",
        description: "Mechanical keyboard for typing.",
        price: 1500
    }
];

// Select card container
const cardContainer = document.getElementById("cardContainer");

// Reusable card-rendering function
function renderCard(product) {

    // Create card
    const card = document.createElement("div");
    card.className = "card";

    // Product name
    const title = document.createElement("h2");
    title.textContent = product.name;

    // Product description
    const description = document.createElement("p");
    description.textContent = product.description;

    // Product price
    const price = document.createElement("p");
    price.className = "price";
    price.textContent = "₹" + product.price;

    // Button
    const button = document.createElement("button");
    button.textContent = "View Product";

    button.addEventListener("click", function () {
        alert("You selected: " + product.name);
    });

    // Add elements to card
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);
    card.appendChild(button);

    return card;
}

// Render all product cards
function renderProducts(productList) {

    cardContainer.innerHTML = "";

    productList.forEach(function (product) {
        const card = renderCard(product);
        cardContainer.appendChild(card);
    });
}

// Display products
renderProducts(products);