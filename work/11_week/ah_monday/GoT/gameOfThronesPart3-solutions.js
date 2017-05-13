/*****************************************
 * CHAPTER 5: Winter is Coming           *
 *****************************************/
console.log("\n---- Chapter 5 ----\n");
var lord_eddards_children_and_wards = [
  {name: "Robb",   house: "Stark",   sex: "M", direWolf: "Grey Wind"},
  {name: "Theon",  house: "Greyjoy", sex: "M"},
  {name: "Sansa",  house: "Stark",   sex: "F", direWolf: "Lady"},
  {name: "Jeyne",  house: "Poole",   sex: "F"},
  {name: "Arya",   house: "Stark",   sex: "F", direWolf: "Nymeria"},
  {name: "Bran",   house: "Stark",   sex: "M", direWolf: "Summer"},
  {name: "Rickon", house: "Stark",   sex: "M", direWolf: "Shaggydog"},
  {name: "Jon",    house: "Stark",   sex: "M", direWolf: "Ghost", trueBorn: false}
];

var children = lord_eddards_children_and_wards;

// 1.  Write a function named `isStark` that takes a single argument `child`,
//     and returns a boolean (true or false) depending on if that child object
//     has a property `house` that is equal to "Stark".
console.log("Number 1:");

function isStark(child) {
  return (child.house === "Stark");
}

console.log("Should say true:",  isStark(children[0]));
console.log("Should say false:", isStark(children[1]));
console.log("Should say ???:",   isStark("Peter Dinklage"));
console.log();

// 2.  Write a function named `isTrueborn` that takes a single argument `child`,
//     and returns a boolean (true or false) depending on if that child object
//     has a property `trueBorn` that is equal to false.
console.log("Number 2:");

function isTrueborn(child) {
  return child.trueBorn !== false;
}

console.log("Should say true:",  isTrueborn(children[0]));
console.log("Should say false:", isTrueborn(children[7]));
console.log();

// 3.  Write a function named `trueName` that takes a single argument `child`,
//     and returns a string that is their 'true name.' A true name is a child's
//     house, if they are trueborn. Otherwise their 'true name' is "Snow".
console.log("Number 3:");

function trueName(child) {
  if (isTrueborn(child)) {
    return child.house;
  } else {
    return "Snow";
  }
}

console.log("Should say Stark:",  trueName(children[0]));
console.log("Should say Snow:", trueName(children[7]));
console.log();

// 4.  Write a function named `isTrueStark` that takes a single argument
//     `child`, and returns a boolean (true or false) depending on if that
//     child object has a **true name** that is equal to "Stark".
console.log("Number 4:");

function isTrueStark(child) {
  // return trueName(child) === "Stark" ? true : false;

  // if (trueName(child) === "Stark") {
  //   return true;
  // } else {
  //   return false;
  // }

  return trueName(child) === "Stark";
}

console.log("Should say true (Robb Stark):",  isTrueStark(children[0]));
console.log("Should say false (Jon Snow):", isTrueStark(children[7]));
console.log("Should say false (Jeyne Poole):", isTrueStark(children[3]));
console.log();


// 5.  Write a function named `isFemale` that takes a single argument `child`,
//     and returns a boolean (true or false) depending on if that child object
//     is female (true) or male (false).
console.log("Number 5:");

function isFemale(child) {
  return child.sex === "F";
}

console.log("Should say false (Jon Snow):", isFemale(children[7]));
console.log("Should say true (Jeyne Poole):", isFemale(children[3]));
console.log();

/************************************************************************
 * CHAPTER 6: "The man who passes the sentence should swing the sword." *
 ************************************************************************/
console.log("\n---- Chapter 6 ----\n");

// 1.  Create a new list of children called `starkBoys`; use the `forEach`
//     enumeration method to add only the male children to the new list.
console.log("\n", "Number 1:");

var starkBoys = [];

children.forEach(function(child) {
  if (!isFemale(child)) {
    starkBoys.push(child);
  }
});

console.log(starkBoys);

