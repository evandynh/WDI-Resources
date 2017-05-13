# Cheat Sheet: Adding Facebook Auth Strategy to Passport (Node/Express/Mongo)

---

Adapted from [https://scotch.io/tutorials/easy-node-authentication-facebook](https://scotch.io/tutorials/easy-node-authentication-facebook) by Ira Herman

---

## Intro:
Use the solution code from the [Local Authentication with Passport Lesson](../01_local_authentication_with_passport) as your starting point. That code includes passport, set up with a local authentication strategy. This cheat sheet will help you add facebook authentication as an alternative sign-in/sign-up strategy.


## Add to your schema in models/user.js:

	facebook         : {
	    id           : String,
	    token        : String,
	    email        : String,
	    name         : String
	}
	
so your whole schema will look like this now:

	var User = mongoose.Schema({
	  local : {
	    email        : String,
	    password     : String,
	  },
	  facebook         : {
	    id           : String,
	    token        : String,
	    email        : String,
	    name         : String
	  }
	});


## Create app in Facebook Developers Panel:

[https://developers.facebook.com/](https://developers.facebook.com/)

Create your application. This app name will need to be unique and users will see it in their list of authorized apps.

Your app URL is: http://localhost:3000

In settings/advanced, set your Valid OAuth redirect URL to:
http://localhost:3000/auth/facebook/callback

Once you deploy and have a production URL, you'll want to update these values in facebook.

## Create a .env file for your secret keys.

Since we are commiting to github, we don't want to expose our secret keys to the public. In that case we should put our keys into a file that is ignored by git (in .gitignore) so it stays out of our repo.

To help us handle this (and make them work on heroku), use the [dotenv npm package](https://www.npmjs.com/package/dotenv).

* ```npm install dotenv --save```
* Then create a file called `.env` in the root of your project.
* Add the `.env` file to your `.gitignore`.

Add the following lines inside `.env` (replace 'your-secret-clientID-here' and 'your-client-secret-here' with your actual keys from the facebook developer portal):

```
FB_CLIENT_ID='your-secret-clientID-here'
FB_CLIENT_SECRET='your-client-secret-here'
FB_CALLBACK_URL='http://localhost:3000/auth/facebook/callback'
```

**Add to the top** of your **server.js**:

```JS
require('dotenv').config()
```

Now you'll be able to access the variables by using `process.env.VARIABLE_NAME_HERE` anywhere in your project. 

For example `FB_CLIENT_ID` will be `process.env.FB_CLIENT_ID` 

### Heroku

To make these work on heroku, you'll need to manually add the variables using the heroku web panel or `heroku config:set` tool from the command line. Read [this guide](https://devcenter.heroku.com/articles/config-vars) for more info.


## Add the facebook strategy to your passport.js

### First add the passport-facebook module near the top:

  `var FacebookStrategy = require('passport-facebook').Strategy;`

## Then add the facebook strategy section to your module exports:

	 // =========================================================================
	 // FACEBOOK ================================================================
	 // =========================================================================
	 passport.use(new FacebookStrategy({
	
	     // pull in our app id and secret from our .env file
	     clientID        : process.env.FB_CLIENT_ID,
	     clientSecret    : process.env.FB_CLIENT_SECRET,
	     callbackURL     : process.env.FB_CALLBACK_URL,
	     profileFields   : ["emails", "displayName", "name"]
	
	 },
	
	 // facebook will send back the token and profile
	 function(token, refreshToken, profile, done) {
	
	     // asynchronous
	     process.nextTick(function() {
	
	         // find the user in the database based on their facebook id
	         User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
	
	             // if there is an error, stop everything and return that
	             // ie an error connecting to the database
	             if (err)
	                 return done(err);
	
	             // if the user is found, then log them in
	             if (user) {
	                 return done(null, user); // user found, return that user
	             } else {
	                 // if there is no user found with that facebook id, create them
	                 var newUser            = new User();
	
	                 // set all of the facebook information in our user model
	                 newUser.facebook.id    = profile.id; // set the users facebook id                   
	                 newUser.facebook.token = token; // we will save the token that facebook provides to the user                    
	                 newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
	                 newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
	
	                 // save our user to the database
	                 newUser.save(function(err) {
	                     if (err)
	                         throw err;
	
	                     // if successful, return the new user
	                     return done(null, newUser);
	                 });
	             }
	
	         });
	     });
	 }));
	 //  =========================END FACEBOOK===================================

Your entire *passport.js* should now looks like this:

	 var LocalStrategy   = require('passport-local').Strategy;
	 var FacebookStrategy = require('passport-facebook').Strategy;
	 // console.log(LocalStrategy.toString())
	
	 var User            = require('../models/user');
	
	 module.exports = function(passport) {
	
	   passport.serializeUser(function(user, done) {
	     done(null, user.id);
	   });
	
	   passport.deserializeUser(function(id, callback) {
	     User.findById(id, function(err, user) {
	         callback(err, user);
	     });
	   });
	
	   passport.use('local-signup', new LocalStrategy({
	     usernameField : 'email',
	     passwordField : 'password',
	     passReqToCallback : true
	   }, function(req, email, password, callback) {
	      process.nextTick(function() {
	
	        // Find a user with this e-mail
	        User.findOne({ 'local.email' :  email }, function(err, user) {
	          if (err) return callback(err);
	
	          // If there already is a user with this email
	          if (user) {
	            return callback(null, false, req.flash('signupMessage', 'This email is already used.'));
	          } else {
	          // There is no email registered with this email
	
	            // Create a new user
	            var newUser            = new User();
	            newUser.local.email    = email;
	            newUser.local.password = newUser.encrypt(password);
	
	            newUser.save(function(err) {
	              if (err) throw err;
	              return callback(null, newUser);
	            });
	          }
	        });
	      });
	    }));
	
	    passport.use('local-login', new LocalStrategy({
	      usernameField : 'email',
	      passwordField : 'password',
	      passReqToCallback : true
	    }, function(req, email, password, callback) {
	      // Search for a user with this email
	       User.findOne({ 'local.email' :  email }, function(err, user) {
	         if (err) return callback(err);
	
	          // If no user is found
	         if (!user) return callback(null, false, req.flash('loginMessage', 'No user found.'));
	
	         // Wrong password
	         if (!user.validPassword(password))     return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
	
	         return callback(null, user);
	       });
	    }));
	
	    // =========================================================================
	    // FACEBOOK ================================================================
	    // =========================================================================
	    passport.use(new FacebookStrategy({
	
	        // pull in our app id and secret from our .env file
		    clientID        : process.env.FB_CLIENT_ID,
		    clientSecret    : process.env.FB_CLIENT_SECRET,
		    callbackURL     : process.env.FB_CALLBACK_URL,
	        profileFields   : ["emails", "displayName", "name"]
	    },
	
	    // facebook will send back the token and profile
	    function(token, refreshToken, profile, done) {
	
	        // asynchronous
	        process.nextTick(function() {
	
	            // find the user in the database based on their facebook id
	            User.findOne({ 'facebook.id' : profile.id }, function(err, user) {
	
	                // if there is an error, stop everything and return that
	                // ie an error connecting to the database
	                if (err)
	                    return done(err);
	
	                // if the user is found, then log them in
	                if (user) {
	                    return done(null, user); // user found, return that user
	                } else {
	                    // if there is no user found with that facebook id, create them
	                    var newUser            = new User();
	
	                    // set all of the facebook information in our user model
	                    newUser.facebook.id    = profile.id; // set the users facebook id
	                    newUser.facebook.token = token; // we will save the token that facebook provides to the user
	                    newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
	                    newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
	
	                    // save our user to the database
	                    newUser.save(function(err) {
	                        if (err)
	                            throw err;
	
	                        // if successful, return the new user
	                        return done(null, newUser);
	                    });
	                }
	
	            });
	        });
	    }));
	    //  =========================END FACEBOOK===================================
	 }

## Add your controller actions to controllers/users.js:

	 // =====================================
	 // FACEBOOK ACTIONS=====================
	 // =====================================
	 // route for facebook authentication and login
	 function getFacebook(request, response) {
	   var signupStrategy = passport.authenticate('facebook', {
	     scope : 'email'
	   });
	
	   return signupStrategy(request, response);
	 }
	
	 // handle the callback after facebook has authenticated the user
	 function getFacebookCallback(request, response) {
	   var loginProperty = passport.authenticate('facebook', {
	     successRedirect : '/',
	     failureRedirect : '/login'
	   });
	
	   return loginProperty(request, response);
	 }

And don't forget to add these new functions to your `module.exports` so they are accessible in your routes.js. Your `module.exports` should look like this now:

	module.exports = {
	  getLogin: getLogin,
	  postLogin: postLogin ,
	  getSignup: getSignup,
	  postSignup: postSignup,
	  getLogout: getLogout,
	  getFacebook: getFacebook,
	  getFacebookCallback: getFacebookCallback,
	  getSecret: getSecret
	}

## Add to your config/routes.js:

	 // =====================================
	 // FACEBOOK ROUTES =====================
	 // =====================================
	 // route for facebook authentication and login
	 router.route('/auth/facebook')
	   .get(usersController.getFacebook)
	
	 // handle the callback after facebook has authenticated the user
	 router.route('/auth/facebook/callback')
	   .get(usersController.getFacebookCallback)
	
	 // =======END FACEBOOK ROUTES===========

## Add a facebook login button to your login and signup pages:

Outside of the `<form></form>`, add this code to your views:

	 <br><hr>
	 <h2>Login/Register with Facebook:</h2>
	
	 <a href="/auth/facebook" class="btn btn-primary"><span class="fa fa-facebook"></span> Facebook</a>

Congratulations, you should have a working facebook sign-in :).