# https://www.codewars.com/kata/56606694ec01347ce800001b/train/python

# Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

# (In this case, all triangles must have surface greater than 0 to be accepted).

def is_triangle(a, b ,c):
    list = [a, b, c]
    newList = sorted(list)
    return newList[0] + newList[1] > newList[2]


print(is_triangle(7,2,2))

