# Read the file line by line
# Read only the 5th line of the file
# Read only the 5 first characters of the file
# Read all the file and return it as a list of strings. Then split each word
# Find out how many occurences of the names "Darth", "Luke" and "Lea" are in the file
# Append your first name at the end of the file
# Append "SkyWalker" next to each first name "Luke"

for line in open('http://www.practicepython.org/assets/nameslist.txt'):
    print(line)
with open('http://www.practicepython.org/assets/nameslist.txt') as f:
    f.readline(5)
    

