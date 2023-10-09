
# # Define raining variable as empty string
# raining = ""

# # Loop while the raining variable is still a string (i.e. not boolean True or False)
# while isinstance(raining, str):
#     # Ask user for input
#     raining = input("Is it raining? True or False: ")
#     # Assign boolean value of True if "true" is input
#     if raining.lower() == "true":
#         raining = True
#     # Assign boolean value of False if "false" is input
#     elif raining.lower() == "false":
#         raining = False

# # Ask user for temperature
# temperature = int(input("What's the temperature? "))

# # Evaluate raining boolean value and temperature integer
# if raining and temperature < 15:
#     print("It's wet and cold")
# elif not raining and temperature < 15:
#     print("It's not raining but cold")
# elif not raining:
#     print("It's warm but not raining")
# else:
#     print("It's warm and raining")


def weather(raining, temperature):
    if raining:
        if temperature < 15:
            print("It's wet and cold")
        else:
            print("It's warm and raining")
    else:
        if temperature < 15:
            print("It's not raining but cold")
        else:
            print("It's warm but not raining")
