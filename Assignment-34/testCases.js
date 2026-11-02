const {
    validateCatalogue,
    getProductById,
    getProductsByCategory,
    calculateCatalogueValue,
    getTotalProducts
} = require("./utilities");
const assert = require("node:assert/strict");

assert.equal(getTotalProducts({ products: [] }), 0);
console.log("Tests passed");