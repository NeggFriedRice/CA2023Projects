# https://www.codewars.com/kata/5679aa472b8f57fb8c000047/python

def find_even_index(arr):
    for i in range(len(arr)):
        if sum(arr[0:i]) == sum(arr[i+1:]):
            return i
    return -1
        
arr = [20,10,30,10,10,15,35]

print(find_even_index(arr))

