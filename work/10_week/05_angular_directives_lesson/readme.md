# Tilda Swinton's Advice on this Chaotic Life

![Tilda Photo](http://www.narniafans.com/wp-content/uploads/2010/06/vdt-narniafans311.jpg)

## Angular Directives

## Objectives

*SWBAT*:

- Use ng-repeat to iterate over data
- Bind data using ng-bind & `{{}}`
- Use ng-if & ng-class to hide and show elements
- Use ng-submit to utilize form data
- Explain the parts of `ng-class`


## What is Life? And While We're at it, What are Directives?

> "One week ago I tucked a small seed into the pocket of my cheek with a pinch of dirt. I feel it sprouting more everyday. Life is constant."
>
> -- _Tilda Swinton_

Directives are additional DOM nodes (think custom attributes on HTML tags) that Angular uses to apply behaviors to HTML elements. Angular comes with a bunch of built-in directives for a variety of behaviors; it also gives you the ability to create your own directives for custom behaviors!

There are a few you'll be using all the time that we're gonna walk through together today. There are also a couple that you've already used – `ng-app` and `ng-controller`. You added them onto HTML tags to tell your Angular app what module we were using and what controller we wanted to ask for data. Those are two examples of specific behaviors so let's see a few more.

## Tilda's Hints - SwHINTons

> "I hate to reveal this, but I know the precise moment in which everyone on earth will die. I have it written on the inside of my forehead."
>
> -- _Tilda Swinton_

Today we're taking some of [Tilda Swinton's](https://en.wikipedia.org/wiki/Tilda_Swinton) most prophetic thoughts and turning them into an Angular application. We'll have an array of SwHINTons, demonstrate some hiding & showing mechanisms built into Angular, and bind some changing data via a form.

Copy the [starter_code](./starter_code) out of the class repo and into your workspace.

Take a minute to read through the starter code. Notice that we import angular and our angular files at the bottom of our index.html instead of inside our head. This is considered by some to be the [better pattern](http://stackoverflow.com/questions/15538125/angularjs-in-head-vs-body).

Also, what's this?!

```js
(function() {
  'use strict'
  
}())
```

That's called an [IIFE](http://bguiz.github.io/js-standards/angularjs/iife/) (pronounced "iffy"), an Immediately Invoked Function Expression. IIFEs help prevent pollution of the global scope.

`'use strict'` does several things, many of which you can read about [here](https://www.nczonline.net/blog/2012/03/13/its-time-to-start-using-javascript-strict-mode/). A few:

- prevents accidental globals (you cannot assign a value to an undeclared variable)
- throws an error if you accidentally make duplicates (two identical parameters in a function, two identical keys in an object, etc.)
- safer `eval()` (variables and functions declared inside of an `eval()` statement are no longer created in the containing scope)

## Tilda's Chaotic Repetition

> "If you will it, you, too, can be birthed, devoured, then birthed again by a starving coyote. It's a wonderful thing."
>
> -- _Tilda Swinton_

Let's begin by setting up our controller and incorporating some of Tilda's greatest hints as seed data:

```javascript
(function() {
  'use strict'
  angular.module('hintApp')
    .controller('HintsController', HintsController)

  function HintsController() {
    var self = this

    // seed data from the mind of Tilda
    self.allHints = [
      {
      	id: 0,
      	wisdom: "Not blinking isn't an option, but an advantage.",
      	incorporated: false
      },
      {
      	id: 1,
      	wisdom: "You should only practice throat singing in the evening, when the sunlight is amber.",
      	incorporated: false
      },
      {
      	id: 2,
      	wisdom: "The eclipse can give much power.",
      	incorporated: false
      },
      {
      	id: 3,
      	wisdom: "Walk until no matter encroaches upon you. Shed your clothes and lay here. You are lonely/complete.",
      	incorporated: false
      }
    ]
  }
}())
```

Stupendous! We now have an array of objects called `allHints`.

> ¿¿¿ What do we need to do in our HTML file to activate our Controller ???

#### Side Note: Options on Binding Data

While we will generally use `{{ }}` to bind data, we also have the option of `ng-bind`. Let's use `ng-bind` to bind the length of our array of hints to the subtitle `h5` tag.

```html
<h5 class="shade">You have
	<span ng-bind="hintsCtrl.allHints.length"></span>
                  hints to incorporate into your chaotic life!</h5>
```

The primary difference between the two, is that on a page load, the data that is brought in via `{{ }}` can show for a brief moment at the beginning. If it's important to you, you can always include `ng-cloak` along with `{{ }}`, and it will work indentical to ng-bind.

#### `ng-repeat`

This is an incredible directive that you will undoubtedly use all the time. We can list Tilda's hints with ease!

```html
<ul>
  <li class="hint shade" ng-repeat="hint in hintsCtrl.allHints">
    <span>
      {{hint.wisdom}}
    </span>
    <button class="destroy">X</button>
  </li>
</ul>
```

`ng-repeat` is used for iterating over repeating elements. Rather than a lousy `for` loop, Angular uses `ng-repeat` on the element we want to iterate over. Think of it as a fat-cat, HTML version of `forEach`.

We've followed up the `ng-repeat` with the data we want printed.

## Tilda's Mind Never Quits - Adding a Hint

![Tilda](http://dl9fvu4r30qs1.cloudfront.net/ea/17/ae0961f1485699634946a0e76e9b/tilda-swinton.jpg)

> "Look at me. Take this with you: no one will ever gaze at you the same. This is our bond. Also-take my eyeballs; my new ones are coming in."
>
> -- _Tilda Swinton_

Angular is known for its _two-way data binding_ - in order to further understand the idea, we'll need to create some methods in our controller...

```js
self.addHint = addHint

function addHint() {
  self.allHints.push({
    id:           4,
    wisdom:       "I am, have always been, and will forever be, negative 1 year old.",
    incorporated: false
  })
}
```

... then add a neat new ng-directive that Tilda would clearly approve of: `ng-submit`.

```html
<form ng-submit="hintsCtrl.addHint()">
	<input id="darken-text" class="shade" type="text" placeholder="But think...">
</form>
```

We can officially start adding Tilda-bits of wisdom!

As soon as you press enter, it __auto-updates the list__ with our pre-written swHINTon and the count at the top of the page, without any of the extra code something like jQuery would force us to write.

##### Angular is watching for changes to our data in the controller and updating the view for us!

## Tilda Remembers, Tilda Forgets - `ng-model`

> "I bound my limbs, released myself to ocean tides. Trust brought me back to shore. I then coughed up a piece of bark; I am wearing it now."
>
> -- _Tilda Swinton_

We just saw _data-binding_ in action, but what's the good of adding only dummy data from our js file? And what's all this __two-way data binding__ I keep hearing about?

![Two-Way Data Binding](https://docs.angularjs.org/img/Two_Way_Data_Binding.png)

In the same way that Angular watched for changes in our data in the controller and updated the views, the reverse is true as well!

Let's see how that works in practice. We need to take whatever is in our input and send _that_ to our `addHint` function. We'll do so using another directive: `ng-model`.

However, before we get to the directive, let's build what we need in our controller.

Each new hint is a JS object like this:

```js
{
	id: 0,
	wisdom: "A bonafide Tilda Sw-HINT-on",
	incorporated: false
}
```

In order to have access to this kind of skeleton, we could make a `newHint` object in our controller.

```js
self.newHint = {
	wisdom: ''
}
```

We would also need to alter our previous `addHint` function:

```js
self.addHint = addHint
self.ids     = 4

function addHint() {
  self.allHints.push({
    id:           self.ids,
    wisdom:       self.newHint.wisdom,
    incorporated: false
  })
  self.ids++
  self.newHint.wisdom = ''
}
```

Now we have the ability to add new SwHINTon data on both the view and controller with the `.addHint` function. But we need to access it! This is where another awesome directive comes into play – `ng-model`.

In `index.html`:

```html
<form ng-submit="hintsCtrl.addHint()">
  <input ng-model="hintsCtrl.newHint.wisdom" id="darken-text" class="shade" type="text" placeholder="But think...">
</form>
```

What does `ng-model` do? It binds the data not just from the controller to the view like we saw earlier, but the other way around, too. This is __two-way data binding__! As we type in our input, the actual object of `newHint` changes, specifically the `wisdom` attribute inside that object.

Let Tilda prove it to you!

```html
<form ng-submit="hintsCtrl.addHint()">
  <input ng-model="hintsCtrl.newHint.wisdom" id="darken-text" class="shade" type="text" placeholder='But think...'>
</form>
<p class="shade">Considering this hint: <strong>{{hintsCtrl.newHint.wisdom}}</strong></p>
```

As you can see, the data is synced in (nearly) real time!

## Tilda's Secrets

![](http://animalnewyork.com/wp-content/uploads/david-bowie-tilda-swinton.jpg)

> "Hide in the darkest room of your home. When someone opens the door to find you, say nothing - greet them only with the glow of your wide eyes."
>
> -- _Tilda Swinton_

Angular also has its own form of `if` statements.

Using `ng-if`, let's make that paragraph only show if newHint _is not_ empty.

```html
<p class="shade" ng-if="hintsCtrl.newHint.wisdom">Considering this hint:
  <strong>{{hintsCtrl.newHint.wisdom}}</strong>
</p>
```

## Oh... That's not Tilda...
> "I've never said any of that ridiculous nonsense in my life. That's just some developers that don't understand my work. Please – I'm a serious actress."
>
> -- _actually Tilda Swinton_
>
> "Oh... my bad.... I love your work!......."
>
> -- _some developers_

So turns out that twitter account is [@notTildaSwinton](https://twitter.com/nottildaswinton). Well, let's work in a delete function using `ng-click`.

First, as always, we need to make the function in our controller:

```js
self.addHint = addHint
self.ids     = 4
self.remove  = remove

function remove(removeHint) {
  self.allHints = self.allHints.filter(function(hint) {
    return hint.id != removeHint.id
  })
}
```

And now let's add the `ng-click` method to the 'X' button we've already created in `index.html`.

```html
<button class="destroy" ng-click="hintsCtrl.remove(hint)">X</button>
```

We've officially avoided any lawsuits from Tilda Swinton! Hooray!

## Incorporate the Hints Anyway!

> "How often do you change your legs, Tildren? I find I must replace mine almost every week. Perhaps I should trek less."
>
> -- _not Tilda Swinton_

Just because these words of wisdom aren't from the true Queen Tilda, it doesn't mean we should ignore the sage advice.

We'll use another directive called `ng-class`.

```html
<div ng-class="{'class-name': expression}">
	...content...
</div>
```

If the condition of the expression in `ng-class` is truthy, then the class will be added.

#### Solo Time!

Take 10 minutes to incorporate the final part of our app!

Use what you've learned to add and remove the `'incorporated'` class from the `<li>` when you _click_ the `<span>` tag containing the `hint.wisdom`.

Additionally, change the value of the `hintsCtrl.allHints.length` to the number of hints _left to incorporate into your chaotic life_. Hint: you might need to write a function for this in your controller...

## Conclusion

> "I found a fish out of water. The lifepaths of others are not mine to bend, but I laid with her in her puddle so she would not expire alone."
>
> -- _not Tilda Swinton_

- How do we attach a function to a controller?
- How do we iterate over an array of items?
- How do we submit a form?
- What are the parts of an `ng-class`?
