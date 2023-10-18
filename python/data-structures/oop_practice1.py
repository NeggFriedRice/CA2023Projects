class Employee:

    num_of_emps = 0
    raise_amount = 1.04

    def __init__(self, first, last, pay):
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first + "." + last + "@company.com"
        
        Employee.num_of_emps += 1

    def displayInfo(self):
        return f"{self.first} {self.last}"

    def apply_raise(self):
        self.pay = int(self.pay * self.raise_amount)


emp_1 = Employee("Corey", "Schafer", 50000)
emp_2 = Employee("Test", "User", 60000)
emp_3 = Employee("Hello", "Goodbye", 60000)

print(emp_1.pay)

class Menu:
    def __init__(self, ingredients, quantity, price):
        self.ingredients = ingredients
        self.quantity = quantity
        self.price = price
    
    def order(self):
        self.food = input("What would you like to order?")

    def welcome(self):
        self.welcomeMessage = "Welcome to Food Station 3000!"

class Order:
    def __init__(self, tableNumber, timeOfOrder, foodItem, quantity):
        self.tableNumber = tableNumber
        self.timeOfOrder = timeOfOrder
        self.foodItem = foodItem
        self.quantity = quantity


class MenuItem:
    def __init__(self, category, ingredientsInfo, price):
        pass

class Inventory:
    def __init__(self):
        pass

# Anything that needs a blueprint

# - Menu items, that are repeatable (name, price, quantity, ingredients)
# - Orders are repeatable (table number, time of order, number of people, order total)

