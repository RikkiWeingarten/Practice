# 🌟 Exercise 1: Cats

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age


cat_one = Cat("Tiger", 5)
cat_two = Cat("Frosty", 2)
cat_three = Cat("Calico", 3)


def oldest(cat1, cat2, cat3):
    if cat1.age > cat2.age:
        oldest = cat1
    else:
        oldest = cat2
    if cat3.age > oldest.age:
        oldest = cat3
    return oldest


oldest_cat = oldest(cat_one, cat_two, cat_three)
print(f"The oldest cat is {oldest_cat.name}, and is {
      oldest_cat.age} years old.")

# 🌟 Exercise 2: Dogs


class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height*2} cm high!")


davids_dog = Dog("Rex", 50)
print(davids_dog.name, davids_dog.height)
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(sarahs_dog.name, sarahs_dog.height)
sarahs_dog.bark()
sarahs_dog.jump()
if sarahs_dog.height > davids_dog.height:
    print(sarahs_dog.name)
else:
    print(davids_dog.name)

# 🌟 Exercise 3: Who’s the song producer?


class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for lyric in self.lyrics:
            print(lyric)


stairway = Song(["There’s a lady who's sure", "all that glitters is gold",
                "and she’s buying a stairway to heaven"])

stairway.sing_me_a_song()


# Exercise 4: Afternoon at the Zoo

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_animal(self, animal):
        if animal not in self.animals:
            self.animals.append(animal)

    def get_animals(self):
        for animal in self.animals:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        groups = {}
        self.animals = sorted(self.animals)
        for animal in self.animals:
            if animal[0] not in groups:
                groups[animal[0]] = [animal]

            else:
                groups[animal[0]] = groups[animal[0]] + [animal]
        self.groups = groups

    def get_groups(self):
        for group in self.groups:
            print(self.groups[group])


ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Cow")
ramat_gan_safari.add_animal("Crow")
ramat_gan_safari.add_animal("Deer")
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()
