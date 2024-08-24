import json
import requests
category = "religion"
response = requests.get(
    f"https://api.chucknorris.io/jokes/random?category={category}")
string = response.json()

print(string["value"])


# json_file = 'file.json'
# with open(json_file, 'r') as file_obj:
#     my_family = json.load(file_obj)
#     for child in my_family["children"]:

        # Inside the family variable, add to each children, a key 'favorite_color' with a value
        # Then, save back all the new data into the json file
        # Use the indent argument inside the dump function. Check out the documentation and the
