function validateCatalogue(data) {
    if (!data || typeof data !== "object") return false;
    if (!Array.isArray(data.products)) return false;

    if (
        !data.catalogueName ||
        typeof data.catalogueName !== "string"
    ) {
        return false;
    }

    return data.products.every(product => {
        return (
            Number.isInteger(product.id) &&
            typeof product.name === "string" &&
            product.name.trim() !== "" &&
            typeof product.category === "string" &&
            Number.isFinite(product.price) &&
            product.price >= 0 &&
            Number.isInteger(product.stock) &&
            product.stock >= 0 &&
            product.specifications !== null &&
            typeof product.specifications === "object" &&
            !Array.isArray(product.specifications) &&
            Array.isArray(product.features)
        );
    });
}

function getProductById(data, id) {
    if (!data || !Array.isArray(data.products)) return null;

    return data.products.find(product => product.id === id) || null;
}

function getProductsByCategory(data, category) {
    if (!data || !Array.isArray(data.products)) return [];

    return data.products.filter(
        product => product.category.toLowerCase() === category.toLowerCase()
    );
}

function calculateCatalogueValue(data) {
    if (!data || !Array.isArray(data.products)) return 0;

    return data.products.reduce(
        (total, product) => total + product.price * product.stock,
        0
    );
}

function getTotalProducts(data) {
    return data && Array.isArray(data.products)
        ? data.products.length
        : 0;
}

module.exports = {
    validateCatalogue,
    getProductById,
    getProductsByCategory,
    calculateCatalogueValue,
    getTotalProducts
};