//Exercise 1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((element, index) => {
    console.log(`${index+1}# choice is ${element}`)
});


if (colors.some(color => color === "Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
};

//Exercise 2
const ordinal = ["th","st","nd","rd"];
colors.forEach((element, index) => {
    const suffix = (index === 0) ? 'st' :
                   (index === 1) ? 'nd' :
                   (index === 2) ? 'rd' : 'th';

    console.log(`${index + 1}${suffix} choice is ${color}.`);
});

//Exercise 3
// you will get the vegetable list and fruit list added to the list.
// You will get Each letter as an element in the array
// Not sure what's happening with the bonus, why would there be two elements and not 3?

//Exercise 4
const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


const welcomeStudents = users.map(user => `Hello ${user["firstName"]}`);

const fullStack = users.filter(user => user["role"] == 'Full Stack Resident');
const fullStackLastName = fullStack.map(user => user["lastName"]);

//Exercise 5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const sentence = epic.reduce((accumulator, currentValue) => accumulator + currentValue + " ","");

//Exercise 6
const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];

const passed = students.filter(student => student["isPassed"]);
passed.forEach((student) => {
    console.log(`Good job ${student["name"]}, you passed the course in ${student["course"]}`);
});