# https://www.codewars.com/kata/57f781872e3d8ca2a000007e/python

# Given an array of integers, return a new array with each value doubled.

# For example:

# [1, 2, 3] --> [2, 4, 6]

# FUNDAMENTALSARRAYS

def maps(a):
    newArr = []
    for i in a:
        newArr.append(i * 2)
    return newArr

print(maps([1, 2, 3]))