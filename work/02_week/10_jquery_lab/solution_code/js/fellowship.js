console.log("Fellowship loaded.");

function makeMiddleEarth() {
  // 1.  Create a section tag with an id of "middle-earth".
  var $middleEarthSection = $('<section>', {id: 'middle-earth'});
  // 2.  Create an article tag for each land in the lands array.
  for(var i = 0; i < lands.length; i++) {
    // 3.  Give each article tag a class of "land".
    var $landArticle = $('<article>', {class: 'land'});
    // 4.  Inside each article tag include an h1 tag with the name of the land as content.
    var $landH1      = $('<h1>', {text: lands[i]});
    $landArticle.append($landH1);
    // 5.  Append each article.land to section#middle-earth.
    $middleEarthSection.append($landArticle);
  }
  // 6.  Append section#middle-earth to the document body.
  var $bodyEl = $('body');
  $bodyEl.append($middleEarthSection);

  setTimeout(makeHobbits, 2000);
}

function makeHobbits() {
  // 1.  Create a ul tag with an id of "hobbits".
  $hobbitsUl    = $('<ul>', {id: 'hobbits'});
  // 2.  Create li tags for each Hobbit in the hobbits array.
  for (var i = 0; i < hobbits.length; i++) {
    // 3.  Give each li tag a class of "hobbit".
    // 4.  Set the text of each li.hobbit to one of the Hobbits in the array.
    var $hobbitLi = $('<li>', {class: 'hobbit', text: hobbits[i]});
    $hobbitsUl.append($hobbitLi);
  }
  // 5.  Append the ul#hobbits to the article.land representing "The Shire" (the first article tag on the page).
  var $shireArticle = $('article').eq(0);
  $shireArticle.append($hobbitsUl);

  setTimeout(keepItSecretKeepItSafe, 2000);
}

function keepItSecretKeepItSafe() {

  // 1.  Create a div with an id of "the-ring".
  // 2.  Give div#the-ring a class of "magic-imbued-jewelry".
  $ringDiv = $('<div>', {
    id:    'the-ring',
    class: 'magic-imbued-jewelry'
  });
  // 3.  Add div#the-ring as a child element of the li.hobbit representing "Frodo."
  var $frodoLi = $('li').eq(0);
  $frodoLi.append($ringDiv);
  // Counter to keep track of the number of times the ring is clicked, for Part 5 - #4
  var ringClicks = 0;
  // Part 5 - 1.  Add an event listener to the "Ring" (element with id "the-ring").
  $ringDiv.on('click', function() {
    // 2.  When the user "clicks" on the Ring, run the function nazgulScreech
    nazgulScreech();
    $frodoLi.fadeOut(2000, function() {
      $frodoLi.fadeIn(2000);
    });
    // 4.  If the Ring is clicked 3 times, the entire body element should disappear, to be replaced with the text:<br>`The Ring has been returned to Sauron and the world is over.`<br>
    ringClicks++;
    if(ringClicks == 3) {
      $('body').replaceWith("<br>The Ring has been returned to Sauron and the world is over.<br>")
    }
  });

  setTimeout(makeBuddies, 2000);
}

function makeBuddies() {
  // 1.  Create an aside tag.
  var $aside = $('<aside>');
  // 2.  Create a ul tag with an id of "buddies" and append it to the aside tag.
  var $buddiesUl = $('<ul>', {id: 'buddies'});
  $aside.append($buddiesUl);
  // 3.  Create li tags for each buddy in the buddies array in data.js.
  for (var i = 0; i < buddies.length; i++) {
    // 4   Give each li tag a class of "buddy", set the text of each li to one of the Buddies in the array and append them to "ul#buddies".
    var $buddyLi = $('<li>', {
      class: "buddy",
      text: buddies[i]
    });
    $buddiesUl.append($buddyLi);
  }

  // 5.  Insert the aside tag as a child element of the article.land representing "Rivendell."
  var $rivendellArticle = $('article').eq(1);
  $rivendellArticle.append($aside);

  setTimeout(beautifulStranger, 2000);
}

function beautifulStranger() {
  // 1.  Find the li.buddy representing "Strider".
  var $strider = $('li').eq(-3);
  // 2.  Change the "Strider" text to "Aragorn" and make its color green.
  // this is a common format for "chaining" methods
  $strider
    .text('Aragorn')
    .css("color", "green");

  setTimeout(leaveTheShire, 2000);
}

function leaveTheShire() {
   // 1.  "Assemble the Hobbits" and move them (as a list) to Rivendell.
  var $hobbitsUl = $('#hobbits');
  var $rivendellArticle = $('article').eq(1);

  $rivendellArticle
    .find('aside')
    .prepend($hobbitsUl);

  setTimeout(forgeTheFellowShip, 2000);
}

