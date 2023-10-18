
class Customer:
    def __init__(self, customer, address, dob):
        self.customer = customer
        self.address = address
        self.dob = dob

class BankAccount:

    def __init__(self, customer, balance):
        self.customer = customer
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount < self.balance:
            self.balance -= amount
            return self.balance
        else:
            print(f"Insufficient funds. Cannot withdraw {amount}. Funds available: {self.balance}")
            return 0
    
    def transfer(self, amount, to_account):
        return to_account.deposit(self.withdraw(amount))

# Main

acc1 = Customer("John Smith", "12 Any Street, Brisbane, QLD 400", "28/08/1991")
acc2 = BankAccount("Mary Jones", 500)
bankAcc1 = BankAccount(acc1, 1000)


# print(f"{acc1.name}: {acc1.balance}")
# print(f"{acc2.name}: {acc2.balance}")
# acc1.deposit(5000)
# print(f"{acc1.name}: {acc1.balance}")
# print(acc1.transfer(500, acc2))
# print(f"{acc1.name}: {acc1.balance}")
# print(f"{acc2.name}: {acc2.balance}")

print(acc1.dob)
print(bankAcc1.customer.dob)


