#car.py

class Car:
    def __init__(self, color, mileage):
        self.color = color
        self.mileage = mileage

    def __str__(self):
        return f"The {self.color} car has {self.mileage} miles."

# Main
car1 = Car("Blue", 20000)
car2 = Car("Red", 30000)

for car in (car1, car2):
    print(car)