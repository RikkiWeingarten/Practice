from anagram_checker import AnagramChecker

text_file = []
with open('sowpods.txt', 'r') as file:
    text_file = file.read().split('\n')

word = input("""Please enter a word
[Press 1 to exit]
""")
while word != "1":
    word = word.strip()
    if len(word.split(" ")) > 1:
        word = input("Please enter a single word")
        
        continue
    for char in word:
        # If char is not an upper case or lower case value
        if not ((ord(char) >=65 and ord(char) <=90) or (ord(char) >= 97 and ord(char) <=122)):
            word = input("Please enter letter values only\n")
            break

    checker = AnagramChecker(text_file)
    anagrams = checker.get_anagrams(word)
    string = ""
    for i in range(len(anagrams)):
        if i == len(anagrams) - 1:
            string += anagrams[i] + "."
        else:
            string += anagrams[i] + ", "

    print(f"""YOUR WORD: "{word}"
this is a valid English word.
Anagrams for your word: {string}""")
    
    word = input("""Please enter a word
[Press 1 to exit]
""")



