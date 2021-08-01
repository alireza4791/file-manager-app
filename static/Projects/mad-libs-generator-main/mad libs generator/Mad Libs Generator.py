import random

madlibs = [input("Enter the list items : ") for i in range(3)]

s = random.choice(madlibs)

print(s)

n = input("Enter Noun : ")

s = s.replace("blank", n)
print(s)
