import { people } from './data.js';



function averageAge() {
    let peopleAmt = people.length
    let totalAge = 0;
    for (let i = 0; i < peopleAmt; i++) {
        totalAge += people[i].age
    }
    console.log(totalAge/peopleAmt)
}

averageAge()