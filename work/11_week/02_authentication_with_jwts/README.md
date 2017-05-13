# Web Tokens, aka JWTs

## LOs

- Define JWT (jot), ie web token.
- Compare and contrast token-based and session-based auth strategies.
- Diagram the flow for a client credentials grant (token-based authentication).
- Identify the three major problems with token-based auth.
- Use JWTs to authenticate a RESTful API.

## Token-based authentication

#### Definition

A good start, from [Stack Overflow][so-token-definition]:

> The general concept behind a token-based authentication system is 
> simple. Allow users to enter their username and password in order to 
> obtain a token which allows them to fetch a specific resource - without 
> using their username and password. Once their token has been obtained, 
> the user can offer the token - which offers access to a specific 
> resource for a time period - to the remote site.

[You can learn more about the form and flow of token-based auth from
Scotch.io.][scotch-token-auth]

#### Comparison to session-based authentication

[There are two major types of authentication formats: client-side or 
bearer-token based auth, and server-side, or basic/digest based auth.][so-auth-formats]

The names client or server refer to where the information about the 
credential is stored: either on the client or the server. When on the 
server, we use an in-memory storage known as a "session," and the user
is given a unique ID that maps to that session. The HTTP format for
creating this session is known Basic Authorization, or (better) Digest
Authorization.

When on the client, we store the whole session locally in what is called
a "token." The server stores no information regarding our interaction,
and every request is re-authenticated.

**Pros of token-based auth:**

1.  Generally easier to implement than the preferred server-side format:
    digest.
2.  There are de-facto standard formats for both the token and the flow
    (JWT and OAuth 2.0).
3.  Without sessions, there is less server structure and overhead, while
    data about the session is persistently available.
4.  There is no state in stored in the server. This makes it:
   - more scalable: your "session" can include reqs to different physical
     machines, making load balancing easier (part of creating a
     [12 Factor App][twelve-factor]);
   - you are authenticating EVERY REQUEST, which is easier to write logic
     for, and more RESTful!

**Cons of token-based auth:**

1.  You MUST use `https` (SSL/TLS), since transmitted data can be 
    compromised, and you transmit all of your credentials.
2.  You are more vulnerable to certain man-in-the-middle attacks 
    (XSS or CSRF, depending on storage type), because you transmit all of
    your credentials.
  - Additional layers of security must be written in to your application
    logic (not a huge deal if you use libs/frameworks).
3.  Token creation and renewal can be confusing (OAuth 2.0 flows), but
    really only compared to Basic authorization, not Digest (also not a 
    huge deal if you use libs/frameworks).
4.  Since data is stored in the token, and content standards are not 
    enforced, you can store sensitive data beyond simply access to your 
    site.

**In essence, token-based auth is better, but you need to worry more about
security!**

#### Comparison to authorization-code grant (OAuth 2)

Token-based authorization flows (the transaction used to generate and
authenticate with them) is standardized as part of OAuth 2.0.

There are multiple types of "flows" defined in OAuth 2.0. So far, we
have been using **authorization grant** flow. Simple, client-to-server
token-based auth is known as **client credentials grant**.

[You can read more about that if you'd like][oauth2], but essentially this version
is much simpler, while retaining certain best practices (HTTP headers,
encryption standards, vocabulary).

## JWTs

#### Structure and Format

JWTs are JSON web tokens, and [they have a pretty clear format][jwt-format].

In essence, they are simple JSON objects comprised of a header, a series
of "claims" (fields), some of which are up to the user, and others
which are standardized and/or necessary, and a public encryption key for
validation. The whole string is then hashed using a simple algorithm

When you want to turn it back in to plain text, you can use:

**http://jwt.io/**

[You can learn even more about JWTs from Stormpath (a major auth service).][storm-jwt]

#### Using them

There are a number of good walkthroughs out there, especially:

- https://stormpath.com/blog/nodejs-jwt-create-verify

But in essence, the best thing to look at are good API docs. The best are
[GitHub's][github-api].

## Security and Web Tokens

There is a lot of anger and frustration out there about OAuth 2.0, and
especially the client credentials grant flow. In essence:

> while OAuth 2.0 is **very** useful it is **_not_ inherently secure**.

Keep in mind: every auth format has weakneses, and the programmers' job 
is to understand and minimize those weaknesses.

What it really comes down to is this:

> when you use OAuth 2.0 (client grant) you must always use SSL/TLS 
> (HTTPS), and enforce a same-origin policy (or at least a single origin
> policy [which you can't with a public API]). You should implement all 
> of [the precautions in OWASP's Top 10][owasp], as well.

Which Rails does out-of-the-box, by the way. :bowtie:

[You can learn more about the security aspects of token-based auth with
this Slideshare by Stormpath.][storm-security]

<!-- #### Lab: Token Slinger

https://github.com/proswdev/mongoose-bcrypt
https://github.com/auth0/node-jsonwebtoken

express-jwt: https://github.com/auth0/express-jwt
  this doesn't generate the tokens, it just adds
  the auth verification middleware automatically -->


<!-- LINKS -->

[so-token-definition]: http://stackoverflow.com/questions/1592534/what-is-token-based-authentication
[scotch-token-auth]:   https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication
[so-auth-formats]: http://stackoverflow.com/questions/9534602/what-is-the-difference-between-digest-and-basic-authentication
[twelve-factor]: http://12factor.net/
[oauth2]: http://alexbilbie.com/2013/02/a-guide-to-oauth-2-grants/
[jwt-format]: https://developer.atlassian.com/static/connect/docs/latest/concepts/understanding-jwt.html
[storm-jwt]: https://stormpath.com/blog/jwt-the-right-way/
[owasp]: https://www.owasp.org/index.php/Top_10_2013-Top_10
[storm-security]: http://www.slideshare.net/stormpath/rest-api-security
[github-api]: https://developer.github.com/v3/#authentication
