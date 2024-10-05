def calculation(a, b):
    return a-b, a+b


res = calculation(40, 10)
print(res)


people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]

print(list(map(lambda s: f"hello {s}", filter(
    lambda s: len(s) <= 4, people))))
