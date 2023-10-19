def get_name(spam, num):
    def inner_func():
        if num == 42:
            spam("Life, the universe and everything")
        else:
            spam()
    
    return inner_func

@get_name
def greet(name):
    print(f"Hello, {name}")

greet()