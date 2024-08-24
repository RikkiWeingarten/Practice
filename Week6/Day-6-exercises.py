import json
import random
# 🌟 Exercise 1 – Random Sentence Generator
# Instructions
# Description: In this exercise we will create a random sentence generator. We will do this by asking the user how long the sentence should be and then printing the generated sentence.



def get_words_from_file(file):
    with open(file, 'r') as file:
        return file.readlines()
    

def get_random_sentence(length):
    words = get_words_from_file('sowpods.txt')
    sentence = ""
    for i in range(length):
        rand_int = random.randint(0, len(words))
        if i == length -1:
            sentence += words[rand_int].replace('\n', '') + "."
        else:
            sentence += words[rand_int].replace('\n', '') + " "
    return sentence.lower()
    
def main():
    input("Enter a length and I will generate a random sentence with that length, press enter to continue...\n")
    try:
        length = int(input("Enter a sentence length between 2 and 20\n"))
        if length < 2 or length > 20:
            print("Please enter a number between 2 and 20")
        else:
            print(get_random_sentence(length))
    except:
        print("Please enter a valid input")

main()
    


# 🌟 Exercise 2: Working with JSON
# Instructions
sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""
dictionary = json.loads(sampleJson)

print(dictionary["company"]["employee"]["payable"]["salary"])
dictionary["company"]["employee"]["birth_date"] = "January 2, 1998"
print(dictionary)

with open('file.json', 'w') as json_file:
    json.dump(dictionary, json_file)

# Access the nested “salary” key from the JSON-string above.
# Add a key called “birth_date” to the JSON-string at the same level as the “name” key.
# Save the dictionary as JSON to a file.
