import dog

# dog1 = dog.create("Ted", 15, "Border Collie")
# dog2 = dog.create("Loki", 3, "Border Collie")

# dog.walk(dog1)
# dog.walk(dog2)
# dog.walk(dog2)

dog1 = dog.Dog("Ted", 15) # Creates a new instance of dog
# dog1.name = "Ted"
dog2 = dog.Dog("Maisey", 1)

# dog2 = dog.Dog()

print(f"dog1: {dog1.name} is {dog1.age}")
print(f"dog2: {dog2.name} is {dog2.age}")
# dog1.greet("Loud")
# # dog2.greet()

