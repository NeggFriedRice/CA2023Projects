def find_average(numbers):
    sum = 0
    for i in range(len(numbers)):
        sum += numbers[i]
    try:
        return sum / len(numbers)
    except:
        return 0