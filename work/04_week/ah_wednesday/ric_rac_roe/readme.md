#### Ruby Lab

# Ric-Rac-Roe
---
<img src="scoobydoo.jpg" width="200">
## MVP

### Program Features
- User will type `ruby rrr.rb` in Terminal to play a single game of tic-tac-toe.
- Print out a welcome message at start of game.
- Print out the board before each player's turn, such as:

```
RIC-RAC-ROE

    A   B   C

1)  X |   | O 
   -----------
2)    | X |  
   -----------
3)  X | O | O 
  
```
- Prompt for each player to enter their move such as:

```
Player X's Move (e.g., B2):  
``` 
- Allow players to type upper or lower case letter (a/A, b/B or c/C) for the column.
- Print out winner or tie message

### Requirements
- In a separate file named _game.rb_, create a `Game` class with a `play` method.  Import the `Game` class in the main _rrr.fb_ file using the `require_relative` method.


## Bonus

- If player enters an invalid move (improper col/row or cell already taken), print out a "Invalid Move" message before printing the game board again.
- Prompt for target number of wins to play to.
- After each game, print out the score as:

```
SCORE:
Player X: xx   Player O: xx   Ties: xx
```
- Continue to play until the target number of wins is reached by either player -OR- until either user types in 'Q' or 'q' to quit.
