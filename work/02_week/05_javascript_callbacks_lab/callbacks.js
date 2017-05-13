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
};
console.log('using map:', map([1,2,3], function(n){ return n * 2; })); // [2, 4, 6];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// JavaScript arrays automatically come with a built-in map method.
// Use .map to do the same thing we did above.


// Now use .map to return an array of the full names of #TandyKaKe members



console.log("-----------------------------------");
// 2. ITERATING
// Each should take a list and apply a function to each element in the list and return
// the original list
function each(list, callback) {
  // write code to iterate through the list and
  // invoke the callback on each element
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


// Now use .forEach to reverse the order of the tandyKake array


console.log("-----------------------------------");
// 3. FILTERING
// A filter function takes a list and returns a subset based on a function that returns a boolean
var filter = function(list, callback) {
  // write code to iterate through the list and
  // invoke the callback on each element
};
console.log('using filter:', filter([2, 4, 5], function(n) { return n % 2 === 0 })); // [2, 4]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// JavaScript arrays automatically come with a built-in filter method.
// Use .filter to do the same thing we did above.


// Use .filter to return only the instructors in #TandyKaKe


console.log("-----------------------------------");

// 4. FINDING
// Find should take a list and returns the first that passes a conditional expression
// otherwise it returns false
function find(list, callback) {
  // write code to iterate through the list and
  // invoke the callback on each element
}
console.log('using find:', find([1, 2, 4], function(n){ return n % 2 === 0})); // 2

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// JavaScript arrays automatically come with a built-in find method.
// Use .find to do the same thing we did above.


// Use .find to find the old fogey of #TandyKaKe
