# https://edabit.com/challenge/mDzheHpwtqyXePEBE

# Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

def sum_polygon(n):
    return (n - 2) * 180

print(sum_polygon(3)) # 180

print(sum_polygon(4)) # 360

print(sum_polygon(6)) # 720