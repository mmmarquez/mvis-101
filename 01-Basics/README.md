# BASICS

- Intro
- Syllabus
- Setup
- Resources
- Web Context
    - HTML
    - DOM   
    - CSS
    - JavaScript
- Excercise
- Homework

## Intro

Hello!

## Syllabus

Syllabus PDF can be found in the top nanvigation bar.

## Setup
Today we are goign to make use of the following services:

- Github Account
- Codepen Account

Please make sure to sign up since we'll be using these tools as we go over the content of the lesson.

## Resources
- https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf
- http://www.pxleyes.com/blog/wp-content/uploads/2010/03/css-cheatsheet-portrait.pdf

## Web Context

### HTML
Hypertext Markup Language is used to structure content for web browsers.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>Title</h1>
        <p>Some Content</p>
    </body>
</html>
```

### DOM
_The Document Object Model_ is the hierarchical representation of the structure of HTML. Each bracket is considered an _element_.

Human terms are used when referring to specific elements' relationships to each other, for example: parent, child, sibling, ancestor and descendant.

Web browsers read and interpret the DOM.

![alt text](https://cdn.pbrd.co/images/HazN0oN.gif "Logo Title Text 1")

### CSS

_Cascading Style Sheets_ are used to style the HTML page. Basic CSS syntax is something like this:

CSS styles can be added directly to the HTML, between two `<style>` tags. 

```html
<style>
    body {
        background-color: white;
        color: black;
    }
</style>
```

In the case above, we are applying `background-color: white` and `color: black` to the HTML element. 

### JavaScript
JavaScript is a scripting language that gives interaction to the HTML document. Most of the time we use JavaScript to dynamically change data, trigger animations or listen to user interactions with the document.

We can include scripts directly in the HTML, between two `<script>` tags.

```html
<body>
    <script>
        alert("Hello, world!");
    </script>
</body>
```

## Putting it All Together

This is how a basic HTML document looks like, based on the contents above.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        <style>
            body {
                background-color: white;
                color: black;
            }
        </style>
    </head>
    <body>
        <h1>Title</h1>
        <p>Some Content</p>
        <script>
            alert("Hello, world!");
        </script>
    </body>
</html>
```

## Excercise

Let's go to http://codepen.io
- Create New Pen

![alt text](https://cdn.pbrd.co/images/HaAbWRG.gif "Logo Title Text 1")

