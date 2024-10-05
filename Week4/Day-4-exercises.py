from func import sum
import random
import string
from datetime import datetime
from faker import Faker


# 🌟 Exercise 1: Currencies
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        if self.amount != 1:
            curr = self.currency+"s"
        else:
            curr = self.currency
        return f"{str(self.amount)} {curr}"
    def __int__(self):
        return self.amount
    def __repr__(self):
        return str(self)
    def __add__(self, other):
        if isinstance(other, int):
            print(self.currency, other.currency)
            return self.amount + other
        elif isinstance(other, Currency):
            if self.currency == other.currency:
                return self.amount + other.amount
            else:
               raise TypeError(
                   f"Cannot add between Currency type {self.currency} and {other.currency}")
        else:
            raise TypeError(
                f"Cannot add between Currency type {self.currency} and {type(other)}")
            
    def __iadd__(self, other):
        self.amount = self + other
        return self
    # Your code starts HERE


# Using the code above, implement the relevant methods and dunder methods which will output the results below.
# Hint: When adding 2 currencies which don’t share the same label you should raise an error.
c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)



# 🌟 Exercise 2: Import
sum(1,2)


# 🌟 Exercise 3: String module
all_letter = string.ascii_letters
str = ""
for i in range(5):
    rand_idx = random.randint(0,len(all_letter))
    str += all_letter[rand_idx]
print(str)


# 🌟 Exercise 4: Current Date
def curr_date():
    print(datetime.today())
curr_date()


# Exercise 5: Amount of time left until January 1st
def time_left():
    now = datetime.today()
    jan = datetime(now.year + 1, 1, 1)
    dif = jan- now
    print(f"the 1st of January is in {dif} hours")
time_left()


# Exercise 6: Birthday and minutes
def get_minutes(birthday):
    dif = datetime.now() - birthday
    print(f"You have lived {int(dif.total_seconds()/60)} minutes in your life.")
get_minutes(datetime(1998, 1, 2))


# Exercise 7: Faker Module
users = []
fake = Faker()
def add_users():
    for i in range(4):
        user = {"name": fake.name(), "address":fake.address(), "language_code":fake.language_code()}
        users.append(user)
add_users()
print(users)