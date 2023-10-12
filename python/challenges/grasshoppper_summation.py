# https://www.codewars.com/kata/55d24f55d7dd296eb9000030/python

# Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

# For example (Input -> Output):

# 2 -> 3 (1 + 2)
# 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

def summation(num):
    sum = 0
    i = 0
    while i <= num:
        sum += i
        i += 1
    return sum

print(summation(8))