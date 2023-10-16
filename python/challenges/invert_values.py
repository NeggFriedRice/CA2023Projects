# https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/python

# Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

# invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
# invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
# invert([]) == []
# You can assume that all values are integers. Do not mutate the input array/list.

def invert(lst):
    newList = []
    for i in lst:
        if i > 0:
            newList.append(-abs(i))
        else:
            newList.append(abs(i))
    return newList

print(invert([1,2,3,4,5]))