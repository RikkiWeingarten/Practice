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
