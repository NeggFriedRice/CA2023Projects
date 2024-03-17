# https://www.codewars.com/kata/56269eb78ad2e4ced1000013/python

# You might know some pretty large perfect squares. But what about the NEXT one?

# Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

# If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

# Examples:(Input --> Output)

# 121 --> 144
# 625 --> 676
# 114 --> -1 since 114 is not a perfect square

# def find_next_square(sq):
#     i = 0
#     while i < sq:
#         if i * i == sq:
#             return ((i+1) * (i+1))
#         i += 1
#     return -1

def find_next_square(sq):
  for i in range(sq):
    if i * i == sq:
      return (i+1) ** 2
  else:
    return -1

print(find_next_square(121))