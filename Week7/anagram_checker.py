text_file = []
with open('sowpods.txt', 'r') as file:
    text_file = file.read().split('\n')

class AnagramChecker:
    
    def __init__(self, text_file):
        self.text_file = text_file    
    
    def is_valid_word(self,word):
        return word in self.text_file
    
    def get_anagrams(self,word):
        anagrams = []
        def all_anagrams(word):
            if len(word) <= 1:
                return [word]

            anagrams = set()
            for i in range(len(word)):
                remaining = word[:i] + word[i+1:]
                sub_anagrams = all_anagrams(remaining)
                for anagram in sub_anagrams:
                    new_word= word[i]+anagram
                    anagrams.add(new_word)
                        
            return anagrams
        
        valid_words = set(line.strip() for line in self.text_file)

        all = all_anagrams(word.upper())
        for anagram in all:
            if self.is_valid_word(anagram):
                anagrams+= [anagram]
        return anagrams
                    
        

a = AnagramChecker(text_file)
print(a.get_anagrams("MEAT"))
                        
                    
                    
    
    