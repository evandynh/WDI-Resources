##Pseu-Pseu-Pseudocode!

###SWBAT
* Describe what pseudocode is
* Explain why pseudocode is a useful part of the development process
* Use pseudocode to break down code challenges


##Intro

From wikipedia:
> Pseudocode is an informal high-level description of the operating principle of a computer program or other algorithm. It uses the structural conventions of a programming language, but is intended for human reading rather than machine reading.

What does this mean? Basically, pseudocode is a method you can use to plan out how to code something without worrying about syntax. It's like a rough draft or a sketch.

##Pseudocode Examples
This weekend you all worked on building Tic Tac Toe games. Here are some examples of ways you could use pseudocode to break down the game logic of Tic Tac Toe.

####Starting the Game
Set turn counter to 0  
Clear game board  
Set current player to player one  
Prompt player one to start the game

That just looks like a list - nothing scary there. Now let's look at an example that looks a *little* more like code, but not much.

####Taking Turns
When a square is clicked  
If it is X's turn  
&nbsp;&nbsp;&nbsp;&nbsp;claim the square for X  
&nbsp;&nbsp;&nbsp;&nbsp;make it O's turn  
else  
&nbsp;&nbsp;&nbsp;&nbsp;claim the square for O  
&nbsp;&nbsp;&nbsp;&nbsp;make it X's turn

That is still just plain English, but there are some keywords thrown in (*if* and *else*) that give a little clearer picture of what our JavaScript will look like.

##Activity

In pairs, I'm going to give you thirty minutes to pseudocode Tic Tac Toe. Write out how to:

* Start the game
* Take turns
* Determine a winner
  * Congratulate the winner before automatically starting a new game
* Reset the board
* Tournament - play to five
  * Keep score
  * Congratulate the winner before automatically starting a new tournament

Don't worry if you don't have time for all of these - just do as much as you can. If you finish early, try to think of some additional features and write pseudocode for those, too!

##Great, I've written some pseudocode. What now?

![girl you wish you hadn't started a conversation with at a party](https://media1.giphy.com/media/l0HlzsaupDQvv0lgY/200.gif)

Now you convert it into actual code! Let's do a few examples together.

##Code Challenge

Write a JavaScript function that takes a string as an argument. If the string contains only capital letters, log "STOP SCREAMING AT ME!" otherwise, log "Okay."  
Use pseudocode to break the problem down *before* writing any actual code.

##Conclusion

Let's discuss a few other examples, besides Tic Tac Toe, where pseudocode would be helpful in breaking down a coding task. Do you think pseudocode will be useful in your projects? In your post-WDI coding careers? In interviews?