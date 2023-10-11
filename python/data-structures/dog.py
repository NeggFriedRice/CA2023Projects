# dog.py

class Dog:
    species = "Canis familiaris"

    def __init__(self, name, age, sound):
        self.name = name
        self.age = age
        self.sound = sound

    # Instance method
    def __str__(self):
        return f"{self.name} is {self.age} years old and the sound he makes is {self.sound}"

    # # Another instance method
    # def speak(self, sound):
    #     return f"{self.name} says {sound}"
    
# Main
miles = Dog("Miles", 4, "Bark")
print(miles)