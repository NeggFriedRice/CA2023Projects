def fizzbuzz():
    fizz = int(input("What is fizz? "))
    buzz = int(input("What is buzz? "))
    num = int(input("What number do you want to count up to? "))

    print("Ok here we go! \n")

    for i in range(num):
        if i % (fizz * buzz) == 0:
            print("Fizz buzz") 
        elif i % fizz == 0:
            print("Fizz")
        elif i % buzz == 0:
            print("Buzz")
        else:
            print(i)

fizzbuzz()