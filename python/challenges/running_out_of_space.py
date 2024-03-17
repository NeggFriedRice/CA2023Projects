# https://www.codewars.com/kata/56576f82ab83ee8268000059

def spacey(array):
    final_array = []
    no_spaces = ""
    for word in array:
        no_spaces += word
        final_array.append(no_spaces)
    return final_array

print(spacey(['kevin', 'has','no','space']))