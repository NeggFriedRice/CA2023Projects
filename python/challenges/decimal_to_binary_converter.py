def decimal_to_binary(decimal):
    newList = []
    number = decimal
    while number > 1:
        remainder = number % 2
        newList.append(remainder)
        number // 2
    print(newList)