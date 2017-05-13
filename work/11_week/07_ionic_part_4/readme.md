#Lab: Build a Shopping List iOS/Android app using Ionic

_Author: Ira Herman_

_This work is licensed under a 
Creative Commons Attribution-ShareAlike 4.0 International License_

## CheatSheet:
Here are some key commands using the ionic CLI.

* Creating a new ionic app:
	* ```ionic start <yourappname> tabs```
		* Other template options besides "tabs":
			* sidemenu
			* blank
	* Remember to cd into it: ```cd <yourappname>```
* Starting the ionic server to test your app and launch it in a web browser
	* ```ionic serve --lab```
* Upload your app to ionic.io so you can view it on a phone
	* `ionic upload`
	* Open it up in ionic view on your phone


## Lab Objectives:

You are building a shopping list app in ionic. This app should allow a user to:

* **View** a list of items
	* This should be the first tab a user sees.
* **Add** new items 
	* Recommend a form/input on a separate tab.
* **Save** the list to localStorage using the factory from our localStorage lesson.
	* This should happen automatically whenever a new item is added.

Bonus challenges:

* **Load** the saved list from localStorage
	* This would be a good one to do when you are viewing the list tab.
* Ability to **Delete** an item
	* A nice way to do this would be to slide left on an item to reveal a red delete option.
* **About** tab with info about you including a photo, web link, and blurb.

