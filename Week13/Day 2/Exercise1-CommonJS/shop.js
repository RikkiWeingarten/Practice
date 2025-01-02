const products = require("./products.js");

function searchProduct(productName) {
    return products.find(product => product.name === productName);
}

console.log(searchProduct("Phone"));
console.log(searchProduct("Coffee Maker"));