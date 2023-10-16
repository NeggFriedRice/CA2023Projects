# https://www.codewars.com/kata/585d7d5adb20cf33cb000235/python

# There is an array with some numbers. All numbers are equal except for one. Try to find it!

# find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
# find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55
# It’s guaranteed that array contains at least 3 numbers.

# Make list of unique numbers
# Find count = 1 in unique numbers list

def find_uniq(arr):
    uniqueNum = []
    for i in arr:
        if i not in uniqueNum:
            uniqueNum.append(i)

    if arr.count(uniqueNum[0]) > arr.count(uniqueNum[1]):
        return uniqueNum[1]
    else:
        return uniqueNum[0]
    
print(find_uniq([ 1, 1, 1, 2, 1, 1 ]))