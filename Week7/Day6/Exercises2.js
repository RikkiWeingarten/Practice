// 🌟 Exercise 1 : Find the numbers divisible by 23

function displayNumbersDivisible(divisor) {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % divisor == 0) {
            sum += i;
            console.log(i);
        }
    };
    console.log(sum);
};

// 🌟 Exercise 2 : Shopping List

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let cost = 0;
    for (let i = 0; i< shoppingList.length; i++) {
        const item = shoppingList[i];
        if (item in stock && stock[item] > 0) {
            cost += prices[item];
            stock[item] = stock[item]-1;
        }
    }
};

// Exercise 3 : What’s in my wallet ?

function changeEnough(itemPrice, amountOfChange) {
    let total = amountOfChange[0]*.25 + amountOfChange[1]*.10 + amountOfChange[2]*.05 + amountOfChange[3]*.01;
    
    if (total >= itemPrice) {
        return true;
    } else {
        return false;
    };

};

// 🌟 Exercise 4 : Vacations Costs
function hotelCost() {
    let nights;
    do {
        nights = prompt("How many nights would you like to stay at the hotel?");
    } while (isNaN(nights) || nights === "" || nights === null);
    nights = Number(nights);
    
    const costPerNight = 140;
    return nights * costPerNight;
}

function planeRideCost() {
    let destination;
    do {
        destination = prompt("What is your destination? (London, Paris, or other)");
    } while (!isNaN(destination) || destination === "" || destination === null);
    if (destination.toLowerCase() === "london") {
        return 183;
    } else if (destination.toLowerCase() === "paris") {
        return 220;
    } else {
        return 300;
    }
}

function rentalCarCost() {
    let days;
    do {
        days = prompt("How many days would you like to rent the car?");
    } while (isNaN(days) || days === "" || days === null);
    days = Number(days);

    const costPerDay = 40;
    let totalCost = days * costPerDay;
    if (days > 10) {
        totalCost *= 0.95; 
    }
    return totalCost;
}

function totalVacationCost() {

    const hotelTotal = hotelCost();
    const planeTotal = planeRideCost();
    const carTotal = rentalCarCost();

    return `The car cost: ${carTotal}, the hotel cost: ${hotelTotal}, the plane tickets cost: ${planeTotal}.`

}

// 🌟 Exercise 5 : Users


// 🌟 Exercise 6 : Change the navbar
// Instructions
// Create a new structured HTML file and a new Javascript file

// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>


// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with "Logout" as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).


// Exercise 7 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty section:
// <section class="listBooks"></section>

// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.