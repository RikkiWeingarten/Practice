# Exercise 1
print("Hello world\n" * 4)

# Exercise 2
print((99**3)*8)

# Exercise 3
"""
False
True
False
Error
False
"""

# Exercise 4
computer_brand = "Dell"
print(f"I have a {computer_brand} computer")

# Exercise 5
name, age, shoe_size = "Rikki", 26, 9
info = f"My name is {name} and I am age {age} with a shoe size of {shoe_size}."
print(info)

# Exercise 6
a, b = 2, 1
if a > b:
    print("Hello, World")

# Exercise 7
num = int(input("Enter a number\n"))
if num % 2 == 0:
    print("Even")
else:
    print("Odd")

# Exercise 8
name = input("Enter your name\n")
if (name.lower() == "rikki"):
    print("Same name!")

# Exercise 9
height = int(input("Enter your height in cm (numerical only)\n"))
if height > 145:
    print("You are tall enough to ride")
else:
    print("grow more to ride, sorry")
