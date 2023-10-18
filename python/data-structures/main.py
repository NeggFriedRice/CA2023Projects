from my_module import foo, person
from colort import colorize, ForegroundColor as fc, BackgroundColor as bc, Style

# my_module.foo(my_module.person)

# # Will print the location of the module that it is retrieving
# print(my_module)

colored_text = colorize("Hello World!", bc.YELLOW, fc.GREEN, Style.BOLD)
print(colored_text)