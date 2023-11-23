# Get input
creditCard = input("What's your credit card number? ")

# Remove any spaces from string
creditNumber = "".join(creditCard.split())

# Check if first number is number 4 and if number is 13 or 16 digits long
if creditNumber[0] == "4" and (len(creditNumber) == 13 or len(creditNumber) == 16):
        # Bank number is digits 2 to 6
        bankNumber = creditNumber[1:6]
        # Account number is all remaining digits after bank number, but not including last number which is the check digit
        accountNumber = creditNumber[6:-1]
        # Print bank number and account number
        print(f"Your bank number is {bankNumber} and account number is {accountNumber}")
else:
        print("This is not a valid Visa credit card number")