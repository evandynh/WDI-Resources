#Challenge: Build a meetup iOS app

_Author: Ira Herman_

_This work is licensed under a 
Creative Commons Attribution-ShareAlike 4.0 International License_

## Start Here:
Here are some key pieces you'll need in putting this together. It's up to you to figure out how they fit together and to do the rest.

**NOTE: ** CORS is going to block the $http request to meetup.com. Make sure to use the [CORS extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) and turn it on. 

Alternatively you can close Chrome and re-open it using the ```open -a /Applications/Google\ Chrome.app/ --args --disable-web-security``` command.

* ```ionic start <yourappname> sidemenu```
	* Other template options besides "sidemenu":
		* tabs
		* blank
* ```cd <yourappname>```
* ```atom .```
* ```ionic serve --lab```


## Code Snippets:

**Events Controller:**

	  $http
	        .get("http://api.meetup.com/2/events?group_id=1965381&key=<YOURKEYHERE>", { cache: true })
	          .then(function(response){
	            $scope.events = response.data.results;
	            console.log($scope.events);
	          });

**NOTE: ** Make sure you inject ```$http``` into the controller

**Single event Controller:**

	  $http
	      .get("http://api.meetup.com/2/event/" + $stateParams.eventId + "?key=<YOURKEYHERE>", { cache: true })
	        .then(function(response){
	          console.log(response)
	          $scope.event = response.data;
	        });

NOTE: Make sure you inject ```$http``` **AND** ```$stateParams``` into the controller

**Events list:**

    <ion-list>
      <ion-item ng-repeat="event in events" href="#/app/events/{{event.id}}">
        <p>{{event.name}}
        <br></p>
      </ion-item>
    </ion-list>
	          
**Single event view:**
	          
```<span ng-bind-html="event.description"></span>```

##Extras:

**Some example meetup group numbers to try: **

* CoWork: 1359158
* C5: 1965381
* LaRuby: 335039 
* LA Podcasters Meetup: 16460362
 
**Look up group ids:**

[https://secure.meetup.com/meetup_api/console/?path=/find/groups](https://secure.meetup.com/meetup_api/console/?path=/find/groups)

**Ionic Styles/Custom Directives Reference:**
[http://ionicframework.com/docs/components/](http://ionicframework.com/docs/components/)
