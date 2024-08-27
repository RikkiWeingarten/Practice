from game import Game
def get_user_menu_choice():
    choice = input("""Play a new game - [ENTER]
Show scores - [1]
Quit - [q]

""")
    if choice == '\n' or choice == '1' or choice == 'q' or choice == 'Q':
        return choice.upper()

def print_results(results):
    add_s = lambda key: 'es' if key == "loss" and results[key] != 1 else 's' if results[key] != 1 else ''

    print(f"\nYou have {results["win"]} win{add_s("win")}, {
          results["loss"]} loss{add_s("loss")}, and {results["draw"]} draw{add_s("draw")}")
    print()

def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    choice = get_user_menu_choice()
    while choice != 'Q':
        if choice == '1':
            print_results(results)
        else:
           g = Game()
           results[g.play()] +=1
           
            
        choice = get_user_menu_choice()
    print_results(results)
    print("Thanks for playing!")
        
main()
