
# Exercise 1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())


class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'


class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'


class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'


all_cats = [Bengal("Ben", 2), Chartreux("Vanilla", 1), Siamese("Sprinkles", 4)]
saras_pets = Pets(all_cats)
saras_pets.walk()

# Exercise 2


class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking."

    def run_speed(self):
        return self.weight/self.age * 10

    def fight(self, other_dog):
        if other_dog.run_speed() * other_dog.weight > self.run_speed() * self.weight:
            return f"{other_dog.name} won the fight"
        else:
            return f"{self.name} won the fight"


dog1 = Dog("Dog 1", 9, 32)
dog2 = Dog("Dog 2", 2, 18)
dog3 = Dog("Dog 3", 2, 70)
print(dog2.fight(dog3))

# Exercise 4


class Family():
    def __init__(self, last_name, members):
        self.members = members
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Contratulations {
              self.last_name} family on the birth of {kwargs["name"]}")

    def is_18(self, name):
        for member in self.members:
            if name in member:
                return member.age >= 18

    def family_presentation(self):
        print(f"Family: {self.last_name}")
        for member in self.members:
            print(member)


members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
]
family = Family("The Family", members)
family.born(name='Danny', age=0, gender='Male', is_child=True)
family.family_presentation()

# Exercises 5


class TheIncredibles(Family):
    def __init__(self, last_name, members):
        self.members = members
        self.last_name = last_name

    def use_power(self):
        for member in self.members:
            if super().is_18(member):
                print(member["power"])
            else:
                raise Exception(f"{member["name"]} is not over 18")

    def incredible_presentation(self):
        super().family_presentation()


family = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False,
        'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False,
     'power': 'read minds', 'incredible_name': 'SuperWoman'}
]

incredible_family = TheIncredibles("Incredibles", family)
incredible_family.incredible_presentation()
incredible_family.born(name='Jack', age=0, gender='Male',
                       is_child=True, power= 'fire', incredible_name= 'Jack-Jack')
incredible_family.incredible_presentation()

# Call the incredible_presentation method.


# Use the born method inherited from the Family class to add Baby Jack with the following power: “Unknown Power”.


# Call the incredible_presentation method again.
