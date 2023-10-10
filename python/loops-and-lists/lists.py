spam = ["cat", "dog", "bird"]
eggs = [12, 78, 100, 54, 42]
foo = ["Tom", 32, 162.1]

# for index, animal in enumerate(spam):
#     print(f"{index + 1}. {animal}")

# spam.append("kangaroo")
# print(spam)

# Below will search 'spam' variable and search for 'dog' and return the index
# x = spam.index("dog")
# print(x)

# def display_person(person):
#     print(f"{person[0]} is {person[1]} years old and is {person[2]}cm tall")

# display_person(foo)

# Same function as above, but easier to read semantically
def display_person(person):
    # name = person[0]
    # age = person[1]
    # height = person[2]
    name, age, height = person
    print(f"{name} is {age} years old and is {height}cm tall")

# display_person(foo)

# Insert "kangaroo" in index 1, will move everything else down
# spam.insert(1, "kangaroo")
# print(spam)

# pop() removes the last element in the list
# spam.pop()
# print(spam) # The popped element can be returned with print(spam.pop())

# Sort in ascending or reverse=True reversed order
spam.sort(reverse=True)
print(spam)



