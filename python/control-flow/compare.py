## Comparison exercise 1
# x = int(input("What is X? "))
# y = int(input("What is Y? "))

# if x < y:
#     print("x is less than y")

# if x > y:
#     print("x is greater than y")

# if x == y:
#     print("x is equal to y")

## Comparison exercise 2
# score = int(input("Score: "))

# if score >= 90:
#     print("HD")
# elif score >=80:
#     print("D")
# elif score >=70:
#     print("CR")
# elif score >=50:
#     print("P")
# else:
#     print("F")

## Comparison exercise 3
# name = input("What is your name? ")

# if name == "Harry" or "Ron" or "Hermione":
#     print("Gryffindor")
# elif name == "Draco":
#     print("Slytherin")
# else:
#     print("Mudblood!")

#Comparison exercise 3 best practice upgrade
# name = input("What is your name? ")
# match name:
#     case "Harry" | "Ron" | "Hermione":
#         print("Gryffindor")
#     case "Draco":
#         print("Slytherin")
#     case _:
#         print("Mudblood!")

import math

# Get input
# shape = input("Square, circle or triangle? ")

# # Square selected
# if shape.lower() == "square":
#     length = input("What is the length of the square? ")
#     print(f"The area of the square is {(int(length) ** 2)}")

# # Circle selected
# elif shape.lower() == "circle":
#     radius = input("What is the radius of the circle? ")
#     print(f"The area of the circle is {(int(radius) ** 2) * math.pi}")

# # Triangle selected
# elif shape.lower() == "triangle":
#     base = input("What is the base of the triangle? ")
#     height = input("What is the height of the triangle? ")
#     print(f"The area of the triangle is {(int(base) / 2) * int(height)}")

# else:
#     print("That is not a choice!")


# import math
# shape = input("Square, circle or triangle? ")

# match shape.lower():
#     case "square":
#         length = input("What is the length of the square? ")
#         print(f"The area of the square is {(int(length) ** 2)}")

#     case "circle":
#         radius = input("What is the radius of the circle? ")
#         print(f"The area of the circle is {(int(radius) ** 2) * math.pi}")

#     case "triangle":
#         base = input("What is the base of the triangle? ")
#         height = input("What is the height of the triangle? ")
#         print(f"The area of the triangle is {(int(base) / 2) * int(height)}")

#     case _:
#         print("This is not a shape I can programmed to calculate")

# celsius = float(input ())

# fahrenheit = (celsius*9/5) + 32

# print(f"The result is: {fahrenheit}.")

arr = [5, 22, 29, 39, 19, 51, 78, 96, 84]
i = 0
# Scan through all items of the array
while (i < (len(arr) - 1)):
    # If number is greater than the next number in the array
    if (arr[i] > arr [i + 1]):
        # Create temp variable to store greater number
        temp = arr[i]
        # Swap the greater number with the smaller number
        arr[i] = arr[i + 1]
        # Take the greater number from the temp variable and assign it to the index after the smaller number
        arr[i + 1] = temp
    # Print the value the array at index i
    print(arr[i])
    # Increment i
    i += 1
# Print the last value in the array
print(arr[i])    

#Count to 100

# If number is greater than 2:
    #If yes {
        # Can number be divided by range(2 to number counter)?
        # If yes, not a prime number - do not print
        # If no, is a prime number - print
#           }
    # If no {
    # print number
#           }
