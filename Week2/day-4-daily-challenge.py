# Challenge 1
while True:
    try:
        num = int(input("Enter a number\n"))
        break
    except:
        pass
    
while True:
    try:
        length = int(input("Enter a length\n"))
        break
    except:
        pass


    
for i in range(length):
    print(num*(i+1))

# number: 7 - length 5 ➞[7, 14, 21, 28, 35]

# number: 12 - length 10 ➞[12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

# number: 17 - length 6 ➞[17, 34, 51, 68, 85, 102]


# Challenge 2
string = input("Enter a string \n")
new_string = ""
for char in string:
    if new_string == "" or new_string[-1] != char:
        new_string+=char
print(new_string)

    
    
# user's word : "ppoeemm" ➞ "poem"

# user's word : "wiiiinnnnd" ➞ "wind"

# user's word : "ttiiitllleeee" ➞ "title"

# user's word : "cccccaaarrrbbonnnnn" ➞ "carbon"
# Notes
# Final strings won’t include words with double letters (e.g. “passing”, “lottery”).

