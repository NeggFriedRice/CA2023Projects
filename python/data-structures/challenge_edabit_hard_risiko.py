def risiko(attacker, defender):
    defender_losses = 0
    # Determine the largest die for attacker and defender
    attacker.sort(reverse=True)
    defender.sort(reverse=True)

    # For index from 0 to length of shortest list
    for index in range(min(len(attacker), len(defender))):
        # If attacker die > defender die, defender loses an army
        if attacker[index] > defender[index]:
            defender_losses += 1

    return defender_losses

print(risiko([3, 6, 4], [2, 5, 3]))
print(risiko([3, 6], [6, 4, 4]))
print(risiko([3, 1], [1]))