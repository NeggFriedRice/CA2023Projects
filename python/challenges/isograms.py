# https://www.codewars.com/kata/54ba84be607a92aa900000f1/python

# An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

# Example: (Input --> Output)

# "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

# isIsogram "Dermatoglyphics" = true
# isIsogram "moose" = false
# isIsogram "aba" = false

# Process
# Take each unique character append to list
# If there is a repeat character, return False

def is_isogram(string):
    string = string.lower()
    for i in string:
        # if checkString.count(i) == 1:
        #     continue
        if string.count(i) >= 2:
            return False
    return True
        
print(is_isogram("aba"))
