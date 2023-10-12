# https://edabit.com/challenge/gwqqc5p3oiFXRJAQm

# Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

def football_points(wins, draws, losses):
    return wins * 3 + draws * 1 + losses * 0

print(football_points(3, 4, 2)) # 13

print(football_points(5, 0, 2)) # 15

print(football_points(0, 0, 1)) # 0