
message = input("do you want to encrypt this response?\n")
newText = ''
if message == "yes":
    for l in message:
        newText += chr(ord(l) + 3)

print(newText)
