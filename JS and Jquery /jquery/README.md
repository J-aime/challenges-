# Practice with JQuery

## Learning Competencies
- link an external JavaScript file to an HTML file
- link to the jQuery Library
- select elements in the DOM using jQuery
- modify attributes of DOM elements using jQuery
- modify DOM element classes using jQuery
- write a mouseEnter event handler in jQuery

## Summary
jQuery is a feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. In this challenge you will write some basic jQuery to modify a simple web page.

## Releases

## Release 0: Fix the image
The image isn't loading! You'll want to fix the image link so you can actually view the `dbc_logo.png` image. You don't need jQuery to do this release, simply look at the HTML to figure out why it isn't loading.

## Release 1: Link your code
This challenge directory contains two files, `jquery_example.html` and `jquery_example.js`. Open both of these in Sublime for editing, and then open the `jquery_example.html` file in a Chrome Browser for viewing. You should see a very simple web page. If you open the Chrome DevTools Console tab (right click on the page and choose Inspect Element) you should see an error that looks like:

```
Uncaught ReferenceError: $ is not defined
```

This is because the `jquery_example.html` file contains a link to the `jquery_example.js` file and this file contains code (see line 1) that relies on the jQuery library. To fix this error add a link to the [jQuery CDN](https://developers.google.com/speed/libraries/devguide#jQuery) in the to the `<head>` section of the `jquery_example.html` file :

```
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
```
Now if you refresh the browser you should see the simple web page with a colored background.

## Release 2: Selecting Elements with jQuery
jQuery allows you to select elements by their id, class, tag name or other css style selectors. Use several different [jQuery Selectors](http://api.jQuery.com/category/selectors/) to select the elements on this page. Verify your selectors work by assigning them to a variable and then viewing this variable in the console.

For example, add the code `bodyElement = $('body')` to the `jquery_example.js` file and then in the Chrome DevTools Console type `bodyElement`. This should show a jQuery object in the console.

## Release 3: Modify Elements with jQuery
The jQuery [css method]( http://api.jQuery.com/css/) allows you to modify a selected elements css. Use this to change the following css attributes on the `<h1>` element in the body (not the `<h1>` element in the mascot div):

1. color
2. border
3. visibility

The jQuery `.html( ) ` method allows us to set and get the html of an element. Use this method to change the text above the cohort mascot to match YOUR COHORT MASCOT NAME.

## Release 4: Event Handlers
jQuery has an `.on( )` method to register event handlers. Use this to change the image on the page.

1. Find an image of your cohort animal mascot on the web. Copy the URL of the image.
2. Add a `mouseEnter` event to the image so that the image is switched to your cohort mascot when you move the mouse over it.

```
  $('img').on('mouseover', function(e){
    e.preventDefault()
    $(this).attr('src', 'YOUR IMAGE URL')
  })
```

You may notice that this effect doesn't reload the original image when your mouse leaves the element. Apply a [jQuery Event](http://api.jQuery.com/category/events/) to show the original `dbc_logo.png`

## Release 5: Have Some Fun
There are a lot of effects you can implement with jQuery. Use the [jQuery Animate](http://api.jQuery.com/animate/) method to animate the size and border of the mascot image.

## Release 6: Push!
