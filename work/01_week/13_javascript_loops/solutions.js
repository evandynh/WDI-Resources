// 1. Iterate through a shopping list and print each item in a shopping list.

  var shoppingList = ["apples", "oranges", "carrots"];

  // As a basic for loop over an array
  console.log("#1 - This is the output from the for loop:")
  for(var i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
  }

  // Using forEach instead of a for loop
  console.log("----------------------")
  console.log("#1 - This is the output from the forEach:")
  shoppingList.forEach(function(item) {
    console.log(item);
  });

  // As a named function to be used in #2
  function printShoppingListItem(arr) {
    for(var i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
    // Note that a forEach could have also been used here instead of a for loop
    // arr.forEach(function(item) {
    //  console.log(item);
    // })
  }

// 2. Iterate through a list of shopping lists and print each item in each list.

  var shoppingLists = [
              ["apples", "oranges", "carrots", "banana"],
              ["ham", "turkey", "cheese"],
              ["fruits", "vegetables", "meat"]
            ];
  // Using a nested for loop
  console.log("----------------------")
  console.log("#2 - This is the output for the nested for loops:")
  for(var i = 0; i < shoppingLists.length; i++) {
    for(var j = 0; j < shoppingLists[i].length; j++) {
      console.log(shoppingLists[i][j])
    }
  }
  // Using a nested for loop with a temporary variable assignment inside the first for loop
  console.log("----------------------")
  console.log("#2 - This is the output for the 2nd version of nested for loops:")
  for(var i = 0; i < shoppingLists.length; i++) {
    // Create a placeholder variable to hold the array that the outer loop is currently iterating on.  It gets used in the nested loop below.
    var currentArray = shoppingLists[i];
    for(var j = 0; j < currentArray.length; j++) {
      console.log(currentArray[j]);
    }
  }

  // Using a for loop and calling the function we defined for #1 that accomplishes our goal
  console.log("----------------------")
  console.log("#2 - This is the output for the for loop that calls function from #1:")
  for(var i = 0; i < shoppingLists.length; i++) {
    printShoppingListItem(shoppingLists[i]);
  }

  // Using a nested forEach
  console.log("----------------------")
  console.log("#2 - This is the output for the double forEach")
  shoppingLists.forEach(function(list) {
    list.forEach(function(item) {
      console.log(item);
    });
  });

  // Using a forEach and the named function from #1
  console.log("----------------------")
  console.log("#2 - This is the output from the forEach plus named function")
  shoppingLists.forEach(printShoppingListItem);

// 3. Word counting:
// a. Count the number of space separated words in a string (Hint: do this with and without a for loop.).



// b. Count the number of words that in a string that have the letter a in them.




// 4. Capitalize the first letter in every word in a string, i.e
//    "hello world" => "Hello World"




// 5. Find the largest number in a hardcoded array using a for loop. Find the smallest number in a hardcoded array.





// 6. You have a list of numbers below that somehow got shuffled and one is missing. Luckily you know that the numbers were from 1 to 100. Find the missing number.

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





// 7. Find the sum of the values in an array and the average.




// 8. Find the average of only the odd numbers in an array.




// 9. Write a loop that creates an array of 100 random integers (not decimal numbers).




// 10. Find the numbers in common in two different lists of numbers.




console.log('loops.js has finished');
