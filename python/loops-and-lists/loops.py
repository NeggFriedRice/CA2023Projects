# spam = 0
# if spam < 5:
#     print("hello")
#     spam += 1
# print("Done")

# for spam in range(5):
#     print(f"{spam}")

# # Count from 1 to 10 in increments of 3
# for spam in range(1, 13, 3):
#     print(f"{spam}")

import random

count = int(input("How many random integers? "))

for i in range(count):
    print(random.randint(1, 100))