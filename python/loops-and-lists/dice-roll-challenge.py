import random

def roll_die(sides):
    # Pick a random integer between 1 and 6
    return random.randint(1, sides)

def roll(roll_string):
    rolls = []
    # Split roll string into num_dice and sides
    parts = roll_string.split("d")
    num_dice = int(parts[0])
    sides = int(parts[1])
    # Roll num_dice and put each result in a list
    for die in range(num_dice):
        result = roll_die(sides)
        rolls.append(result)
    return rolls

# Main
print(roll("3d6"))