# def hello(name, age=21):
#     print(f"Hello {name}, you are {age}")

# def goodbye():
#     print("Goodbye")

# # Main
# # Parameters can be variables that are passed to the function
# # x = "John"
# # goodbye()
# # hello(name=x)

# # Variables can be assigned based on input too
# hello(name=input("What's your name? "), age=input("What's your age? "))

TAX_RATE = 0.1
FLAT_SHIPPING = 10

def add_tax(amount):
    return amount * (1 + TAX_RATE)

def add_shipping(amount):
    return amount + FLAT_SHIPPING

def calc_grand_total(amount):
    return add_tax(add_shipping(amount))

subtotal = float(input("Subtotal: "))
grand_total = calc_grand_total(subtotal)
print(f"Total: ${grand_total}")