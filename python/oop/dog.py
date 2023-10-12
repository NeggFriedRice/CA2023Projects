# my_dog = { "name" : "Ted", "age" : 15, "breed" : "Border Collie"}

# def create(name, age, breed):
#     new_dog = {
#         'name' : name,
#         'age' : age,
#         'breed' : breed
#     }
#     return new_dog

# def walk(dog):
#     dog["walks"] += 1


class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self, prefix):
        # print(f"spam: {spam}")
        print(f"{prefix}, {self.name}")

