from collections import Counter

class Text:
    def __init__(self, text):
        self.text = text
    
    def frequency(self, word):
        return f"There are {self.text.count(word)} occurences of the word {word}"
    def common_word(self):
        words = self.text.split()
        word_counts = Counter(words)
        most_common_word = word_counts.most_common(1)[0][0]
        return most_common_word
    def unique_words(self):
        unique = []
        words = self.text.split()
        word_counts = Counter(words)
        for word, count in word_counts.items():
            if count == 1:
                unique += [word]
        
        return unique
    
    @classmethod
    def from_file(self, file):
        with open(file) as text:
            string = text.read()
            return Text(string)


class TextModification(Text):
    def __init__(self, text):
        super().__init__(text)
    
    def remove_punctuation(self):
        marks = ['.', ',', '?', '!', ':', ';', "'", '"', "'", '–', '—',
                                     '(', ')', '[', ']', '{', '}', '...', '-', '/', '\\', '|', '~', '&', '@', '#', '$', '%', '^', '*', '+', '=']

        for mark in marks:
            self.text = self.text.replace(mark, '')
    def remove_stop_words(self):
        stop_words = [
            'a', 'an', 'the', 'and', 'or', 'but', 'if', 'because', 'in', 'on', 'at', 'with', 'for',
            'to', 'of', 'he', 'she', 'it', 'they', 'we', 'you', 'is', 'are', 'was', 'were', 'be',
            'have', 'had', 'very', 'too', 'just', 'only', 'this', 'that', 'these', 'those', 'then',
            'when', 'where', 'how', 'why', 'there', 'here', 'some', 'any', 'one', 'two', 'three', 'so'
        ]
        for word in stop_words:
            self.text = self.text.replace(word, '')
    def remove_special_characters(self):
        special_characters = [
            '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '{', '}', '[', ']',
            '|', '\\', ':', ';', '"', "'", '<', '>', ',', '.', '/', '?', '~', '`', '©', '®', '™', '°',
            '±', '§', '¶', '•', '—', '–', '«', '»', '…', '€', '£', '¥', '₣', '₤', '₱', '₲', '₭', '₨',
            '₩', '₫', '₹', '৳', '₿', '₿'
        ]
        for word in special_characters:
            self.text = self.text.replace(word, '')
            
    @classmethod
    def from_file(cls, file):
        text_instance = Text.from_file(file)
        return cls(text_instance.text)


txt = TextModification.from_file('the_stranger.txt')
txt.remove_punctuation()
print(txt.text)

