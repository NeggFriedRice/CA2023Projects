# https://www.codewars.com/kata/57814d79a56c88e3e0000786/python

def encrypt_once(string):
  arr = []
  for i in range(len(string)):
    arr.append(string[i])

  encrypted_odd = []
  encrypted_even = []
  for j in range(len(arr)):
    if j % 2 == 0:
      encrypted_even.append(arr[j])
    else:
      encrypted_odd.append(arr[j])
  
  result = encrypted_odd + encrypted_even

  return result
# print(encrypt_once("012345"))

def encrypt(string, n):
  for i in range(n):
    text = encrypt_once(string)
  return text

print(encrypt("012345", 3))