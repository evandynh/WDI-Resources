# LocalStorage in Angular

------

###Roadmap:

* Review
	* How to see it in browser
	* How to access it in JS
	* What would we use it for?
* $window vs window
* Creating a $localStorage factory – lets you store JSON in localstorage
	* This lets us store objects or arrays instead of just strings
* Challenge Labs:
	* Store a string with your name in it in localStorage using code.
	* Retrieve it on a page.
	* Refactor: Use an Input text field and save it to localstorage when you click a "Save" button.
	* If time permits: Make a todo list app that saves to localStorage using your factory.

### Creating a $localStorage factory:
	.factory('$localStorage', ['$window', function($window) {
	  return {
	    set: function(key, value) {
	      $window.localStorage[key] = value;
	    },
	    get: function(key, defaultValue) {
	      return $window.localStorage[key] || defaultValue;
	    },
	    setObject: function(key, value) {
	      $window.localStorage[key] = JSON.stringify(value);
	    },
	    getObject: function(key) {
	      return JSON.parse($window.localStorage[key] || '{}');
	    }
	  }
	}])
