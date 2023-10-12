# https://www.codewars.com/kata/5168bb5dfe9a00b126000018/python

# Complete the solution so that it reverses the string passed into it.

# 'world'  =>  'dlrow'
# 'word'   =>  'drow'

def solution(string):
    reverse = list(reversed(string))
    newString = "".join(reverse)
    return newString

print(solution("world"))