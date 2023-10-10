
# def calc_frame(ball1, ball2, ball3):
#     if ball1 == 10:
#         return ball1 + ball2 + ball3
#     elif ball2 == 10:
#         return ball2 + ball3
#     elif ball1 + ball2 == 10:
#         return ball1 + ball2 + ball3
#     elif ball1 + ball2 != 10:
#         return ball1 + ball2

# # Main
# print(calc_frame(6, 2, 9))     # 8
# print(calc_frame(10, 6, 2))    # 18
# print(calc_frame(7, 3, 4))     # 14
# print(calc_frame(0, 10, 5))    # 15
# print(calc_frame(5, 0, 10))    # 5

# Worked solution from Matt
def calc_frame(ball1, ball2, ball3):
    if ball1 == 10 or ball1 + ball2 == 10:
        return ball1 + ball2 + ball3
    else:
        return ball1 + ball2