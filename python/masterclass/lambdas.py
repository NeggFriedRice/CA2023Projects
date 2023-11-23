nums = [10, 14, 21, 50, 5, -6]

# Want to iterate the list
# Square the values

# def square(value):
#     return value ** 2

# square = lambda value: value ** 2
# print(square(10))

# def cube(value):
#     return value ** 3
# squared_nums = []
# for i in nums:
#     squared_nums.append(square(i))

# Original
squared_nums = list(map(lambda value: value ** 2, nums))
# List comprehension
squared_nums = [value ** 2 for value in nums if value % 2 == 0]
print(squared_nums)

# cubed_nums = list(map(lambda value: value ** 3, nums))
# even_nums = list(filter(lambda value: value % 2 == 0, nums))
# print(cubed_nums)
# print(even_nums)

# employees = [
#     {"name" : "John", "age" : "32"},
#     {"name" : "Mary", "age" : "27"},
#     {"name" : "Bob", "age" : "40"}
# ]

# sorted_employees = sorted(employees, key=lambda x: x["name"])
# oldest_employee = max(employees, key=lambda x: x["age"])
# print(sorted_employees)
# print(oldest_employee)

students = [
    {"name": "Harry", "house" : "Gryffindor"},
    {"name": "Ron", "house" : "Gryffindor"},
    {"name": "Hermione", "house" : "Gryffindor"},
    {"name": "Draco", "house" : "Slytherin"}
]

gryffindor_students = list(filter(lambda s: s["house"] == "Gryffindor", students))
names = list(map(lambda s: s["name"], gryffindor_students))
names = [i["name"] for i in names if i["house"] == "Gryffindor"]
print(gryffindor_students)
print(names)
