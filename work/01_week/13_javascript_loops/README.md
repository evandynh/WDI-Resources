# Javascript Loops

| Learning Objectives - SWBAT |
| :--- |
| Identify the necessary parts of a while loop (action, mutable condition, and condition update). |
| Identify the parts of a for loop (iterator, break condition, and condition update). |
| Explain how for loops work with reference to while/until loops. |
| Differentiate when to use while loops and for loops, and give specific use cases. |
| Use a for loop to iterate over an array. |

## Iterating

It is a way of incrementally repeating a task. Iterating is a way of describing procedures like 

```
print "hello world" 50 times
``` 
It is also a way of describing 

```
print each item in a shopping list
```

It can also be a way of solving problems like

```
how would I print all vegetables in a shoppping list
```


Typically iteration has three or four main parts 

* an initial state
* a condition for repeating
* process to be run for each repetition 
* a state change for proceeding to the next step

It isn't surprising that the primary means of iterating in most languages is called a `for` loop, which has the following structure

```

for ( intial state; check condition; change state) {
  run this code for before changing state
}

```


or a  more concrete example


```

var friends = ["larry", "moe", "curly"];

for (var index = 0; index < friends.length; index = index + 1) {
  console.log(friends[index]))
}

```

#### Exercises


1. Iterate through a shopping list and print each item in a shopping list.

  ```
    var shoppingList = ["apples", "oranges", "carrots"];
    
    // iterate here
  ```

2. Iterate through a list of shopping lists and print each item in each list.

  ```
    var shoppingLists = [
                ["apples", "oranges", "carrots"],
                ["ham", "turkey", "cheese"],
                ["fruits", "vegetables", "meat"]
              ];
    // iterate here
  ```


3. Word counting:
  a. Count the number of space separated words in a string (Hint: do this with and without a `for` loop.).
  b. Count the number of words that in a string that have the letter `a` in them.


4. Capitalize the first letter in every word in a string, i.e
  
  ```
  "hello world" => "Hello World"
  
  ```

5. Find the largest number in a hardcoded array using a for loop. Find the smallest number in a hardcoded array.


6. You have a list of numbers below that somehow got shuffled and one is missing. Luckily you know that the numbers were from `1 to 100`. Find the missing number. 

  ```
  var numbers = [56, 74, 31, 89, 8, 
          22, 5, 19, 28, 100,
          82, 72, 39, 25, 90, 
          1, 97, 83, 58, 38, 
          57, 71, 70, 7, 3, 
          12, 48, 45, 43, 84, 
          68, 49, 37, 41, 92, 
          96, 6, 66, 95, 15, 
          67, 2, 59, 4, 91, 
          44, 50, 17, 30, 88, 
          34, 55, 64, 9, 27, 
          73, 60, 32, 81, 10, 
          53, 61, 63, 51, 65, 
          36, 26, 99, 76, 47, 
          21, 14, 16, 40, 79, 
          75, 85, 42, 86, 18, 
          23, 24, 46, 69, 29, 
          77, 20, 54, 80, 87, 
          13, 94, 98, 93, 62, 
          35, 33, 11, 52];
          
          
          
  ```
  
7. Find the `sum` of the values in an array and the `average`. 
8. Find the average of only the odd numbers in an array.
9. Write a loop that creates an array of `100` random integers (not decimal numbers).
10. Find the numbers in common in two different lists of numbers.

### While loops

The while loop is the other type of repetitive control flow structure. However, `for` handled most of the general iteration tasks we could hope to perform. You should hardly ever need just a `while` loop. It will run so long as a condition is true.


```
while (true) {}

```

This should be enough to break a browser.

In the browser try the [`prompt`](https://developer.mozilla.org/en-US/docs/Web/API/Window.prompt) function out. 


#### Exercise 

1. Re-write exercise `1` for `for` loops using a `while` loop.
2. Use `prompt` and the `while` loop create an array of `5` names.
3. Use [`confirm`](https://developer.mozilla.org/en-US/docs/Web/API/Window.confirm) to check if a user wants to continue looping. If `yes` print `hello`, and if anything else print `goodbye` and `stop` looping.
4. Implement a guessing game using `prompt` and `while`.
