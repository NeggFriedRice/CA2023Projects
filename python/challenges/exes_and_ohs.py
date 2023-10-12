# https://www.codewars.com/kata/55908aad6620c066bc00002a/python

# Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

# Examples input/output:

# XO("ooxx") => true
# XO("xooxx") => false
# XO("ooxXm") => true
# XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
# XO("zzoo") => false

def xo(s):
    xCounter = 0
    oCounter = 0

    for letter in s:
        if letter.lower() == "x":
            xCounter += 1
        elif letter.lower() == "o":
            oCounter += 1

    if xCounter == oCounter:
        return True
    else:
        return False
    
# Alternate solution
# def xo (s):
#     s = s.lower()
#     return s.count("x") == s.count("o")

print (xo("xoooxx"))