function forgeTheFellowShip() {
  // 1.  Create a div with an id of "the-fellowship" within the article.land for "Rivendell". Append a list to it.
  var $fellowshipDiv = $('<div>', {id: 'the-fellowship'});

  var $rivendellArticle = $('article').eq(1);
  $rivendellArticle.append($fellowshipDiv);

  var $fellowsUl = $('<ul>');
  $fellowshipDiv.append($fellowsUl);

  // 2.  Add each hobbit and buddy one at a time to 'div#the-fellowship' list.
  var $allHobbitsAndBuddiesLis = $('li');
  for (var i = 0; i < $allHobbitsAndBuddiesLis.length; i++) {
    var $currentLi = $allHobbitsAndBuddiesLis.eq(i);
    $fellowsUl.append($currentLi);

    // 3.  After each character is added make an alert that they have joined your party.
    var message = $currentLi.text() + ' has joined the Fellowship!';

    if ($currentLi.text() === 'Gimli') message = 'Gimli: AND MY AXE!';
    alert(message);
  }

  setTimeout(theBalrog, 2000);
}

function theBalrog() {
  // 1.  Select the "li.buddy" for "Gandalf"...
  var $gandalfLi = $('li').eq(4);
  // 2.  And change its text to "Gandalf the White", and give it the class "the-white".
  // 3.  Apply style to the element, adding a "3px solid white" border to it, giving it a border radius of "10px," and making its color white.
  $gandalfLi
    .text('Gandalf the White')
    .addClass('the-white')
    .css({
      border: '3px solid white',
      borderRadius: '10px',
      color:  'white'
    });

  setTimeout(hornOfGondor, 2000);
}

function hornOfGondor() {
  // 1.  Pop up an alert that the Horn of Gondor has been blown.
  alert('The Horn of Gondor has blown!');
  // 2.  Put a line-through on Boromir's name.
  // 3.  Fade Boromir's opacity to 0.3 (he lives on in spirit).
  // 4.  Make Boromir's text color black.
  var $boromirLi = $('li').eq(-2);
  $boromirLi.css({
    textDecoration: 'line-through',
    opacity:        0.3,
    color:          'black'
  });

  setTimeout(itsDangerousToGoAlone, 2000);
}

function itsDangerousToGoAlone(){
  // 1.  Create a list with class "soulmates" in Mordor.
  $soulmatesUl = $('<ul>', {class: 'soulmates'});
  var $mordorArticle = $('article').last();
  $mordorArticle.append($soulmatesUl);

  // 2.  Take Frodo and Sam out of The Fellowship and move them to ul.soulmates in Mordor.
  var $frodoLi = $('.hobbit').first();
  var $samLi   = $frodoLi.next();
  $soulmatesUl.append($frodoLi);
  $soulmatesUl.append($samLi);

  // 3.  Add a div with an id of "mount-doom" to Mordor
  $mountDoomDiv = $('<div>', {id: 'mount-doom'});
  $mordorArticle.append($mountDoomDiv);

  setTimeout(weWantsIt, 2000);
}

function weWantsIt() {
  // 1.  Create a div with an id of "gollum" and add it to Mordor.
  var $gollumDiv = $('<div>', {id: 'gollum'});
  var $mordorArticle = $('article').last();
  $mordorArticle.append($gollumDiv);

  // 2.  Remove The Ring from Frodo and give it to Gollum.
  var $ringDiv      = $('#the-ring');
  $gollumDiv.append($ringDiv);

  // 3.  Move Gollum into Mount Doom.
  var $mountDoomDiv = $('#mount-doom');
  $mountDoomDiv.append($gollumDiv);
  setTimeout(thereAndBackAgain, 2000);
}

function thereAndBackAgain() {
  // 1.  Remove Gollum and the Ring from the document.
  var $gollumDiv = $('#gollum');
  $gollumDiv.remove();

  // 2.  Add a list to the shire, and move all the hobbits in to it.
  var $hobbitLis = $('.hobbit');
  var $articles  = $('article');
  var $shireArticle  = $articles.first();
  $('<ul>')
    .append($hobbitLis)
    .appendTo($shireArticle)
  // 3.  Add the class "collapse" to Mordor.
  var $mordorArticle = $articles.last();
  $mordorArticle.addClass('collapse');
}

// 0.  When the [page loads][ready], begin playing the sound that can be found in the element with id "hobbit-theme";
$(document).ready(function() {
  document.querySelector("#hobbit-theme").play();
  setTimeout(makeMiddleEarth, 2000);
});
