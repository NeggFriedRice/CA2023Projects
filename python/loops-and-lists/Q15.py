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
        # Take larger value from temp and assign to the index after index i
        arr[i + 1] = temp
        # After finding first pair out of order, break out of while loop
        break
    i += 1
print(arr[:])
