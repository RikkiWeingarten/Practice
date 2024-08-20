def decode_matrix(matrix_string):
    string = ""
    for col in range(len(matrix_string[0])):
        for row in range(len(matrix_string)):
            char = matrix_string[row][col]
            if (char >= 'a' and char <= 'z') or (char >= 'A' and char <= 'Z'):
                string += char
            elif (string != "" and string[-1] != " "):
                string += " "
    return string


matrix = [
    ['7', 'i', 'i'],
    ['T', 's', 'x'],
    ['h', '%', '?'],
    ['i', ' ', '#'],
    ['s', 'M', ' '],
    ['$', 'a', ' '],
    ['#', 't', '%'],
    ['^', 'r', '!']
]

print(decode_matrix(matrix))
