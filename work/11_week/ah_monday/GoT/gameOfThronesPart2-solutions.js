/*****************************************
 * CHAPTER 4: You Either Win, or You Die *
 *****************************************/
console.log("\n---- Chapter 4 ----\n");
var kings = [
  {name: "Joffrey", house: "Baratheon-Lannister", ironThrone: true},
  {name: "Stannis", house: "Baratheon",           ironThrone: false},
  {name: "Renly",   house: "Baratheon",           ironThrone: false},
  {name: "Balon",   house: "Greyjoy",             ironThrone: false},
  {name: "Robb",    house: "Stark",               ironThrone: false}
];

// 1.  We must acclaim the five kings: print to the console a hail to each,
//     using a new `hailTo` function and the `forEach` method:
//     "Long live King [name] of House [house]!" (five times...)
console.log("Number 1:");
function hailTo(king) {
  // Using string concatenation
  // console.log("Long live King " + king.name + " of House " + king.house + "!");

  // Using template literals.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  console.log(`Long Live King ${king.name} of House ${king.house}!`);
}

// Using forEach
kings.forEach(function(k) {
  hailTo(k);
});

// Using an old-fashioned for loop
// for(var i = 0; i < kings.length; i++) {
//   hailTo(kings[i]);
// }

// 2.  Now we must be sure to print the correct salute... For a "king" not on
//     the Iron Throne we must write a function `declaim` that returns the line:
//     "Woe be to the pretender [name] of the house [house]..."
console.log("Number 2:");
var declaim = function(kingObject) {
  if(!kingObject.ironThrone) {
    console.log(`Woe be to the pretender ${kingObject.name} of the house ${kingObject.house}...`);
  }
};

kings.forEach(function(crownWearer) {
  declaim(crownWearer);
});

// 3.  Now we must hail all of the kings. Give a true hail only to the king on
//     the Iron Throne (where ironThrone is true), but not the others; instead we
//     must declaim them.
console.log("Number 3:");
kings.forEach(function(ki) {
  // Using a regular if / else
  if(ki.ironThrone) {
    hailTo(ki);
  } else {
    declaim(ki);
  }

  // Using a ternary. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  // ki.ironThrone ? hailTo(ki) : declaim(ki)
});

// 4.  Write a function expression named `kneel` that prints:
//     "The [king/pretender] [name] of house [house] must kneel!"
console.log("Number 4:");
function kneel(kneeler) {
  console.log(`The ${kneeler.ironThrone ? "King" : "pretender"} ${kneeler.name} of house ${kneeler.house} must kneel!`)
}

kings.forEach(function(deadDude) {
  kneel(deadDude);
});

// 5.  Finally, the struggle begins: Loop over the list of kings, either hailing
//     or declaiming them as above (depending if they are on the Iron Throne);
//     at the end of each loop, remove one king at random and print the line
//     from #4 (that they must *kneel*), and then loop over the list again. Do
//     this until there is only one king left. If at any time the king on the
//     Iron Throne is removed, ensure that the next in line (the first king in
//     the list) is now placed upon it (their ironThrone property is set to
//     true).
console.log("Number 5:");

/* STEP 1: "PLAIN-ENGLISH" PSEUDO-CODE. Explain what must happen. */
// Interate over the list of kings (forEach)
// If ironThrone is true, hail the king,
// else declaim them
// pick one king at random
// make that king kneel
// remove them from the kings array
// if that king was on the ironThrone, set the new king
// repeat until there is only one king


/* STEP 2: WRITE THE CODE THAT IS INSIDE THE LOOPS as functions. */

function yell(king) {
  return king.ironThrone ? hailTo(king) : declaim(king);
}

function dethrone(king) {
  kneel(king); // Make them kneel
  kings = kings.filter(function(k) { // Remove them from the array
    return k != king;
  });
  if(king.ironThrone) { // If they were the king, annoint a new king
    kings[0].ironThrone = true;
  }
}


/* STEP 3: INCORPORATE THE LOOPS WITH THE CODE. */
while(kings.length > 1) { // Keep doing this until there is only one king
  kings.forEach(function(king) { // Hail or declaim all the kings
    yell(king);
  });
  var idx = Math.floor(Math.random()*kings.length); // Pick a random king
  dethrone(kings[idx]); // Dethrone them
  console.log("------------------------------"); // Seperator for each loop
}
// Now that there is only one true king left standing, let's hail them.
hailTo(kings[0]);
