word = input("Enter a word\n")
dictionary = {}
for i in range(len(word)):
    if word[i] not in dictionary:
        dictionary[word[i]] = [i]
    else:
        dictionary[word[i]] = dictionary[word[i]] + [i]



items_purchase = {
    "Water": "$1",
    "Bread": "$3",
    "TV": "$1,000",
    "Fertilizer": "$20"
}

wallet = "$300"
afford = []
for key, value in items_purchase.items():
    if int(wallet.replace('$', '')) >= int(value.replace(",", '').replace('$', '')):
        afford += [key]
print(afford)
afford.sort()
if len(afford) == 0:
    print("nothing")
