class Car():
    def __init__(self, year, kilometers):
        self.year = year
        self.kilometrage = kilometers
    def __gt__(self, other):
        if self.year > other.year and self.kilometers < other.kilometers:
            return True
        else:
            return False



car_a = Car(1999, 40)
car_b = Car(1998, 100)
print(car_a > car_b)
