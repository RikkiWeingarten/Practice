// Exercise 1
// #1.2 - You will get an error because const variable values cannot be changed.
// #2.1 - It will send the alert with th 0 value and then throw the error that a const value cannot be changed.
// #4.2 - It will run the function without errors
// #5.2 - It will run the function without errors- it treats it like redeclaration

// Exercise 2
function winBattle(){
    return true;
}

const winBattle2nd = () => true;

const experiencePoints = winBattle() ? 10: 1;
console.log(experiencePoints)

// Exercise 3
const isString = (str) => typeof str === 'string';

// Exercise 4
const sum = (a, b) => a + b;

// Exercise 5
function convertDeclaration(kg) {
    return kg*1000;
};
const convertExpression = function(kg) {
    return kg*1000;
};
const convertKG = (kg) => kg*1000;

// Exercise 6
(function(numChildren, partnerName, location, jobTitle) {
    alert(`You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids."`);
})(2,"Jim","Tel Aviv", "Biologist");

// Exercise 7

(function(name) {
    const nav = document.querySelector('nav');
    nav.innerHTML = `<div>${name}</div>`;
})("Rikki Weingarten");

// Exercise 8

function makeJuice(size) {
    let ingredients;
    function addIngredients(food1, food2, food3) {
        ingredients.push(food1).push(food2).push(food3);
    }
    addIngredients('banana', 'strawberry', 'mango');
    function displayJuice() {
        let str = `The client wants a ${size} juice, containing`;
        ingredients.forEach()
        alert(`The client wants a ${size} juice, containing ${food1}, ${food2}, ${food3}`)
    }
};
makeJuice('small')


