# https://www.codewars.com/kata/57036f007fd72e3b77000023

# You are given a method called main, make it print the line Hello World!, (yes, that includes a new line character at the end) and don't return anything

# Note that for some languages, the function main is the entry point of the program.

# Here's how it will be tested:

#     Solution.main("parameter1", "parameter2","parametern")

class Solution:
    
    def main(*args):
        print("Hello world!")


print(Solution.main())