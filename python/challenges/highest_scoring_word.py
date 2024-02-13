def high(x):
    letters = {"a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9, "j": 10, "k": 11, "l": 12, "m": 13, "n": 14, "o": 15, "p": 16, "q": 17, "r": 18, "s": 19, "t": 20, "u": 21, "v": 22, "w": 23, "x": 24, "y": 25, "z": 26}
    # Calculate score for single word
    
    listWords = x.split(" ")

    max_score = 0
    word = ""

    for words in listWords:
        sum = 0
        for letter in words:
            for k, v in letters.items():
                if letter == k:
                    sum += v
        if sum > max_score:
            max_score = sum
            word = words

    return str(word)

print(high("man i need a taxi up to ubud"))
