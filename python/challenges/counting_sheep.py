# https://www.codewars.com/kata/54edbc7200b811e956000556/python

# Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

# For example,

# [True,  True,  True,  False,
#   True,  True,  True,  True ,
#   True,  False, True,  False,
#   True,  False, False, True ,
#   True,  True,  True,  True ,
#   False, False, True,  True]
# The correct answer would be 17.

# Hint: Don't forget to check for bad values like null/undefined

# def count_sheeps(sheep):
#     sheepCount = 0
#     for i in range(len(sheep)):
#         if sheep[i] == True:
#             sheepCount += 1

#     return sheepCount

# Alternate solution
def count_sheeps(sheep):
    return sheep.count(True)

print(count_sheeps([True,  True,  True,  False,
  True,  True,  True,  True ,
  True,  False, True,  False,
  True,  False, False, True ,
  True,  True,  True,  True ,
  False, False, True,  True]))