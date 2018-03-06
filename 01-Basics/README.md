# BASICS

- Intro
- Syllabus
- Setup
- Web Context
    - HTML
    - DOM   
    - CSS
    - SVG
    - JavaScript

## Intro

Hello!

## Syllabus

Syllabus PDF can be found in the top nanvigation bar.

## Setup
Today we are goign to make use of the following services:

- Github Account
- Codepen Account

Please make sure to sign up since we'll be using these tools as we go over the content of the lesson.

## Web Context

### HTML
Hypertext Markup Language is used to structure content for web browsers.
- All HTML documents start with `<!DOCTYPE html>`
- We begin the HTML document with `<html>...</html>`

Here we can see the list of all supported elements:
https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf

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

In the HTML snippet above, we can say `<body>` is the parent of `<h1>`.

Web browsers read and interpret the DOM.

![alt text](https://cdn.pbrd.co/images/HazN0oN.gif "Logo Title Text 1")

### CSS
Cascading Style Sheets are used to style the visual presentation of HTML pages. A simple CSS stylesheet looks like this:

```css
body {
    background-color: white;
    color: black;
}
```

### SVG


### JavaScript
JavaScript is a dynamic scripting language that can instruct the browser to make changes to a page after it has already loaded.

Scripts can be included directly in HTML, between two script tags

```javascript
<body>
    <script type="text/javascript">
        alert("Hello, world!");
    </script>
</body>
```

