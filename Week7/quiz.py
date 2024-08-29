# Part 1: Quizz:

# What is a class? a structure with attributes and methods to create objects
# What is an instance? it is an object of a class with specific attributes
# What is encapsulation? wrapping methods and attributes to protect it from modification
# What is abstraction? Abstraction hides the complex reality of a system by providing a simplified interface
# What is inheritance? getting a parent class
# What is multiple inheritance? having multipe parent classes
# What is polymorphism? having the same superclass but different subclasses with different functions
# What is method resolution order or MRO? the order in which base classes are searched when executing a method


# Part 2: Create a deck of cards class .

import random


class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value


class Deck:
    def __init__(self, cards):
        self.cards = cards

    def shuffle(self):
        if len(self.cards) == 52:
            random.shuffle(self.cards)

    def deal(self):
        card = self.cards.pop(0)
        return card
