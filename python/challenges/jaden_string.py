# https://www.codewars.com/kata/5390bac347d09b7da40006f6/solutions/python

def to_jaden_case(string):
    # Split the string
    split = string.split()
    # Capitalize each letter and assign to new variable
    capitalized = [word.capitalize() for word in split]
    # Join string back together
    return " ".join(capitalized)

print(to_jaden_case("hello there how are you"))
