# Method Masala

![Its just everything in the cupboard thrown together.](assets/bollywood.jpg)

> Ignore the above photo.

### Exercise 1 — Calculators (Two Files)

#### Part A: Tip Calculator

**File name:** `tip_calculator.rb`

Write a program that:

1. Prints to Standard Output to ask how much a meal cost (in dollars).
1. Reads from Standard Input the total price of the meal.
1. Prints to Standard Output to ask how much to tip (between 0 and 100 percent).
1. Reads from Standard Input the size of the tip.
1. Prints to Standard Output the amount of the tip (in dollars).

Example:

```
$ ruby tip_calculator.rb
How much did your meal cost?
$ 180.00
How much do you want to tip (%)?
$ 18
You should tip $32.40
```

> Phil is arguing with his fiancee over how much an appropriate service charge 
> is for catering a wedding. Do you believe that tip jars for open bars are 
> tacky or useful?

#### Part B: Body Mass Index (BMI)

**File name:** `bmi_calculator.rb`

Write a program that:

1. Prints to Standard Output to ask what your weight is in pounds.
1. Reads from Standard Input your weight in pounds.
1. Prints to Standard Output to ask what your height is in inches.
1. Reads from Standard Input your height in inches.
1. Runs the height and weight information through the BMI algorithm:
  - Step 1: Multiply your weight in pounds by 703.
  - Step 2: Multiply your height in inches by itself (ie, *square* it).
  - Step 3: Divide the figure from Step 1 by the figure in Step 2.
1. Prints to Standard Output your BMI (rounded to the nearest integer)!

Example:

```
ruby bmi_calculator.rb
What is your weight in pounds?
215
What is your height in inches?
76
You have a BMI of 26.
```

> Phil and Ezra are having a competition to reduce their BMI 
> for bikini season. What are your plans to stay healthy in class?

#### Part C: Methods

**Now, make sure that the logic for both of these programs is encapsulated in**
**methods!** Name the two methods:

1. `calculate_tip`
2. `calculate_bmi`

Make sure that they take arguments as input, and return some output. Within the
methods do not use `puts` or `gets`! However, plug the methods back in to the
programs so that the program uses the methods, gets user input, and prints
data back to the user.

### Exercise 2 — Road Music

**File name:** `road_music.rb`

Write a method named `times_album_plays_in_full` to calculate the following 
problem. Then, as in the above exercise, write a program to get user input and
print data back to the user. 

> The total running time of the Beatles White Album is 1 hour 33 minutes 35 
> seconds. It's 3,187.1 miles from Portland, Maine to Portland Oregon via 
> I-80 E and I-90 E. If you drove from Portland to Portland at an average rate 
> of 55 miles per hour, how many times could you listen to the White Album in 
> full?

*Hint: the method should take an album length in hours, minutes and seconds; 
a driving distance in miles, and an average speed in miles per hour. Feel free
to write more methods to calculate sub-problems within the larger problem, like
breaking down time units into seconds!*

### Exercise 3 — What Would OPEC do?

**File name:** `drive_cost.rb`

Write a method named `drive_cost` to calculate the following math problem and 
use it in a program that interacts with a user.

> Assuming gas costs $2.781 per gallon, your car gets 32.4 miles to the gallon, 
> you drive at a steady 55 mph, and the Earth is 24,902 miles in circumference 
> at the equator: how much would it cost to drive around the world at the 
> equator?

### Exercise 4 — George Jetson Has Had Enough

**File name:** `drive_time.rb`

Write a method named `drive_time` to calculate the following math problem and 
use it in a program that interacts with a user.

> Assuming you drive at a steady 55 mph, how long would it take you to drive 
> into the fiery core of the sun? We can assume that the sun is 
> [one astronomical unit][au] away: ie 149,597,871,700 meters.

&nbsp;...

> Also: How much would it cost? (*Hint: use the previous method!*)

## Exercise 5 — Space Oddity

Using the above calculators (and any more you may write), figure out:

1. If you left today and wanted to reach Mars by March 10 of next year, 
   how fast would you have to drive? Consider that the average distance 
   to Mars from Earth is 140 million miles.
1. How far could [Carlos Slim][carlos_slim] drive before he ran out of gas? 
   Would he make it past the [Kuiper Belt][kuiper_belt]?
1. If the Voyager probe wanted to listen to Fleetwood Mac's seminal album 
   [Rumours][rumours], how many times would she have listened to it when she 
   [left the solar system][heliopause]?

> What do you have to change to make your methods work? What can stay the same?

[au]:          https://www.google.com/search?q=astronomical+unit
[carlos_slim]: https://www.google.com/search?q=carlos+slim+net+worth&oq=carlos+slim+net+worth
[kuiper_belt]: https://www.google.com/search?q=distance+to+the+kuiper+belt
[rumours]:     http://en.wikipedia.org/wiki/Rumours_%28album%29
[heliopause]:  http://en.wikipedia.org/wiki/Heliosphere#Heliopause
