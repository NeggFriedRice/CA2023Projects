my_dog = { "name" : "Ted", "age" : "15", "breed" : "Border Collie"}

# Using the dict[key] will return the value of Ted
print(my_dog["name"])

# for k, v in my_dog.items():
#     if k == "name":
#         print(v)

dogs = [
    { "name" : "Ted", "age" : "15", "breed" : "Border Collie" },
    { "name" : "Loki", "age" : "3", "breed" : "Border Collie" }
]

for k, v in my_dog.items():
    print(f"The value of {k} is {v}")

# Get method will retur 'None' if the value ("state") it is getting from the dictionary
# Adding second value 'Uknown' will change default return value from 'None' to 'Unknown'
print(my_dog.get("state", "Unknown"))
