# https://www.codewars.com/kata/5467e4d82edf8bbf40000155/python

# Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

def descending_order(num):
    # Split number into a list
    # Convert input to string to iterate over
    stringedNum = str(num)
    print(stringedNum)
    newList = []
    # Iterage over each digit in string
    for i in range(len(stringedNum)):
        newList.append(stringedNum[i])
    print(newList)
    # Sort list
    newList.sort(reverse=True)
    print(newList)
    # Combine list
    combined = "".join(newList)
    # Print combined list but convert to int
    print(combined)
    print(type(combined))
    combinedInt = int(combined)
    print(combinedInt)
    print(type(combinedInt))

    # Alternate way of solving
    # s = str(num)
    # s = list(s)
    # print(s)
    # s = sorted(s)
    # print(s)
    # s = reversed(s)
    # print(s)
    # s = "".join(s)
    # print(s)
    # return int(s)
    
descending_order(849384756387)