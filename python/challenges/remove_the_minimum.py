# https://www.codewars.com/kata/563cf89eb4747c5fb100001b/python

def remove_smallest(numbers):
    newList = numbers
    newList.remove(min(numbers))


print(remove_smallest([5,4,3,6,2,2]))