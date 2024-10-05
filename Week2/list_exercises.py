# Exercise 1
my_fav_numbers = {2, 53, 22}
my_fav_numbers.add(39)
my_fav_numbers.add(253)

my_fav_numbers.remove(22)

friend_fav_numbers = {43, 55, 92}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

# Exercise 2
# You cannot add values to a tuple because they are immutible - once created, they can't be changed

# Exercise 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
cnt = basket.count("Apples")
basket.clear()
print(basket)

# Exercise 4
# a float is decimal number and an integer is a whole number
floats = [x/2 for x in range(3, 11)]
print(floats)

# Exercise 5
for i in range(1, 21):
    print(i)

for i in range(1, 21):
    if i % 2 == 0:
        print(i)

# Exercise 6
inpt = input("What is your name?\n")
while inpt != "Rikki":
    inpt = input("What is your name?\n")

# Exercise 7
inpt = input("What is your favorite fruit/s? (separated by spaces)\n")

fruit = inpt.split(" ")
name = input("Input any fruit?\n")
if name in fruit:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")

# Exercise 8
inpt = input("Enter a pizza topping\n")
toppings = []
while inpt != "quit":
    toppings.append(inpt)
    print(f"We will add {inpt} to your pizza")
    inpt = input("Enter a pizza topping\n")

for t in toppings:
    print(t)
print(10 + len(toppings)*2.5)

# Exercise 9
inpt = input("Enter in age of children and enter \"done\" when finished\n")
children = []
while inpt != "done":
    children.append(int(inpt))
    inpt = input("Enter in age of children and enter \"done\" when finished\n")
cost = 0
for age in children:
    if age > 12:
        cost += 15
    elif age >= 3:
        cost += 10
print(cost)

teenagers = []
inpt = input("Enter your name and age and enter \"done\" when finished\n")
while inpt != "done":
    teenagers.append()
