import random
def sort_words(words):
    for word in sorted(words):
        print(word)


def longest_word(words):
    long = 0
    long_word = ""
    for word in words:
        if len(word) > long:
            long = len(word)
            long_word = word
    return long_word




list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728
pairs = {}
for num in list_of_numbers:
    