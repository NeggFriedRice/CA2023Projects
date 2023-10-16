# https://www.codewars.com/kata/5882b052bdeafec15e0000e6

class Quark:
    def __init__(self, color, flavor):
        self.color = color
        self.flavor = flavor
        self.baryon_number = 1/3

    def interact(self, otherQuark):
        temp = self.color
        self.color = otherQuark.color
        otherQuark.color = temp

q1 = Quark("red", "up")
q2 = Quark("blue", "strange")

print(q1.__dict__)
print(q2.__dict__)

q1.interact(q2)

print(q1.__dict__)
print(q2.__dict__)
