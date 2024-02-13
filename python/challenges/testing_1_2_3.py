def number(lines):
    list = []
    for i in range(len(lines)):
        list.append(f"{i+1}: " + lines[i])
    return list

lines = ["a", "b", "c"]
print(number(lines))