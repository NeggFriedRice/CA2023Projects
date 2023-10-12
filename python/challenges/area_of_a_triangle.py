# https://edabit.com/challenge/aWLTzrRsrw7RakYrN

# Write a function that takes the base and height of a triangle and return its area.

def tri_area(base, height):
    area = (base * height) / 2
    return area

print(tri_area(3, 2)) # 3

print(tri_area(7, 4)) # 14

print(tri_area(10, 10)) # 50