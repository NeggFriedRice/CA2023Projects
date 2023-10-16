# https://www.codewars.com/kata/5715eaedb436cf5606000381/python

# You get an array of numbers, return the sum of all of the positives ones.

# Example [1,-4,7,12] => 1 + 7 + 12 = 20

# Note: if there is nothing to sum, the sum is default to 0.

def positive_sum(arr):
    sum = 0
    for i in arr:
        if i > 0:
            sum += i
    return sum

print(positive_sum([1,-4,7,12]))