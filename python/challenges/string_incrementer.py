def increment_string(strng):
	length = len(strng) -1

	array = []
	for i in range(length, 0, -1):
		if strng[i].isdigit():
			array.append(strng[i])
		else:
			break
	
	if strng == "":
		return '1'
	elif strng[-1] == str(0):
		return strng[:-1] + str(1)

	elif len(array) == 0:
		return strng + str(1)
	
	else:
		zeroes_array = []
		numbers_array = []
		for i in range(len(array)):
			if array[i] == '0':
				zeroes_array.append("0")
			else:
				numbers_array.append(array[i])
		numbers_array.reverse()
		trailing_nums = "".join(numbers_array)
		new_num = int(trailing_nums) + 1
		new_strng = strng[0:(-len(array))]
		final_strng = "".join(new_strng) + "".join(zeroes_array)
		return final_strng + str(new_num)

print(increment_string("foobar00"))
