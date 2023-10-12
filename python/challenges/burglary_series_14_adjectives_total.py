# Burglary Series (14): Adjectives Total

# You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given a dictionary of insults, return the total amount of insults used.

def total_amount_adjectives(insults):
    return len(insults)


print(total_amount_adjectives({ "a": "moron" })) # 1

print(total_amount_adjectives({ "a": "idiot", "b": "idiot", "c": "idiot" })) # 3

print(total_amount_adjectives({ "a": "moron", "b": "scumbag", "c": "moron", "d": "dirtbag" })) # 4