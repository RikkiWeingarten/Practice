const products = require('./products.js');
const cars = products.products

function search(product) {
    for (let i = 0; i<cars.length; i++) {
        if (cars[i].name == product) {
            console.log(cars[i].name, cars[i].price, cars[i].category)
        }
    }
}

search("versa")