# MEAN Stack Auth Cheatsheet
###Backend
- Bring in jsonwebtoken, mongoose-bcrypt, cors and dotenv
- Go into server.js
  -  Add `require('dotenv').config();`
  -  Add two middleware functions and use them to:
      1. Validate that incoming request content-type is json
      2. Add Failed Auth Header, handles 401 unauthorized.
- Bring in token_auth.js, all functionality for generating and validating JWTs
  - Change extractPayload to look like you want it to.
  - add TOKEN_SECRET to your .env file.
- Create your User model
  - Make sure your schema reflects how you want to store users.
  - Be sure to bring in the mongoose-bcrypt and use it.  You might also want the transformation function
- Create a users controller
  - If you are doing a '/me' route, make sure your findOne function uses a field from the payload you defined above(in token_auth.js).  You will probably also have to add an update, delete?
- Update your routes.
  - Require token_auth
    - Add token.authenticate as middleware to any route you want authorized.
    - Create routes for sign-up, and getting a token
    - Add require line for your usersController


###Frontend
- Import jwt-decode script, make sure you bring it in before angular.
  - Copy jwt-decode.2.0.1.js (probably put in a vendor folder, outside of js)
- Bring in config files (These are the files that add necessary headers to every request and deal with 401s)
  - app.debug.js (helps with debugging)
  - app.httpInterceptors.js (this is what adds everything to your module)
  - authErrorRedirect.service.js (this handles 401s gracefully)
  - jsonHeaders.service.js (this adds content-type header)
  - tokenSigning.service.js (this adds the token to header)
  - Make sure you change app name and import files.
- Bring in auth services
  - auth.service.js (handles logIn, logOut, etc)
  	 - change url to not be relative
  - token.service.js (handles token and localstorage)
  	 - change TOKEN_KEY to something that makes sense for your app
  - user.service.js (this handles actually creating a user)
  	 - 	change url to not be relative
-  Add (link) all these new js files in index.html
-  Add `<script src="js/auth/jwt-decode.2.0.1.js"></script>` to top of head section in index.html
-  Add header to index.html just below `<body ng-app='InfamousCriminals'>`:

```html
  <header ng-controller="NavbarController as vm">
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <a ui-sref="welcome" class="navbar-brand">Home</a>
        <button ng-hide="vm.authService.isLoggedIn()" ui-sref="signin" type="button" class="btn btn-default navbar-btn navbar-right">Sign in</button>
        <button ng-show="vm.authService.isLoggedIn()" ng-click= "vm.authService.logOut()" type="button" class="btn btn-default navbar-btn navbar-right">Sign out</button>
      </div>
    </nav>
  </header>
```

- Copy in the signin.html
- Create frontend routes for sign up and sign in
  - Create controller(s) and templates to handle sign-in and sign-up 
  		- (the signin.html can handle both sign in and sign up).
- Copy over the `navbar.conroller.js` and `signin.controller.js` to your js folder.
- Look at navbar.controller.js and index.html to see how isLoggedIn is used.
