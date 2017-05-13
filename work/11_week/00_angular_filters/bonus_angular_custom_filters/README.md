![](https://cask.scotch.io/2015/01/custom-angular-filters.png)

---
# Custom Filters in AngularJS

| Learning Objectives |
| :--- |
| Package Reusable Components in Modules |
| Create and Use Custom Filters |

---
## Roadmap

- The Starter Code
- Create a Reusable Module
- Basic Syntax of a Custom Filter Component
- Create a Custom `firstName` Filter
- Create an _extended_ Filter
- Exercise

---
## The Starter Code

The starter code is the same codebase we ended with in the previous lesson for built-in filters. Just a minor style was added for the column headings.

If you have the code working from the previous lesson, feel free to build upon it. If not, copy the starter code to a working directory.

---
## Create a Reusable Module

---
### Module Recap

We've already seen how our AngularJS app can bring in additional functionality with the `ngResource` module:

- We loaded the script file that contained the `ngResource` module definition.
- The `ngResource` module included the `$resource` service.
- The `ngResource` module was injected as a dependency by including it in the array when we defined our app's main module.
- We dependency injected the `$resource` into our other components.

---
### Our Turn

Because we are going to create custom filters that might come in handy beyond this app, we are going to put them in a separate module file that will make it easy to reuse them in any Angular app, just like `ngResource`.

Let's create a file:

`? touch js/myFilters-module.js`

---
**?: Now that we've created a new script file, what should we do before we forget?**

Do it.

---
**?: What's the first thing we want to do inside our file to keep from  polluting the global scope?**

Do it.

---
Next, let's define our module:

```js
  angular.module('myFilters', []);
```

**?: How does angular know this is a module definition and not a module getter?**

**?: Based upon this module definition, what other modules does `myFilters` depend upon?**

---
Now, let's make sure that our app loads our module:

```js
angular.module('app', ['myFilters']);
```

Great, now it's time to create and register a filter component...

---
## Basic Syntax of a Custom Filter Component

Writing our own filter is pretty easy. Defining a filter component and registering it with a module will look very much like we've done with controllers and factories:

```js
  angular.module('myFilters', [])

    .filter('filterName', function() {

      // filter definitions must return a function
      return function(input) {
        var output;

        return output;
      };

    });
```
We are going to chain our filter registrations right off of our module definition, so **remove that semi-colon!**

---
What we see so far is:

- We return from our filter's function definition, another function that will contain the functionality of our filter.
- The function defines at least one parameter for the input data. We will define additional parameters if we have an _extended_ filter with arguments.<br>

**?: Name a couple of the extended filters we used in the previous lesson?**

---
- The name of this filter is `filterName` and would be used in a binding expression like this:<br>`{{vm.dataValue | filterName}}`
- We return our transformed/filtered data represented here by the `output` variable.

>**IMPORTANT**: Always code your custom filters so that they do not modify the input data. For example, if you have to transform the data in an array, be sure to create a deep copy of it first like this<br>`var newArray = angular.copy(oldArray);`

---
## Create a `firstName` Filter

In our app, our clients only have a full name. We're on a first name basis with our clients - so let's create a filter to display only the first name:

```js
    .filter('firstName', function() {

      return function(fullName) {

     // return a copy of the string fullName until a space is found
        return fullName.slice(0, fullName.indexOf(' '));

      };

    });
```

---
Then, let's use it in our view:

```html
...
<td>{{client.name | firstName}}</td>
...
```
Refresh and now we are displaying the first names of our clients!

**?: To define a custom filter, what do we return from the function defining the filter?**

**?: What is the minimum number of parameters the filter function must have and what does/do it/they represent?**

---
## Create an _extended_ Filter

---
**?: What's an "extended" filter?**

---
Let's create an extended filter that takes in text and returns it trimmed to a length specified by an argument with three dots (ellipsis) appended

```js
    })

  // We're continuing to chain, so remove the semi-colon
  // from the above filter definition!

    .filter('ellipsis', function() {

      return function(text, trimSize) {
        var trimmed;
        var ellipsisCharCode = '\u2026';

        trimmed = text.slice(0, trimSize) + ellipsisCharCode;

        return trimmed;
      };

    });
```

---

Now let's use it in our view to trim the client's bio:

```html
<td>{{client.bio | ellipsis:6}}</td>
```
One of the things to realize is that the value we are providing for the trimSize argument can be an expression, including a function! This can be very useful for example to dynamically calculate how many characters you want to display.

**?: How might we use a function to provide the argument to our ellipsis scenario?**

>**Note:** In production code, it's not uncommon for the bulk of the code written to be focused on preventing errors, handling errors, and checking for edge cases. If our filter was going to be used in production, we would be writing quite a bit more code validating arguments, etc.

---
## Exercise

Create a `lastName` custom filter in your `myFilters` module that would return only the last name of the clients' full name.

Be sure there is no leading whitespace :)

---
## Summary

- In this lesson, you created a module that can be reused in another Angular app!

- We saw how straight forward it is to create custom filters and use them in our view.

- Hopefully you are beginning to realize the power Angular harnesses and how it organizes this power into components!

---
## References

[AngularJS Guide: Custom Filters](https://docs.angularjs.org/guide/filter)
