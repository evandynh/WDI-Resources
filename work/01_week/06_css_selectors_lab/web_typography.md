#Web Typography

*"Web Design is 95% Typography"* 

###Objectives

- Learn the difference between font and typeface
- Understand what typography is and why it's important
- Manipulate fundamental typographic properties 
- Create a responsive blog

###Font vs typeface

A **font** is the packaged up collection of letterforms; traditionally physical blocks used in printing, nowadays also including digital files. It's the delivery mechanism. The font includes characteristics such as size, weight, italics, and typeface.

A **typeface** is what the designer creates; the design. It represents one aspect of a font. 

[Font vs. Typeface](http://www.webopedia.com/TERM/T/typeface.html)

<img src='http://www.webopedia.com/FIG/TYPEFACE.gif' />

####What is monospace?

	All monospace characters have the same width

###Why is typography important?

There are two essential aspects of typography which directly concern web designers:

- those which influence your choice of typeface

- and those which you can manipulate (often through CSS).

###What are some typographic properties that can be manipulated via CSS?

- font
- font-family
- font-size / line-height
- font-weight
- font-style
- font-variant

###Put it into action

Set up the directory

	$ mkdir typography typography/css
	$ cd typography
	$ touch index.html css/styles.css

In `index.html`

```html
<html>
  <head>
    <meta charset="utf-8">
    <title>Web Typography</title>
    <link rel="stylesheet" href="css/styles.css" />
  </head>
  <body>
    <p class='serif'>
      Hello serif
    </p>

    <p class='sansserif'>
      Hello sans serif
    </p>

    <p class='monospace'>
      Hello monospace
    </p>

  </body>
</html>
```

In `styles.css`

```css

p.serif {
	font-family: "Times New Roman", Times, serif;
}

p.sansserif {
	font-family: Arial, Helvetica, sans-serif;
}

p.monospace {
	font-family: "Courier New", "Lucida Console", monospace;
}
```
###Make the font bigger, and notice that these fonts have a lot of personality!

###font-style and font-size

####Pixels 

```css
p.italic{
	font-style: italic;
	font-size: 40px 
}
```

Using pixels give you complete control over the font-size.

####Em

Resizing using em is the usual way developers change font-size. The em size unit is recommended by W3C.

1em is equal to the current font-size, and since the default font-size is 16px, the default size of 1em is 16px.

```css
h1 {
    font-size: 2.5em; /* 40px/16=2.5em */
}

h2 {
    font-size: 1.875em; /* 30px/16=1.875em */
}

p {
    font-size: 0.875em; /* 14px/16=0.875em */
}
```

###Rem

The em unit is relative to the font-size of the parent, which causes the compounding issue. The rem unit is relative to the root—or the html—element. That means that we can define a single font size on the html element and define all rem units to be a percentage of that.

Comparing EM and Rem

```html
<p class="em-text">EM Text</p>
<p class="rem-text">REM Text</p>

<!-- DIV font-size is .75em * 16px = 12px -->
<div>
    
    <!-- 1em = 12px | 1rem = 16px -->
    <p class="em-text">EM Text</p>
    <p class="rem-text">REM Text</p>
    
    <!-- Nested DIV font-size is .75em * 12px = 9px -->
    <div>
        <!-- 1em = 9px | 1rem = 16px -->
        <p class="em-text">EM Text</p>
        <p class="rem-text">REM Text</p>
    </div>
    
</div>
```

```css
html{
    font-size: 16px;
}

div{
    font-size: .75em;
}

.rem-text{
    font-size: 1rem;
}

.em-text{
    font-size: 1em;
}
```


###Using media queries


Media  queries consist of a media type and can, as of the CSS3 specification, contain one or more expressions, expressed as media features, which resolve to either true or false.  The result of the query is true if the media type specified in the media query matches the type of device the document is being displayed on and all expressions in the media query are true.

###Example 1

```html
<link rel="stylesheet" type="text/css" media="screen" href="sans-serif.css">
<link rel="stylesheet" type="text/css" media="print" href="serif.css">
```

###Example 2

```
@media screen {
  * { font-family: sans-serif }
}
```

###Using Media queries

In our html, leave only

```html
<h1>Hello world</h1>
```

Then specify our first media query

```css

@media only screen and (max-width: 300px) {

   body {
     font-size: 0.5em;
     background-color: lightblue;
   }

}

```

This will change the background color and font-size when the document is smaller than 300px wide

The syntax is like this:

	@media not|only mediatype and (media feature) {
	    CSS-Code;
	}

[Media features](http://www.w3schools.com/cssref/css3_pr_mediaquery.asp)

Then finish it up

```css
@media only screen and (max-width: 300px) {

   body {
     font-size: 0.7em;
     background-color: lightblue;
   }

}

@media only screen and (max-width: 250px){
  body{
    font-size: 0.6em;
    background-color: lightgreen;
  }
}

@media only screen and (max-width: 200px){
  body{
    font-size: 0.5em;
    background-color: lightpink;
  }
}
```

###Font libraries

[Open fonts](http://openfontlibrary.org/)

[Google fonts](https://www.google.com/fonts)


###Activity

> Create a responsive blog (media queries) using what we learned about fonts. Utilize a Google font to make your blog pretty. 