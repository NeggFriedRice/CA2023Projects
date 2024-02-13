def count_by(x, n):
    list = []
    for i in range(1, n + 1):
        list.append(x * i)
    return list

print(count_by(2, 5))