# https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/python

# Simple, given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different data types.

def find_short(s):
    l = s.split()
    newList = []
    for i in range(len(l)):
        newList.append(len(l[i]))
    newList.sort()
    return newList[0]
print(find_short("hello my name is tom"))
