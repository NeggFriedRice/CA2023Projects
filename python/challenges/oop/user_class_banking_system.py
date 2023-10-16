# https://www.codewars.com/kata/5a03af9606d5b65ff7000009/train/python

class User:
    def __init__(self, name, balance, checking_account):
        self.name = name
        self.balance = balance
        self.checking_account = checking_account


    def withdraw(self, money):
        if money > self.balance:
            raise ValueError("Insufficient balance")
        else: 
            self.balance -= money
            return f"{self.name} has {self.balance}."
        
    def check(self, otherAcc, money):
        if otherAcc.checking_account == False or otherAcc.balance == 0:
            raise ValueError("Other user does not have an account or has no money")
        else:
            if money > otherAcc.balance:
                raise ValueError("Other account does not have enough money.")
            else:
                self.balance += money
                otherAcc.balance -= money
                return f"{self.name} has {self.balance} and {otherAcc.name} has {otherAcc.balance}."
        
    def add_cash(self, money):
        self.balance += money
        return f"{self.name} has {self.balance}."

Joe = User("Joe", 70, True)
Jeff = User("Jeff", 70, False)

print(Joe.check(Jeff, 500))
print(Joe.balance)