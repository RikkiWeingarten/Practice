# Exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
dictionary = {}
for i in range(len(values)):
    dictionary[keys[i]] = values[i]
print(dictionary)

# Exercise 2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_cost = 0
for name, age in family.items():
    if age > 12:
        cost = 15
    if age > 3:
        cost = 10
    else:
        cost = 0

    print(f"{name} ${cost}")
    total_cost += cost
print(total_cost)

# Exercise 3
brand = {
    "name": "Zara",
    "creation_date": "1975",
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H & M", "Benetton"],
    "number_stores": 7000,
    "major_color":
    {"France": "blue",
     "Spain": "red",
     "US": ["pink", "green"]
     }

}
brand["number_stores"] = 2
print(f"Zara clients are {brand["type_of_clothes"]}")
brand["country_creation"] = "Spain"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
brand.pop("creation_date")

print(brand["international_competitors"][-1])
print(*brand["major_color"]["US"])
print(len(brand))
for key in brand:
    print(key)


more_on_zara = {
    "creation_date": "1975",
    "number_stores": 10000
}
brand.update(more_on_zara)
print(brand)

# Exercise 4
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

disney_users_A = {}
disney_users_B = {}

for i in range(len(users)):
    character = users[i]
    if 'i' in character and (character.startswith('P') or character.startswith('M')):
        disney_users_A[users[i]] = i

    disney_users_B[i] = character


users.sort()
disney_users_C = dict(zip(users, range(6)))
