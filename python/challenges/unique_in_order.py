# https://www.codewars.com/kata/54e6533c92449cc251001667/python

# Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

# For example:

# unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
# unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
# unique_in_order([1, 2, 2, 3, 3])   == [1, 2, 3]
# unique_in_order((1, 2, 2, 3, 3))   == [1, 2, 3]

def unique_in_order(sequence):
    newList = []
    for i in range(len(sequence)-1):
        if sequence[i+1] != sequence[i]:
            newList.append(sequence[i])
        else: 
            continue
    if len(sequence) > 0:
        newList.append(sequence[-1])
    return newList

# Alternate solution
# def unique_in_order(iterable):
#     k = []
#     for i in iterable:
#         if k == []:
#             k.append(i)
#         elif k[-1] != i:
#             k.append(i)
#     return k

print(unique_in_order('AAAABBBCCDAABBB'))