def find_difference(a, b):
    vol_a = 1
    vol_b = 1
    for i in range(len(a)):
      vol_a = vol_a * a[i]
    for i in range(len(b)):
      vol_b = vol_b * b[i]
    return abs(vol_a - vol_b)


print(find_difference(a, b))