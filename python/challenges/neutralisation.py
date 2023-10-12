# https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/python

# Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

# When positives and positives interact, they remain positive.
# When negatives and negatives interact, they remain negative.
# But when negatives and positives interact, they become neutral, and are shown as the number 0.

def neutralize(s1, s2):
    output = []
    for i in range(len(s1)):
        if s1[i] == "+" and s2[i] == "+":
            output.append("+")
        elif s1[i] == "+" and s2[i] == "-":
            output.append("0")
        elif s1[i] == "-" and s2[i] == "-":
            output.append("-")
        else:
            output.append("0")
    # Join string
    output = "".join(output)
    return output

# Alternate solution
# def neutralize(s1, s2):
#     result = ""
#     for i in range(len(s1)):
#         if s1[i] == s2[i]:
#             result += s1[i]
#         else:
#             result += "0"
#     return result
print(neutralize("-++-", "-+-+"))

