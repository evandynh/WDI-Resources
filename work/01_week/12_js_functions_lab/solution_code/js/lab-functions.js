console.log('connected')

// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x
  } else {
    return y
  }
}

console.log(maxOfTwoNumbers(3, 9))

// 2.
var maxOfThree = function(x, y, z) {
  if (x >= y && x >= z) {
    return x
  } else if (y >= x && y >= z) {
    return y
  } else {
    return z
  }
}

console.log(maxOfThree(5, 10, 1))

// 3.
function isCharAVowel(s) {
  s = s.toLowerCase()
  return ('aeiouy'.indexOf(s) > -1)
}

console.log(isCharAVowel('b'))

// 4.
var sumArray = function(arr) {
  var sum = 0
  // use of forEach would be "cooler" than the following for loop
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

console.log(sumArray([5, 10, 1]))

// 5.
function multiplyArray(arr) {
  var product = 1
  // use of forEach would be "cooler" than the following for loop
  for (var i = 0; i < arr.length; i++) {
    product *= arr[i]
  }
  return product
}

console.log(multiplyArray([5, 10, 2]))

// 6.
var numArgs = function() {
  return arguments.length
}

console.log(numArgs('test', true, 5))

// 7.
function reverseString(s) {
  var arr = s.split('')
  return arr.reverse().join('')
}

console.log(reverseString('rockstar'))

// 8.
var longestWordLength = function(arr) {
  var longest = 0
  // using forEach this time!
  arr.forEach(function(s) {
    if (s.length > longest) longest = s.length
  })
  return longest
}

console.log(longestWordLength(['wake', 'me', 'in', 'the', 'morning']))

// 9.
function stringsLongerThan(arr, len) {
  var longWords = []
  arr.forEach(function(s) {
    if (s.length > len) longWords.push(s)
  })
  return longWords
}

console.log(stringsLongerThan(['wake', 'me', 'in', 'the', 'morning'], 2))

