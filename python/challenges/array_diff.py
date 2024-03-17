def array_diff(a, b):
  for i in a:
    for j in b:
      if i == j:
        a.remove(i)

  return a