# https://www.codewars.com/kata/56747fd5cb988479af000028/python\

# You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

# #Examples:

# Kata.getMiddle("test") should return "es"

# Kata.getMiddle("testing") should return "t"

# Kata.getMiddle("middle") should return "dd"

# Kata.getMiddle("A") should return "A"

def get_middle(s):
    # if len(s) == 2 or len(s) == 1:
    #     return s
    if len(s) % 2 == 0:
        while len(s) > 2:
            s = s[1:-1]
        return s
    else:
        while len(s) > 1:
            s = s[1:-1]
        return s

print(get_middle("middle"))
