import math
import turtle
#Instructions:

class Circle:
    pi = math.pi
    def __init__(self,**kwargs):
        if "radius" in kwargs:
            self.radius = kwargs["radius"]
        elif "diameter" in kwargs:
            self.radius = kwargs["diameter"] / 2
    
    def area(self):
        return self.pi * (self.radius**2)
    def __str__(self):
        return f"radius: {self.radius}, diameter: {self.radius*2}, area: {self.area()}"
    def __add__(self, other):
        if isinstance(other, Circle):
            return Circle(radius=self.radius + other.radius)
        else:
            raise TypeError(f"{other} is not of type Circle")
    def __gt__(self, other):
        if isinstance(other, Circle):
            return self.radius > other.radius
        else:
            raise TypeError(f"{other} is not of type Circle")
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self.radius == other.radius
        else:
            raise TypeError(f"{other} is not of type Circle")
    def add_and_sort(*args):
        if all(isinstance(i, Circle) for i in args):
            return args.sort()
        else:
            raise TypeError(f"args all must be type Circle")
        
c1 = Circle(diameter=32)
c2 = Circle(radius=12)

s = turtle.getscreen()
t = turtle.Turtle()
t.speed(2)
t.circle(c1.radius)
