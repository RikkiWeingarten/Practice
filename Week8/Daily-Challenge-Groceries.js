let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.array.forEach(fruit => {
        console.log(fruit);
    });
};

const cloneGroceries = () => {
    var user = client;
    client = "Betty";
    // The variables are pointing to the same object and not making a copy.
    console.log(user)

    var shopping = groceries;
    groceries["totalPrice"] = "35$";
    console.log(shopping)

    // Same thing, they are pointing to the same object

    groceries["other"]["paid"] = false;
    console.log(shopping)
};
cloneGroceries();