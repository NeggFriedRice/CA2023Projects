def capitals(word):
    indices = []
    for i in range(len(word)):
        if word[i].isupper():
            indices.append(i)

    return indices