// 2.  Use the `filter` enumeration method to create a new list of children
//     called `starkBoys` that includes only the male children (same as above).
console.log("\n", "Number 2:");

var starkBoys = children.filter(function(child) {
  return !isFemale(child);
});

function isMale(child) {
  return !isFemale(child);
}

var starkBoys = children.filter(isMale);

console.log(starkBoys);

// 3.  Use the `filter` enumeration method to create a new list of children
//     called `starkGirls` that includes only the female children.
console.log("\n", "Number 3:");

var starkGirls = children.filter(isFemale);

console.log(starkGirls);

// 4.  Use the `filter` enumeration on the `starkBoys` list to update that list
//     to only include those children whose house is "Stark".
console.log("\n", "Number 4:");

starkBoys = starkBoys.filter(isStark);

console.log(starkBoys);


// 5.  Use the `filter` enumeration on the `starkBoys` list to update that list
//     to only include those children whose 'true name' is "Stark"
//     (`isTrueStark`).
console.log("\n", "Number 5:");

starkBoys = starkBoys.filter(isTrueStark);

console.log(starkBoys);


// 6.  Use the `filter` enumeration method to create a new list of children
//     called `luckyKids` that only include those children who have
//     'direwolves'.
console.log("\n", "Number 6:");

function hasWolf(child) {
  return child.direWolf;
}

var luckyKids = children.filter(hasWolf);

// Using inline anonymous function
// var luckyKids = children.filter(function(child) {
//   return child.direWolf;
// })

console.log(luckyKids);

// 7.  Use the `filter` enumeration method to create a new list of children
//     called `gDogs` that only includes those children who have direwolves
//     with names that have a "g" in them. (You may use regexes!)
console.log("\n", "Number 7:");

// var gDogs = luckyKids.filter(function(child) {
//   var str = child.direWolf.toLowerCase();
//   var m = str.indexOf("g");
//   return (m > -1);
// })

var gDogs = luckyKids.filter(function(child) {
  return (/g/i.test(child.direWolf));
  //return child.direWolf.search(/g/i) !== -1;
})

console.log(gDogs);

// 8.  Use the `filter` enumeration method to create a new list of children
//     called `notTrueStarkBoys` that only includes those children who are not
//     *boys with the 'true name' of Stark*.
console.log("\n", "Number 8:");

var notTrueStarkBoys = children.filter(function(child) {
                                  return !isTrueStark(child);
                                }).filter(isMale);

console.log(notTrueStarkBoys);

// 9.  Use the `filter` enumeration method to create a new list of children
//     called `anOn` that only includes those children whose names have either
//     'an' or 'on' in them. (You may use regexes!)
console.log("\n", "Number 9:");

// var anOn = children.filter(function(child) {
//   var str = child.name.toLowerCase();
//   var an = str.indexOf('an');
//   var on = str.indexOf('on');
//   return (an > -1 || on > -1);
// })

var anOn = children.filter(child => {
  return /[ao]n/i.test(child.name);
})


console.log(anOn);

// 10. Use the `filter` enumeration method to create a new list of children
//     called `notStarks` that only includes those children whose house is not
//     "Stark". (You may use regexes!)
console.log("\n", "Number 10:");

var notStarks = children.filter(child => !/stark/i.test(child.house))

console.log(notStarks);


// 11. Use the `filter` enumeration method to create a new list of children
//     called `dontFitIn` that only includes those children whose 'true name' is
//     not "Stark", as well as Arya.
console.log("\n", "Number 11:");

function notTrueStark(child) {
  return !isTrueStark(child);
}

var dontFitIn = children.filter(function(child) {
  return notTrueStark(child) || /arya/i.test(child.name);
})

console.log(dontFitIn);

// 12. Use any means you can to take the list of children, and create a new
//     list that only includes direwolf names.
console.log("\n", "Number 12:");

var direWolves = children.map(function(child) {
  if (child.direWolf) return child.direWolf;
}).filter(child => child !== undefined);

console.log(direWolves);
