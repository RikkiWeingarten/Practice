const lodash = require('lodash');
const { add, multiply } = require('./math.js');

console.log(add(1,2));
console.log(multiply(4,4));


const array = [1, 2, 3, 4, 5, 6];
const chunked = lodash.chunk(array, 2);

console.log(chunked);
