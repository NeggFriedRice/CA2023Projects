def increment_string(strng):
	length = len(strng) -1

	array = []
	for i in range(length, 0, -1):
		if strng[i].isdigit():
			array.append(strng[i])
		else:
			break
		
	if len(array) == 0:
		return strng + str(1)
	else:
		array.reverse()
		trailing_nums = "".join(array)
		new_num = int(trailing_nums) + 1
		new_strng = strng[0:(-len(array))]
		return new_strng + str(new_num)

print(increment_string("foo15"))
