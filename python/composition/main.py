import rpg

aragorn = rpg.Ranger("Aragorn", "Human", 100, 50)
galadriel = rpg.Mage("Galadriel", "Elf", 120, 75)
frodo = rpg.Burglar("Frodo", "Hobbit", 50, 25)
saruman = rpg.Wizard("Saruman", "Human", 80, 100)

frodo.inv.set_currency(9, 47, 23)
aragorn.inv.set_currency(20, 50, 0)

chest = rpg.Chest(["Long sword", "Iron helm"], 2, 25, 50)


saruman.battle(aragorn)
frodo.battle(galadriel)
print(galadriel.mana)
galadriel.battle(frodo)
print(galadriel.mana)

# print(aragorn.__dict__)
print(galadriel.__dict__)
# print(frodo.__dict__)

# print(chest.inv.__dict__)

# Frodo loots a chest!
print(chest.inv.transfer(frodo.inv))





# print(frodo.inv.__dict__)
# print(frodo.inv.get_currency())
# print(chest.inv.__dict__)

