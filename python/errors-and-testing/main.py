class NegativeNumberError(Exception):
    pass

try:
    n = int(input("Enter a numerator: "))
    d = int(input("Enter a denominator: "))

    if n < 1 or d < 1:
        raise NegativeNumberError()
    
    q = n / d # Exceptions was raised

    print(q)

except ZeroDivisionError:
    print("Denominator cannot be zero")

except ValueError as e:
    print("Inputs must be integers")

except NegativeNumberError:
    print("Must be positive integers")

except Exception as e:
    print("Something went wrong")
    print(e)