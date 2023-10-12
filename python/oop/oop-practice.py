class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self, randomWord):
        # print(f"spam: {spam}")
        print(f"{randomWord}, {self.name}")

# Main

dog1 = Dog(age=15, name="Ted")

print(dog1.__dict__)

dog1.greet("hello")

# So we first create dog1 by calling the Dog blueprint and passing in the variables (name and age). The blueprint automatically creates name and age attributes based on these values because this is specified in the instructions of the Dog class.

# dog1 variable is now created as a PHYSICAL OBJECT with the passed in attributes, it is now "real"

## Note, because dog1 is a PHYSICAL OBJECT, it has a name and an age attached to it permanently now

# Calling dog1.greet("hello"), passes the dog1 as PHYSICAL OBJECT to the greet function, where the PHYSICAL OBJECT is represented by 'self'. Anything else passed to greet() is an additional value

# greet(self, randomWord) will now look at the object and can use any of its attributes such as its name (self.name) and its age (self.age); this is essentially substituted in as dog1.name and dog1.age. 

# Therefore it prints {randomWord} (which was the passed in additional value) and the {self.name} attribute i.e. "{randomWord}, {self.name}" becomes "hello, {dog1.name}" which becomes "hello, Ted"

