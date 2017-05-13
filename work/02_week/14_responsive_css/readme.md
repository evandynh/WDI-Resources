## Responsive Design

### SWBAT

- Use media queries to write responsive CSS
- Display projects on various screen sizes without CSS issues

## Intro - What is Responsive Design?

Responsive Design uses HTML and CSS to move or change elements on a page based on the viewport size to make it look good on any screen - laptop, tablet, phone, etc.

Later in the course, we will learn about some frameworks that help with responsive design, but first, we'll do it by hand.

## `<meta>`

One use of the `<meta>` tag in HTML5 is to set the viewport for your webpage. It should be placed in the `<head>` of your `index.html` file.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This tag allows you to set the content size to fit the viewport (browser window) to different devices. It also sets the initial scale to 1.

Copy the [starter_code](./starter_code) into your workspace and add this meta tag to the head of the html file.

## @media Queries

CSS3 lets you use `@media` tags to set CSS properties based on conditions, such as screen size. Here's an example:

```css
@media screen and (max-width: 980px) {
	#pagewrap {
		width: 94%;
	}
	#content {
		width: 65%;
	}
	#sidebar {
		width: 30%;
	}
}
```

In the example above, these styles within the `@media` tag will only be applied when the screen has a width no larger than 980px. 980px is our 'break point', where the style will change.

Let's add a few different chunks of conditional formatting, based on screen size.

## Independent Practice

Using `@media` and the example above, make two more blocks of conditional styling:

* When the screen size is 700px or smaller:
  * Set the content and sidebar divs to *not float* and to have *automatic width*
* When the screen size is 480px or smaller
  * Set the header div to *automatic height*
  * Change the font size of all `h1`s to *24px*
  * Do not display the sidebar div

## Other Ways to Make Your Webpage Responsive

There are a couple of other simple ways to make sure your webpage fits on any screen.

Instead of setting div width with pixels, you can set the width with percentages (%) or based on viewport width (vw). Height can be set with percentages (%) or viewport height (vh).

There are also frameworks for responsive design, but we will get into those later in the course.