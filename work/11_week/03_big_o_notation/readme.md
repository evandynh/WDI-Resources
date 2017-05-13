# Big O notation

## Learning Objectives
* Understand what big O notation is
* Understand examples of
  * O(1)
  * O(n)
  * O(n<sup>2</sup>)
  * O(log n)

As we work through different examples today, try to think of a ruby or javascript implementation that applies to one of them and write it down somewhere.

---

### Starter task

Imagine that you're trying to dry a bunch of shirts using a washing line outdoors. (Assume you have an infinite backyard - lucky you!)

* How long will it take to dry one shirt?  

* How about five shirts?

* What about a million shirts?


---

Now imagine you have some dishes to wash. 

* How long does it take to wash one dish? 

* How about five dishes?

* What about a million dishes?

---

### What is Big O Notation?

Welcome to Computer Science!

Big O notation is a function which determines the *efficiency* of another function. It is used to describe the execution time required by an algorithm for the *worst case* scenario. For example, if a function is looking for a value in an array, it could be the first value, allowing the function to finish quickly, but in the worst case scenario it would be the last value, so the function would take longer to run.

Here's a graphical representation of some different growth rates:

![](https://therecyclebin.files.wordpress.com/2008/05/time-complexity.png)

Let's discuss these individually (except for O(2<sup>n</sup>), because that's too slow - look at that spike!).

*All examples from [this article](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/) (re-written as javascript).*

##### O(1)
O(1) is the fastest, most efficient growth rate. We like our web apps to be high-performance, so O(1) is the goal whenever possible!

A growth rate of O(1) will take the same amount of time to execute regardless of the size of the input.

```javascript
function isFirstElementNull(arr) {
    return arr[0] == null
}
```

##### O(n)

The execution time of an algorithm with a growth rate of O(n) will grow linearly and in direct proportion to the size of the input.

```javascript
function containsValue(arr, value) {
    for (i=0; i<arr.length; i++) {
        if (arr[i] == value) {
        	return true
        }
    }
    return false
}
```

##### O(n<sup>2</sup>)

An algorithm with a growth rate of O(n<sup>2</sup>) will have an execution time directly proportional to the square of the size of the input.

For example, if a function with an input of an array will take 1ms to run an array of length 1, it will take 25ms to run an array of length 5, 400ms to run an array of length 20, and so on. You can see how this growth rate can start to become problematic as the input data becomes larger.

```javascript
function containsDuplicates(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            // Don't compare with self
            if (i == j) continue;
            if (arr[i] == arr[j]){
            	return true
            }
        }
    }

    return false
}
```

If there are even more nested iterations, the growth rate can become O(n<sup>3</sup>), O(n<sup>4</sup>), O(2<sup>n</sup>) etc. If you are writing code with multiple nested iterations, it's best to refactor to increase performance as much as possible.

##### O(log n)

A common example of O(log n) is binary search, which is the iterative halving of data sets to find a target value. The growth rate of this type of algorithm is much slower than the data set itself. For example, doing a binary search on a data set of 100 values takes only one more step than on a data set of 50 values, not twice as long, so this type of algorithm deals with large data sets very well.

You can read a more in-depth example of O(log n) in [this article](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/).

### Okay, now let's play the big O game with your neighbor!

One person silently picks a number between 1 and 100 (inclusive). The other person tries to guess the number. For each guess, the person who originally thought of the number tells the guesser if the number is LOWER or HIGHER. Keep going until the guesser correctly guesses the number.

How many tries did it take?

What is the max number of guesses it should take?

Okay, what is the maximum number of guesses it should take if we play the game for numbers between 1 and 200? 1 and 400? 1 and 800?

---

Okay, one last bit of fun before we really get to work...

A traveling salesman needs to travel around a bunch of interconnected towns. Given towns A, B, and C, work with a partner and figure out the different ways to go through each and every town.

How many possibilities did you get? 

Now add another town into the mix, so we have towns A, B, C, and D, and do the same thing.
What would happen if we added in a fifth town? Or a sixth? How many possibilites would there be?

How many different routes are there when we have to visit 10 different towns?

## Big O in action!

Write a ruby OR javascript function in repl.it for each of the following things, and say what you think their big O notation (aka their 'time complexity' would be):

* A function that logs the first item in an array

* A function that logs the last item in an array

* A function that prints out every item in an array

* A function that repeatedly halves an input argument until it is less than 1

* A function that multiplies an input by itself

* A function called ```my_turn_to_be_uppercase``` that takes an array of lowercase strings as an input. 

  For each item in the array, it should do the following: Print out the full array, with the first item in UPPERCASE, followed by all the other items in lowercase. Then it should print out the full array again, but with only the second item in UPPERCASE. Then it should print out the full array again, but with only the third item in UPPERCASE, and so on. After each print out of the array, it should print out ```------```.

   For example:  
```
my_turn_to_be_uppercase(["apples", "pears", "apricots", "bananas"])

//=> this should return the following:

"APPLES"
"pears"
"apricots"
"bananas"
"------"
"apples"
"PEARS"
"apricots"
"bananas"
"------"
"apples"
"pears"
"APRICOTS"
"bananas"
"------"
"apples"
"pears"
"apricots"
"BANANAS"
"------" 
```

* You are given an integer n. Write a method called count_up_to(n) that counts the total of 1 + 2 + . . . + n

#### Continued Practice

If you want a deeper understanding of big O notation, check out [this course](https://www.khanacademy.org/computing/computer-science/algorithms) on Khan Academy.

Here is a [Big O Cheatsheet](http://bigocheatsheet.com/).

You can also review these articles on redis:

- [del](http://redis.io/commands/del)
- [append](http://redis.io/commands/append)
- [get](http://redis.io/commands/get)
- [lrange](http://redis.io/commands/LRANGE)

*MANY job interviews will include computer science questions, so this is worth spending some time learning!*

## Conclusion

- Which is the *most* efficient growth rate we covered in this lesson?
- Which is the *least* efficient growth rate we covered in this lesson?