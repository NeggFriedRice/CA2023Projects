class Vehicle:
    def __init__(self, make, model, km_per_litre):
        self.make = make
        self.model = model
        self.fuel = 0
        self.max_fuel = 0
        self.km_per_litre = km_per_litre

    def refuel(self, litres):
        self.fuel += litres
        if self.fuel > self.max_fuel:
            self.fuel = self.max_fuel

    def fuel_level(self):
        if self.fuel_level == 0:
            print("You have no fuel left!")
        elif self.fuel < 10:
            print("You better refuel soon!")
        else:
            print(f"You have {self.fuel} litres of fuel left.")

    def travel(self, distance):
        self.fuel -= distance / self.km_per_litre
        # Return the actual distance travelled
        # Either distance parameter, or the distance when they ran out of fuel)
        if self.fuel < 0: # Ran out of fuel
            actual_distance = distance + (self.fuel * self.km_per_litre)
            self.fuel = 0
            return actual_distance
        else:
            return distance

        

class Car(Vehicle):
    def __init__(self, make, model, km_per_litre):
        super().__init__(make, model, km_per_litre)
        self.windows_up = False
        self.max_fuel = 50

    def wind_up_windows(self):
        self.windows_up = True
        print("Windows go up")

class Motorbike(Vehicle):
    def __init__(self, make, model, km_per_litre):
        super().__init__(make, model, km_per_litre)
        self.max_fuel = 50
    
    def wheelie(self):
        print("WHEEEEEEEEEEE")

car = Vehicle("Toyota", "Camry", 19)
civic = Car("Honda", "Civic", 16)
low_rider = Motorbike("Harley Davidson", "Low Rider", 20)

# print(civic.fuel_level())
# print(civic.refuel(25))
# print(civic.fuel_level())
# print(civic.refuel(100))
# print(civic.fuel_level())
civic.refuel(50)
low_rider.refuel(4)
print(civic.travel(100))
print(low_rider.travel(150))

print(car.__dict__)
print(civic.__dict__)
print(low_rider.__dict__)



