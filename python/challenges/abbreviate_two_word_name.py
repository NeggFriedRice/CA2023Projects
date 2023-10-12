# https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/python

# Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

# The output should be two capital letters with a dot separating them.

# It should look like this:

# Sam Harris => S.H

# patrick feeney => P.F

def abbrev_name(name):
    s = name.split(" ")
    print(s)
    newList = []
    # Get first letter of words
    for i in range(len(s)):
        newList.append(s[i][0].upper())
    print(newList)
    # Join them back up
    combined = ".".join(newList)
    return combined

print(abbrev_name("Thomas Loo"))