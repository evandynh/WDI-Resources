var tandyKake = [
  { firstName: "Taylor", lastName: "Britton", position: "TA", old: false },
  { firstName: "Andy", lastName: "Franklin", position: "TA", old: false },
  { firstName: "Kate", lastName: "Wood", position: "Instructor", old: false },
  { firstName: "Mike", lastName: "Wong", position: "Instructor", old: true }
];

// 1. MAPPING
// A mapping function takes a list, applies a function to each element and returns a new array
var map = function(list, callback) {
  // write code to iterate through the list and
  // invoke the callback on each element
  var newArray = [];
  for(var i = 0; i < list.length; i++) {
    newArray.push(callback(list[i]));
  }
  return newArray;
};
console.log('using map: ', map([1,2,3], function(n){ return n * 2; })); // [2, 4, 6];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// JavaScript arrays automatically come with a built-in map method.
// Use .map to do the same thing we did above.
var mappedArray = [1,2,3].map(function(n) {
  return n * 2;
});

console.log("using .map:", mappedArray);

// Using a named function and not storing the result
// function double(n) {
//   return n * 2;
// }
//
// console.log("using named function: ", [1,2,3].map(double));

// Calling it on an array stored in a variable and storing the new mapped array
// var arr = [1,2,3];
// var mappedAgain = arr.map(double);
// console.log("using variables: ", mappedAgain);

// Now use .map to return an array of the full names of #TandyKaKe members
var fullNames = tandyKake.map(function(person) {
  return person.firstName + " " + person.lastName;
});
console.log(fullNames);

console.log("-----------------------------------");
// 2. ITERATING
// Each should take a list and apply a function to each element in the list
function each(list, callback) {
  // write code to iterate through the list and
  // invoke the callback on each element
  for(var i = 0; i < list.length; i++) {
    callback(list[i])
  }
}

// This is what you should see in your console.
// 4
// 8
// 10
console.log('using each:');
each([2, 4, 5], function(n){ console.log(n * 2) });

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// JavaScript arrays automatically come with a built-in forEach method.
// Use .forEach to do the same thing we did above.
console.log('using forEach:');
[2,4,5].forEach(function(num) {
  console.log(num * 2);
});

// Now use .forEach to reverse the order of the tandyKake array
var reversed = [];
tandyKake.forEach(function(person) {
  reversed.unshift(person);
});
console.log(reversed);

console.log("-----------------------------------");
// 3. FILTERING
// A filter function takes a list and returns a subset based on a function that returns a boolean
var filter = function(list, callback) {
  // write code to iterate through the list and
  // invoke the callback on each element
  var filteredArray = [];
  for(var i = 0; i < list.length; i++) {
    if(callback(list[i])) {
      filteredArray.push(list[i]);
    }
  }
  return filteredArray;
};

// Using forEach method to iterate over list
// var filter = function(list, callback) {
//   // write code to iterate through the list and
//   // invoke the callback on each element
//   var filteredArray = [];
//   list.forEach(function(number) {
//     if(callback(number)) {
//       filteredArray.push(number);
//     }
//   })
//   return filteredArray;
// };
console.log('using filter:', filter([2, 4, 5], function(n) { return n % 2 === 0 })); // [2, 4]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// JavaScript arrays automatically come with a built-in filter method.
// Use .filter to do the same thing we did above.
var numbers = [2,4,5];
var evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log("using .filter:", evenNumbers);
// Use .filter to return only the instructors in #TandyKaKe
var instructors = tandyKake.filter(function(person) {
  return person.position == "Instructor";
});
console.log(instructors);

console.log("-----------------------------------");

// 4. FINDING
// Find should take a list and returns the first that passes a conditional expression
// otherwise it returns undefined
function find(list, callback) {
  // write code to iterate through the list and
  // invoke the callback on each element
  var found;
  list.forEach(function(elem) {
    if(!found && callback(elem)) {
      found = elem;
    }
  });
  return found;
}
console.log('using find', find([1, 2, 4], function(n){ return n % 2 === 0})); // 2

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// JavaScript arrays automatically come with a built-in find method.
// Use .find to do the same thing we did above.

var even = [1,2,4].find(function(n) {
  return n % 2 === 0;
});
console.log("using .find:", even);
// Use .find to find the old fogey of #TandyKaKe
var oldFogey = tandyKake.find(function(person) {
  return person.old;
});
console.log(oldFogey);
