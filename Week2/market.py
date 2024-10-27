class Farm():
    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, *args):
        animal = args[0]
        if len(args) > 1:
            amount = args[1]
        else:
            amount = 1
        if animal in self.animals:
            self.animals[animal] = self.animals[animal] + amount
        else:
            self.animals[animal] = amount

    def get_info(self):
        for animal in self.animals:
            return f"{animal} : {self.animals[animal]}"

    def get_animal_types(self):
        sorted_list = sorted(self.animals.keys())
        return sorted_list

    def get_short_info(self):
        animals = self.get_animal_types()
        string = f"McDonal's farm has "
        for i in range(len(animals)):
            if self.animals[animals[i]] > 1:
                animal = animals[i] + "s"
            else:
                animal = "a " + animal[i]
            if len(animals) == 1:
                print(string + animal + ".")
            elif i == len(animals)-2:
                string += animal + " and "
            elif i == len(animals)-1:
                string += animal + "."
            else:
                string += animal + ", "
        return string


macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

macdonald.get_info()
print(macdonald.get_animal_types())
print(macdonald.get_short_info())
