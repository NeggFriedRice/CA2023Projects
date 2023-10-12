# https://www.codewars.com/kata/52fba66badcd10859f00097e/python

# Trolls are attacking your comment section!

# A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

# Your task is to write a function that takes a string and return a new string with all vowels removed.

# For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

# Note: for this kata y isn't considered a vowel.

def dismevowel(string_):
    # Print vowels
    vowels = "aeiou"

    # Split string into individual characters
    newString = list(string_)
    disemvoweled = []
    for i in range(len(newString)):
        if newString[i].lower() not in vowels:
            disemvoweled.append(newString[i])

    # Join new list together
    return "".join(disemvoweled)

print(dismevowel("hello there"))