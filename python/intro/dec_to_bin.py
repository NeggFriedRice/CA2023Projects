def decimal_to_binary(decimal):
    number = decimal
    newList = []
    while number > 1:
        newList.append(number % 2)
        number = number // 2
    newList.append(1)
    newList.reverse()
    return int("".join(map(str, newList)))

print(decimal_to_binary(349584))