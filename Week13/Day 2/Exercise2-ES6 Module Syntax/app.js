import { people } from './data.js';

function averageAge(people) {
    let total = 0;
    for (const person of people) {
        total += person["age"];
    };
    console.log(total)
    return total/Object.keys(people).length
}
console.log(averageAge(people));