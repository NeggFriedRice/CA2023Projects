# https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/python

# This time no story, no theory. The examples below show you how to write function accum:

# Examples:
# accum("abcd") -> "A-Bb-Ccc-Dddd"
# accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
# accum("cwAt") -> "C-Ww-Aaa-Tttt"
# The parameter of accum is a string which includes only letters from a..z and A..Z.

def accum(s):
    splitString = list(s)
    newString = []
    for i in range(len(splitString)):
        newString.append((splitString[i] * (i+1)).capitalize())
    finalString = "-".join(newString)
    return finalString

print(accum("cwAt"))