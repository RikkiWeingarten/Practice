// Exercise 1
// Part I
const people = ["Greg", "Mary", "Devon", "James"];

const gregIndex= people.indexOf("Greg");

people.splice(gregIndex, 1);

const jamesIndex = people.indexOf("James");

people.splice(jamesIndex, 1, "Jason");

people.push("Rikki");
console.log(people.indexOf("Mary"));

const newArray = people.slice(1, people.length-1);

console.log(indexOf("foo"));

// Write code that gives the index of “Foo”. Why does it return -1 ?
// The function returns -1 when it is not in the array.

const last = people[people.length - 1];

//Part II
people.forEach((person) => {
    console.log(person);
});

for (let i = 0; i < people.length; i++) {
    const person = people[i];
    console.log(person);
    if (person === "Devon") {
        break; 
    }
};

// Exercise 2
const colors = ["Pink", "Blue", "Green", "Black", "Salmon"];
const suffixes = ["1st", "2nd", "3rd", "4th", "5th"];

for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    const suffix = suffixes[i];
    console.log(`My ${suffix} choice is ${color}`);
};

//Exercise 3
let userInput = Number(prompt("Please enter a number: "));

while (isNaN(userInput)) {
    userInput = Number(prompt("That's not a valid number. Please enter a number: "));
    
}

while (userInput < 10) {
    userInput = Number(prompt("Please enter a number 10 or greater: "));
}

//Exercise 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building["numberOfFloors"]);
console.log(building["numberOfAptByFloor"]["firstFloor"]);
console.log(building["numberOfAptByFloor"]["thirdFloor"]);
console.log(building["nameOfTenants"][1], building["numberOfRoomsAndRent"]["dan"][0]);

const sarahRent = building["numberOfRoomsAndRent"]["sarah"][1];
const davidRent = building["numberOfRoomsAndRent"]["david"][1];
const danRent = building["numberOfRoomsAndRent"]["dan"][1];

if (sarahRent + davidRent > danRent) {
    building["numberOfRoomsAndRent"]["dan"][1] = 1200;
};


// Exercise 5
const family = {
    father: {
        name: "John",
        age: 45,
        occupation: "Engineer"
    },
    mother: {
        name: "Jane",
        age: 42,
        occupation: "Teacher"
    },
    child1: {
        name: "Emily",
        age: 16,
        school: "High School"
    },
    child2: {
        name: "Michael",
        age: 12,
        school: "Middle School"
    }
};

for (let member in family) {
    console.log(member); 
}

for (let member in family) {
    console.log(family[member]);
}

// Exercise 6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
}

let result = ""; 
for (let key in details) {
    result += `${details[key]} `; 
};

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const initials = names.map(name => name.charAt(0));

initials.sort();

const secretSocietyName = initials.join('');

console.log(secretSocietyName);