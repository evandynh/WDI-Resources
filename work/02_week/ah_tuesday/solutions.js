var arrayToString = function(numbers) {
  console.log(numbers.join(''));
  var str = "";
  for(var i = 0; i < numbers.length; i++) {
    str += numbers[i].toString(); // Don't actually need toString().  Javascript can be smart sometimes.
  }
  console.log(str);
}

arrayToString([4,3,5,3,2,3])

var esrever = function(reverseMe) {
  console.log(reverseMe.split("").reverse().join(""));
  var reversed = "";
  for(var i = reverseMe.length; i > 0; i--) {
    reversed += reverseMe[i-1];
  }
  // for(var i = reverseMe.length - 1; i >= 0; i--) {
  //   reversed += reverseMe[i];
  // }
  console.log(reversed);
}

esrever("Hello!");
esrever("This is a string");

var alphabetize = function(words) {
  console.log(words.sort(function(a,b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if( a == b) return 0;
    if( a > b) return 1;
    return -1;
}));
}

alphabetize(["Carl Weathers", "apple", "Zardoz"]);

function testEven(n) {
  console.log(n % 2 == 0);
}

testEven(2);
testEven(3);
testEven(2.1);
testEven(-4);
testEven(-5);

var items = [];
items.push({a: "b", c: "d"});
console.log(items)

function greet(name) {
  if(name == 'Robin Hood') {
    console.log('Hi papi! :^*');
  } else {
    console.log("Hello " + name + ".");
  }
}

greet('Robin Hood');
greet('Burt Reynolds');

var sumItUp = function(num) {
  // var index = 1;
  // var sum = 0;
  // while(index <= num) {
  //   sum += index;
  //   index++;
  // }
  // console.log(sum);
  var sum = 0
  while(num > 0) {
    sum += num;
    num--;
  }
  console.log(sum);
}

sumItUp(2);
sumItUp(5);

var allPets = function(kitties, puppies) {
  console.log(kitties.concat(puppies));
  for(var i = 0; i < puppies.length; i++) {
    kitties.push(puppies[i]);
  }
  console.log(kitties);
}

allPets(["Kettle", "Mr.PurrPurr"],["Spot", "Frank", "Handsome"]);

var hugs = function(inNeedofHugs) {
  var str = "(" + inNeedofHugs[0];
  for(var i = 1; i < inNeedofHugs.length; i++) {
    str += ")("
    str += inNeedofHugs[i];
  }
  str += ')'
  console.log(str);
}

hugs([3,7,'2',4]);

function vowelator(string) {
  var noVowels="";
  for(var i = 0; i < string.length; i++) {
    if(!['a', 'e', 'i', 'o', 'u'].includes(string[i])) {
      noVowels+=string[i];
    }
  }
  console.log(noVowels);
}

vowelator("Marcus");
vowelator("apple");
vowelator("Antwoord");

var middleMan = function(arr) {
  if(arr.length % 2 == 0 ) {
    var index = (arr.length / 2) - 1;
  } else {
    var index = Math.floor(arr.length/2);
  }
  var answer = [];
  answer.push(arr[index], index);
  console.log(answer);
}

middleMan([4,"hello", false]);
middleMan([1, 2, 3, 4, true, "5", "Carl Weathers", false, 3293, "uh-oh"]);

var repeater = function(str, n) {
  if(typeof str === "string") {
    var repeated = "";
    for(var i = 0; i < n; i++) {
      repeated += str;
    }
  } else {
    repeated = "Not a string";
  }
  console.log(repeated);
}

repeater("Hi", 2);
repeater(3,4);
repeater("Bye", 3);

function sum(numbers) {
  var total = 0;
  for(var i=0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(total);
}

sum([4,7,8,9,15,43]);
sum([]);

function addLength(str){
  var arr = str.split(' ');
  for(var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + " " + arr[i].length;
  }
  console.log(arr);
}

addLength('apple ban')
addLength('you will win')
