import random

class Game:
    def __init__(self):
        self.beats = {
        "rock": "scissors",
        "scissors": "paper",
        "paper": "rock"
        }
        self.past_tense = {
            "loss": "lose",
            "win": "won",
            "draw": "drew"
        }

    def get_user_item(self):
        item = input("Select an item(rock/paper/scissors)\n\n").lower().strip()
        while item not in self.beats:
            item = input("""Please select a valid item
Select an item(rock/paper/scissors)\n
""").lower().strip()
        return item
            
    
    def get_computer_item(self):
        return random.choice(list(self.beats.keys()))
    
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        if self.beats[user_item] == computer_item:
            return "win"
        return "loss"
        
    
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
    
        result = self.get_game_result(user_item, computer_item)
        print(f"\nYou selected {user_item}. The computer selected {computer_item}. You {self.past_tense[result]}\n")
        return result



