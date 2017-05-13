# ngAnimate - Animation Cheatsheet

One way to do animations in an Angular app is to inject the module 'ngAnimate'. Documentation can be found [here](https://docs.angularjs.org/api/ng/directive/ngRepeat#animations).

##### app.js

```js
angular.module('boatsApp', ['ngAnimate'])
```

Finally! There's something in the array!

##### index.html

Add classes to the elements where you want to use animations.

```html
<div class="animate-repeat" ng-repeat="boat in all">
  <input type="checkbox" ng-model="boat.sold" /><span ng-class="{strike:boat.sold}"> {{boat.type}}: {{boat.name}} </span>
  <div ng-hide="boat.sold">
    <img ng-src="{{boat.image}}" class="boat-image"/>
  </div>
  <button ng-click="boatRemove($index)">Remove</button>
</div>
```

##### style.css

ngAnimate allows you to write styles for the class you added (`animate-repeat`) and other classes that are applied when an event happens, such as `ng-move`, `ng-enter`, and `ng-leave`.

This CSS will slide items out to the right when removed, and slide them in from the right when they're added.

```css
.animate-repeat.ng-move,
.animate-repeat.ng-enter,
.animate-repeat.ng-leave {
  transition: all linear 0.5s;
}

.animate-repeat.ng-leave.ng-leave-active,
.animate-repeat.ng-move,
.animate-repeat.ng-enter {
  opacity: 0;
  position: relative;
  left: 300px;
}

.animate-repeat.ng-leave,
.animate-repeat.ng-move.ng-move-active,
.animate-repeat.ng-enter.ng-enter-active {
  opacity: 1;
  position: relative;
  left: 0px;
}
```

Check it out in action in the [in class solution](./in_class_solution)!