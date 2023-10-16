# https://www.codewars.com/kata/576757b1df89ecf5bd00073b/python

# Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

# For example, a tower with 3 floors looks like this:

# [
#   "  *  ",
#   " *** ", 
#   "*****"
# ]

def build_tower(n_floors):
    for i in range(n_floors):
       spaces = (n_floors - i) + 1
       dot = i + 2
       print(" " * spaces + "*" * dot + " " * spaces)


build_tower(1)