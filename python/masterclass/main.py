# def get_name(spam, num):
#     def inner_func():
#         if num == 42:
#             spam("Life, the universe and everything")
#         else:
#             spam()
    
#     return inner_func

# @get_name
# def greet(name):
#     print(f"Hello, {name}")

# greet()

class Point:
    def __init__(self, x: int, y: int):
        self.x = x
        self.y = y

    def __add__(self, other) -> bool:
        return Point(self.x + other.x, self.y + other.y)
    
    def __repr__(self):
        return f"Point({self.x}, {self.y})"
    
    def __str__(self):
        return f"Hello {self.x}"
    
p1 = Point(1, 2)
p2 = Point(2, 3)

print((p1 + p2).__dict__)
print(p1)
print(p2)
print(repr(p1))