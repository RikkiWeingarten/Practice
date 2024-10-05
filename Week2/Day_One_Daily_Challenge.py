import random

user_string = input("Enter a string with exactly 10 characters\n")
if len(user_string) < 10:
    print("string not long enough")
elif len(user_string) > 10:
    print("string too long")
else:
    print("perfect string")

print(user_string[0])
print(user_string[-1])

str = ""
for c in user_string:
    str += c
    print(str)

l = list(user_string)
random.shuffle(l)
print(''.join(l))
