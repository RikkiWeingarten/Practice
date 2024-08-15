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


sort_words(['without', 'hello', 'bag', 'world'])
print(longest_word(['without', 'hello', 'bag', 'world']))
