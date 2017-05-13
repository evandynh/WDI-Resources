![](https://cask.scotch.io/2014/10/angular-filters.png)

---
# Built-in Filters in AngularJS

| Learning Objectives |
| :--- |
| Use Filters to Transform Data in the View |
| Use Filters to Filter Data |
| Use Filters to Sort Data |

---
## Roadmap

- What are Filters?
- Basic Filter Syntax
- Transforming Data before it's Displayed
- Filter Data with the `filter` Filter
- Sort Data with the `orderBy` Filter
- Exercise

---
## What are Filters?

Don't let the name fool you, **filters** are not just about reducing, AKA "filtering", data.

Filters are components in AngularJS **transform** data.

All filters take data as an input, and return it transformed. However, the original "source" data is left untouched.

---
Some filters are designed to accept a primitive value, such as a string or number, manipulate it, and return the manipulated value.

Other filters are designed to work with arrays as input where the filter can then filter, sort, or perform some other type of manipulation on it before it is returned.

In this lesson, we will take a look at several [filters that come with AngularJS built-in](https://docs.angularjs.org/api/ng/filter).

In the next lesson, we will create our own custom filters.

---

**?: What are some filters that accept a primitive value? What type?**
**?: What is a filter that accepts an array?**

___

## Basic Filter Syntax

---
### Basic Syntax

We most often use filters in our binding expressions in our HTML like this:

```html
<div>{{vm.name | uppercase}}</div>
```
Note that we separate our data express and the filter with a **pipe** character.

---
### Chaining Filters

Filters can be chained too!

```html
<div>{{vm.name | uppercase | myCustomFilter}}</div>
```
When chaining, the data flows through each filter from left to right.
>**Note:** If you are running data through multiple filters where one of them reduces the amount of data and another transforms it, it would make sense to run the data through the reducing filter first - that way you don't waste time transforming data that is going to be filtered out!

---
### Extended Filters

*Extended Filters* are filters that take in one or more arguments:

```html
<div>{{vm.startDate | date:'yyyy-MM-dd'}}</div>
```
When more than one argument is passed, they are separated with additional colons.

**?: Where would I look to figure out how to format my date?**

---
## Transform Data Before it is Displayed

---
### Starter Code

Copy the starter code to a working directory.

The app is basically a list of data representing fictitious clients.

Both the list of _clients_ and the list of _cities_ is being provided by the `ClientData` service that's being injected into `MainController`.

---
There is also a `<select>` dropdown with the list of cities that the clients are from, however, it is not doing anything at this time. Note the use of the `ng-options` directive used to generate the `<option>` tags for the select. `ng-options` is very useful and has several syntaxes as shown in the [docs](https://docs.angularjs.org/api/ng/directive/ngOptions). We initialize the value of the `<select>` in the controller - gotta love data binding!

Lastly, there's an `<input>` that we will use to search our data...

---
### Transforming Data

Using a filter to transform bound data before it is rendered in the view is as simple as the examples shown in the _Basic Syntax_ section above.

To get started, let's say that we would like to, for some crazy reason, display each client's city in all caps:

```html
        <td>{{client.city | uppercase}}</td>
```

Nothing to it!

---
Now it's your turn. Using the [docs](https://docs.angularjs.org/api/ng/filter) as a reference, do the following:

- Format the _Date_ to display in this format: `03/31/2015`.
- Format the _Funds_ to display like this: `$9,716`

---
## Filter Data with the `filter` Filter

Love that heading :)

Let's say that our app's requirements are:

1. Provide filtering based upon the text entered in the search input.<br>-and-
2. Show only the clients for the city selected in the dropdown

---
### 1.

We need the ability to search clients based on any of their data matching what we type in the search input:

```html
<tr ng-repeat="client in vm.clients | filter:vm.search">
```
We are "piping" the `vm.clients` array to the filter.

We have provided `filter` with an Angular expression as an argument that evaluates to a string.

When a string is provided, `filter` checks through **all** of the properties of the objects in the array and, as long as there's a partial match, that item will be included. In other words, it performs a "fuzzy" search.

---
### 2.

For our next act, assuming that we might have hundreds or thousands of customers in some cities, looking at clients one city at a time would make sense.

We can use the `filter` filter to filter our `vm.clients` array by the selected city, which is bound to our view model.

**?: What determines the property that our `<select>` is bound to?**

---
This change to our `ng-repeat` takes care of business:

```html
<tr ng-repeat="client in vm.clients | filter:{city: vm.selectedCity} | filter:vm.search">

```
Bam! We simply chained in another `filter` filter.

With this syntax, we are providing an object as the argument. The object specifies which property, or properties, to filter on and the value to filter for!

Note that we added it **before** the fuzzy filter for performance reasons. It makes sense to chop off as much data as possible before the more complex fuzzy search has to do its job...

---
### Not Flexible Enough?

If the above two use cases of the `filter` filter do not meet your needs, you can also pass in a function as the argument.

The function will receive each item by item. If `true` is returned, the item is included.

Now, the sky's the limit!

---
## Sort Data with the `orderBy` Filter

We can use the `orderBy` filter to sort our data.

We could get stylish with this, but to avoid hurting ourselves, we'll just add an `ng-click` to our table's `<th>`'s.

Also, we'll handle this display logic inside of the `ng-click` itself, saving us from having to a method in `MainController`.
**Avoid having logic in your HTML**

---
```html
...
    <th ng-click="vm.sortBy = 'name'">Name</th>
    <th ng-click="vm.sortBy = 'city'">City</th>
    <th ng-click="vm.sortBy = 'bio'">Bio</th>
    <th ng-click="vm.sortBy = 'date'">Client Date</th>
    <th ng-click="vm.sortBy = 'funds'" class="text-right">Funds</th>
  </tr>
</thead>
<tbody>
  <tr ng-repeat="client in vm.clients | filter:{city: vm.selectedCity} | filter:vm.search | orderBy:vm.sortBy">
...
```

Check it out! Now that's what I call chaining filters!

>**Note:** The data is sorted by the value of the source data in the model, not the displayed value. The `date` field is a good example of this concept in action.

---
But wait, the `orderBy` filter accepts a second argument that will sort in descending order if the value is true:

```html
...
    <th ng-click="vm.sortBy = 'name'; vm.descending = !vm.descending">Name</th>
    <th ng-click="vm.sortBy = 'city'; vm.descending = !vm.descending">City</th>
    <th ng-click="vm.sortBy = 'bio'; vm.descending = !vm.descending">Bio</th>
    <th ng-click="vm.sortBy = 'date'; vm.descending = !vm.descending">Client Date</th>
    <th ng-click="vm.sortBy = 'funds'; vm.descending = !vm.descending" class="text-right">Funds</th>
  </tr>
</thead>
<tbody>
  <tr ng-repeat="client in vm.clients | filter:{city: vm.selectedCity} | filter:vm.search | orderBy:vm.sortBy:vm.descending">
...
```

Wow, nice functionality considering the lack of code in `MainController`!

---
## Excercise

Research for a built-in filter that can limit the number of items in an array.

Hard code the numbers in the dropdown to be 2, 5, and 10.

Limit the number of displayed clients to the number selected in the dropdown.

Be sure to add the additional filter at the end of the chain so that sort order is taken into consideration.

---
## Summary

We have used Angular's built-in filters to transform, filter, and sort data in our view.

It's also possible to use the logic of filters using the `$filter` service in our controllers, services and directives - the docs can show you how.

Hopefully you found using filters relatively straight forward - creating your own custom filters is almost as easy!

---
## References

[AngularJS Docs: Built-in Filters](https://docs.angularjs.org/api/ng/filter)

[AngularJS Docs: `$filter` Service](https://docs.angularjs.org/api/ng/service/$filter)
