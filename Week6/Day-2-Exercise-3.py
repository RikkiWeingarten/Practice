from Dogs import Dog
import random


class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        string = ""
        for name in args:
            string += name
        print(string + " all play together")

    def do_a_trick(self):
        string = self.name
        rand_int = random.randint(0,4)
        if self.trained:
            match rand_int:
                case 0:
                    string += " does a barrel roll"
                case 1:
                    string += " stands on his back legs"
                case 2:
                    string += " shakes your hand"
                case 3:
                    string += " plays dead"
        print(string)


pet_dog = PetDog("Dog", 1, 23, trained=True)
pet_dog.do_a_trick()
