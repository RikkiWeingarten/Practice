
import sys

board = [["" for i in range(3)] for j in range(3)]
visited = {}


def display_board():
    print("TIC TAC TOE")
    print("*"*17)
    for row in range(len(board)):
        sys.stdout.write("*  ")
        for col in range(len(board[0])):
            if board[row][col] == "":
                sys.stdout.write("   ")
            else:
                sys.stdout.write(" " + board[row][col] + " ")
            if col != 2:
                sys.stdout.write("|")
        print("  *")
        if row != 2:
            print("*  ---|---|---  *")
    print("*"*17)


def player_input(player):
    # need to make this a loop
    if player:
        letter = "X"
        print("Player X's turn...")
    else:
        letter = "O"
        print("Player O's turn...")

    print()
    try:
        row = int(input("Enter row: \n")) - 1
        col = int(input("Enter column: \n")) - 1
        if board[row][col] == "":
            board[row][col] = letter
        else:
            input("Enter a valid row or column...\n")
            player_input(player)
    except:
        input("Enter a valid row or column...\n")
        player_input(player)


def check_win(mark):
    return ((board[0][0] == mark and board[0][1] == mark and board[0][2] == mark) or

            (board[1][0] == mark and board[1][1] == mark and board[1][2] == mark) or

            (board[2][0] == mark and board[2][1] == mark and board[2][2] == mark) or

            (board[0][0] == mark and board[1][1] == mark and board[2][2] == mark) or

            (board[2][0] == mark and board[1][1] == mark and board[0][2] == mark) or

            (board[0][0] == mark and board[1][0] == mark and board[2][0] == mark) or

            (board[0][1] == mark and board[1][1] == mark and board[2][1] == mark) or

            (board[0][2] == mark and board[1][2] == mark and board[2][2] == mark))


def play():
    player_one = True
    print(board)
    while not check_win('X') and not check_win('O') and ("" in board[0] or "" in board[1] or "" in board[2]):
        player_input(player_one)
        display_board()
        player_one = not player_one

    if check_win('X'):
        print("player X wins!")
    elif check_win('O'):
        print("player O wins!")
    else:
        print("It's a tie!")


play()
