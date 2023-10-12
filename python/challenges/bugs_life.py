# https://www.codewars.com/kata/5b71af678adeae41df00008c

# A bug lives in a world which is a cuboid and has to walk from one corner of the cuboid to the opposite corner (see the picture below).

# Google 'Cuboid Space Diagonal'

# Task
# Define a function which takes 3 arguments: the length a , width b, and height c of the bug's "world", and finds the shortest distance needed to walk from start to finish. The dimensions will be positive numbers.

# Note: The bug cannot fly and has to maintain contact with a surface at all times but can walk up walls.
import math

def shortest_distance(a, b, c):
    distance = 0
    acHyp = math.sqrt(a*a + c*c)
    # abHyp = a*a + b*b
    bcHyp = math.sqrt(b*b + c*c)
    if acHyp > bcHyp:
        distance += bcHyp + a
    else:
        distance += acHyp + b
    return distance

print(shortest_distance(1, 2, 3))

# Failed