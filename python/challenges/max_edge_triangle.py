# https://edabit.com/challenge/Zerwo2AENbvRZTe83

# Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

def next_edge(side1, side2):
    return (side1 + side2) - 1

print(next_edge(8, 10)) # 17

print(next_edge(5, 7)) # 11

print(next_edge(9, 2)) # 10