class Mammal:
    def __init__(self, name):
        self.name = name
        self.warm_blooded = True
        self.speed = 100


class Rabbit(Mammal):
    def __init__(self):
        super().__init__("Mary")
        self.warm_blooded = False

animal1 = Mammal("George")
rabbit1 = Rabbit()

print(animal1.__dict__)
print(rabbit1.__dict__)

# print(help(Mammal))
print(help(Rabbit))
