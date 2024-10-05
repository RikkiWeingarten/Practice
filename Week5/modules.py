import requests

import time

start_time = time.time()
fb = requests.get('https://facebook.com')
end_time = time.time()
print(f"Facebook took {end_time - start_time} seconds")

start_time = time.time()
google = requests.get('https://google.com')
end_time = time.time()
print(f"google took {end_time - start_time} seconds")

start_time = time.time()
imdb = requests.get('https://imdb.com')
end_time = time.time()
print(f"IMDB took {end_time - start_time} seconds")

start_time = time.time()
wiki = requests.get('https://www.wikipedia.org')
end_time = time.time()
print(f"wiki took {end_time - start_time} seconds")


