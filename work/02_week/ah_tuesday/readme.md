# Rocky's Function Summit

![Rocky](http://www.changesinlongitude.com/wp-content/uploads/2011/08/rocky-movie-on-steps.jpg)

## Javascript Functions & Methods Practice

Similar to Rocky's summit to the top of the Philidelphia Museum of Art, here are a set of code challenges for you to train on. 

**Do not try and complete all of these in a night!** In fact, the very hard challenges will likely be too difficult for you to solve at your current state. These challenges should act as the jazzercise tape stuck in your old VHS machine: exercise!

## Easy

### Turn array into string

- Make a function `arrayToString` that changes an array of numbers (`numbers`)
  
  into a string

Examples: 

`arrayToString([4,3,5,3,2,3])` should return "435323"

###### Starter Code:

``` javascript
var arrayToString = function(numbers) {
  // Your awesome code here!
}
```

---

### esreveR

- Make a function `esrever` that takes a string (`reverseMe`) and reverses it

Examples:

`esrever("Hello!")` should return `"!olleH"`

`esrever("This is a string")` should return `"gnirts a si sihT"`

###### Starter Code:

``` javascript
var esrever = function(reverseMe) {
  // Your awesome code here!
}
```

---

### Alphabetize

- Create a function `alphabetize` that alphabetizes an array of strings called `words`.

Examples:

- `alphabetize(["Carl Weathers", "apple", "Zardoz"])` should return 
  
  `["apple", "Carl Weathers", "Zardoz"]`

###### Starter Code:

``` javascript
var alphabetize = function(words) {
  // Your awesome code here!
}
```

---

### Is it Even?

- In this challenge we are passing a number `n` into a function.
- Your code will determine if the number passed is even (or not).
- The function needs to return either a true or false.
- Numbers may be positive or negative, integers or floats.
- Floats are considered UNeven for this challenge.

###### Starter Code:

``` javascript
function testEven(n) {
    // Your awesome code here!
}
```

---

### Bug: Why can't I push my object into an array?

Solve this bug:

###### Starter Code:

``` javascript
items = []
items.push {a: "b", c: "d"}
```

---

### Love Letters

Maid Marian has written a function that returns a greeting for a user. 

However, she's in love with Robin Hood, and would like to greet him with a secret message of love. Can you help her?

- Write a function that accepts a string `name`.
  
- If `name` is equal to `"Robin Hood"` return `"Hi papi! :^*"`
  
- Otherwise greet the person by name
  
  - eg: if `name` is `"Burt Reynolds"`, your function should return `"Hello Burt Reynolds."`

###### Starter Code:

``` javascript
function greet(name) {
  // Your awesome code here!
}
```

---

### Sum it Up

- Write a program that finds the summation of every number between 1 and num. 
- Assume the number will always be a positive integer greater than 0.

Examples:

`sumItUp(2)` should return `3` because 1 + 2 = 3

`sumItUp(5)` should return `15` because 1 + 2 + 3 + 4 + 5 = 15

###### Starter Code:

``` javascript
var sumItUp = function(num) {
  // Your awesome code here!
}
```

---

### All in the Family

- Write a function `allPets` that takes two arrays of strings (`kittens` and `puppies`) and combines them into one array
  
- All values of arrays should be strings

Examples:

- `allPets(["Kettle", "Mr.PurrPurr"],["Spot", "Frank", "Handsome"])` should return `["Kettle", "Mr.PurrPurr", "Spot", "Frank", "Handsome"]`

###### Starter Code:

``` javascript
var allPets = function(kitties, puppies) {
  // Your awesome code here!
}
```

---

## Medium

### Hugs

- Make a function `hugs` that takes an array (`inNeedOfHugs`) and returns the values as a string, each surrounded by parentheses.
  
- Array values should only be strings and numbers

Examples:

- `hugs([3,7,'2',4])` should return `"(3)(7)(2)(4)"`

###### Starter Code:

``` javascript
var hugs = function(inNeedofHugs) {
  // Your awesome code here!
}
```

---

### Vowelator

Create a function called `vowelator` to remove all the _lowercase_ vowels in a given string.

Examples:

- `vowelator("Marcus")` should return `"Mrcs"`
- `vowelator("apple")` should return `"ppl"`
- `vowelator("Antwoord")` should return `"Antwrd"`

###### Starter Code:

``` javascript
function shortcut(string){
  // Your awesome code here!
}
```

<!-----

### Middle Man

- Make a function `middleMan` that returns the value in the middle of an array (`arr`) and it's index number in an array.
  
- If the array is even, return the value at the index that is equal to half the length of the array.
  
  - If an array's length is 8, return the 4th value (therefore the 3rd index)

Examples: 

- `middleMan([4,"hello", false])` should return `["hello", 1]`
  
- `middleMan([1, 2, 3, 4, true, "5", "Carl Weathers", false, 3293, "uh-oh"])` should return `[true, 4]`

###### Starter Code:

``` javascript
var middleMan = function(arr) {
  // Your awesome code here!
}
```
-->
---

### Repeater

- Create a function called `repeater` that takes in a `string` and a number (`n`).
  
- The function should return a string that repeats the initial passed in `string` `n` number of times.
  
- If anything other than a string is passed in you should return "Not a string"

EXAMPLE:

If you pass in string `"Hi"` with a number (`2`), `repeater` should return `"HiHi"`.

###### Starter Code:

``` javascript
var repeater = function(str, n) {
  // Your awesome code here!
}
```

---

### Sum an Array of Numbers

Write a method `sum` that takes an array of numbers and returns the sum of the numbers. 

For instance, `[4,7,8,9,15,43]` should return `86`.

- Your answer should be able to handle negative numbers.
- If the array does not contain any numbers then you should return 0.
- You can assume that you are only given numbers.
- You cannot assume the size of the array.
- You can assume that you do get an array and if the array is empty, return 0.

###### Starter Code:

``` javascript
function sum(numbers) {    
    // Your awesome code here!
}
```

---

### Add Length to Strings

What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

eg:

`addLength('apple ban')` will return `["apple 5", "ban 3"]`

`addLength('you will win')` will return `["you 3", "will 4", "win 3"]`

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

- You can assume strings will have at least one element 
- Words should always be separated by a space.

###### Starter Code:

``` javascript
function addLength(str){
  // Your awesome code here!
}
```

---

### Gimme the Max

- Create a function `max(arr)` that returns the largest value in an array
- Consider numeric strings (eg. `"12"`) as numbers
- If the array has a non numeric entry, the function should return `NaN`

Examples:

`max([2,5,1,3])` should return 5

`max([1,2,3,8,4,9,7,42,99])` should return 99

`max([2,'5',1,3])` should return 5

`max([2,5,1,'ab'])` should return NaN

###### Starter Code:

``` javascript
var max = function(arr) {
  // Your awesome code here!
}
```

---

## Hard

### Partial Word Searching

- Write a method `wordSearch` that will search an array of strings (`arrayOfStrings`) for all strings that contain another string (`query`), ignoring capitalization. 
  
- Return an array of the found strings.
  
- The method takes two parameters, the query string and the array of strings to search, and returns an array.
  
- If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty"

Examples:

- `wordSearch("me", ["home", "milk", "Mercury", "fish"])` 
  - should return `["home", "Mercury"]`
- `wordSearch("fix", ["home", "milk", "Mercury", "fish"])`
  - should return `["Empty"]`

###### Starter Code:

``` javascript
var wordSearch = function(query, arrayOfStrings) {
  // Your awesome code here!
}
```

### Mathematical Callback

- Write a function, which takes as parameters an array and a callback function. 
  
- The callback function is a mathematical function that will be applied on each element of this array.

For example :

``` javascript
var myArray = [4, 8, 2, 7, 5]

myArray = processArray(myArray,function (a) {
  return a * 2
})

```

`myArray` will be: `[8, 16, 4, 14, 10]`

``` javascript
var myArray = [7, 8, 9, 1, 2]
myArray = processArray(myArray, function (a) {
  return a + 5
})
```

`myArray` will be: `[12, 13, 14, 6, 7]`

###### Starter Code:

``` javascript
function processArray(arr, callback) {
    // Your awesome code here!
}
```

---

### Sum of Largest Pair in Array

- Write a function `largestPairSums(arr)` that sums the largest pair in an array.
  
- Input array contains minimum two elements and every element is a number.

Examples:

`largestPairSums([10,14,2,23,19])` should return 42 (i.e. sum of 23,19)

`largestPairSums([99,2,2,23,19])` should return 122 (i.e. sum of 99,23)

###### Starter Code:

``` javascript
function largestPairSum(numbers) {
  // Your awesome code here!
}
```

---

### Power of Two

- Write a function `powerOfTwo` that determines if given number (`n`) is a power of two. 
  
  ``` 
  - A power of two means a number of the form 2^n where `n` is an integer.
  ```

For example:

`powerOfTwo(4096)` should return `true`

`powerOfTwo(375)` should return `false`

###### Starter Code:

``` javascript
function powerOfTwo(n){
  // Your awesome code here!
}
```

> Bonus: Can you solve this using binary?

---

### Return Unused Digits

- Create a function `unusedDigits(numbers)` takes an array of numbers, and returns the unused digits
  
  - Result string should be sorted

Examples:  

`unusedDigits([12, 34, 56, 78])` should return `"09"`

`unusedDigits([2015, 8, 26])` should return `"3479"`

###### Starter Code:

``` javascript
var unusedDigits = function(numbers) {
  // Your awesome code here!
}
```

---

## Very Hard

### Valid Braces

- Write a function called `validBraces(stringOfBraces)` that takes a string of braces (arrays, curlies, and parentheses), and determines if the order of `stringOfBraces` is valid.
  
- `validBraces` should return `true` if the string is valid, and `false` if it's invalid.
  
- All input strings should be nonempty, and consist __only__ of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.

##### What is considered Valid?

- A string of braces is considered valid if all braces are matched with the correct brace. 
  
  For example:
  
  `validBraces('(){}[]')` and `validBraces('([{}])')` would be considered valid, and return `true`

`validBraces('(}')`, `validBraces('[(])')`, and `validBraces('[({})](]')` would be considered invalid, and return `false`.

###### Starter Code:

``` javascript
var validBraces = function(stringOfBraces) {
// Your awesome code here!
}
```

---

### Alternating Loops

- Write a function `combine()` that combines arrays.
- Alternate elements when combining arrays
  - Arrays can have different lengths.
  - No limit to how many arrays can be passed through the function

Examples:

`combine(['a', 'b', 'c'], [1, 2, 3])` 

- should return `['a', 1, 'b', 2, 'c', 3]`

`combine(['a', 'b', 'c'], [1, 2, 3, 4, 5])` 

- should return `['a', 1, 'b', 2, 'c', 3, 4, 5]`

`combine(['a', 'b', 'c'], [1, 2, 3, 4, 5], [6, 7], [8])` 

- should return `['a', 1, 6, 8, 'b', 2, 7, 'c', 3, 4, 5]`

###### Starter Code:

``` javascript
function combine() {
  // Your awesome code here!
}
```