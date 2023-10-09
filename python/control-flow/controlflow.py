# def calculate_ticket_price_for_performer(regular_ticket_price, performer_type):
#    juggler = 0.5
#    magician = 0.2
#    escapeArist = 0
#    everyoneElse = 0.8

#    match performer_type:
#       case "Juggler":
#          return regular_ticket_price * juggler
#       case "Magician":
#          return regular_ticket_price * magician
#       case "Escape Artist":
#          return regular_ticket_price * escapeArtist
#       case _:
#          return regular_ticket_price * everyoneElse
   
# print(calculate_ticket_price_for_performer(100, "Juggler"))

arr = [5, 22, 29, 39, 19, 51, 78, 96, 84]
i = 0

# Begin scanning through all numbers of the array
while (i < len(arr) - 1): 
    # If value at index i is larger than the next value in the array
    if arr[i] > arr[i + 1]:
        # Define temp variable to store the larger value in index i
        temp = arr[i]
        # Assign smaller value to index i
        arr[i] = arr[i + 1]
        # Take larger value from temp and assign to the index after smaller value
        arr[i + 1] = temp
        # After finding first pair out of order, break out of while loop
        break
    i += 1
print(arr[:])