import random
# Exercise 1 : What are you learning ?


def display_message():
    print("I am learning full stack with React")


display_message()


# 🌟 Exercise 2: What’s your favorite book ?
def favorite_book(title):
    print(f"One of my favorite books is {title}")


favorite_book("Harry Potter")

# 🌟 Exercise 3 : Some Geography


def describe_city(city, country):
    print(f"{city} is in {country} ")


describe_city("New York", "USA")


# Exercise 4 : Random
def random_comparer(num):
    rand = random.random()
    if num == rand:
        print("success")
    else:
        print("fail")


random_comparer(25)

# 🌟 Exercise 5 : Let’s create some personalized shirts !


def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}")


make_shirt("medium", "Howdy")
make_shirt()
make_shirt(size="medium")
make_shirt(text="Different message")
make_shirt(size="small", text="Message 2")

# 🌟 Exercise 6: Magicians …
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

# Create a function called show_magicians(), which prints the name of each magician in the list.
# Write a function called make_great() that modifies the original list of magicians by adding the phrase "the Great" to each magician’s name.
# Call the function make_great().
# Call the function show_magicians() to see that the list has actually been modified.


def show_magicians():
    list(map(lambda m: print(m), magician_names))


def make_great():
    for i in range(len(magician_names)):
        magician_names[i] = magician_names[i] + " the Great"


show_magicians()
make_great()
show_magicians()


# 🌟 Exercise 7: Temperature Advice
def get_random_temp(season):
    if season == "winter":
        return random.randint(16, 24)
    elif season == "spring":
        return random.randint(24, 32)
    elif season == "summer":
        return random.randint(32, 40)
    elif season == "fall":
        return random.randint(24, 32)


def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temp > 16 and temp <= 23:
        print("It's a beautiful day")
    elif temp > 24 and temp <= 32:
        print("Don't forget your sunscreen")
    elif temp > 32 and temp <= 40:
        print("It's really hot, get to the beach")


# 🌟 Exercise 8: Star Wars Quiz
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


# Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
# Create a function that informs the user of his number of correct/incorrect answers.
# Bonus: display to the user the questions he answered wrong, his answer, and the correct answer.
# If he had more then 3 wrong answers, ask him to play again.
wrong_answers = []


def star_wars():
    for question in data:
        user_answer = input(f"{question["question"]}\n")
        if user_answer != question["answer"]:
            wrong_answers.append(question["answer"])


def score(): 

    print(f"You got {len(data) - len(wrong_answers)}/ {len(data)} correct.")


star_wars()
score()
