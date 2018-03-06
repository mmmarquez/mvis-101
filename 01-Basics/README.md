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
- https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf (HTML Cheat Sheet)
- https://devhints.io/css (CSS Cheat Sheet)

- http://interactivepython.org/runestone/static/pythonds/_images/htmltree.png 
- 

## Web Context

- Accesible
- Universal
- Reach
- Open Source
- Community

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

![alt text](https://cdn.pbrd.co/images/HaAykpF.png "Tree View")


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
    /* css styles */
    body {
        background-color: teal;
        color: gold;
    }
    p {
        color: white;
        background: black;
    }
</style>
```

In the case above, we are applying `background-color: white` and `color: black` to the HTML element. 

### JavaScript
JavaScript is a scripting language that gives interaction to the HTML document. Most of the time we use JavaScript to dynamically change data, trigger animations or listen to user interactions with the document.

We can include scripts directly in the HTML, between two `<script>` tags.

```html
<body>
    <!-- JavaScript -->
    <script>
        alert("Hi!");
    </script>
</body>
```

## Putting it All Together

- The most basic HTML template, with inline `<style>` and `<script>`

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        <style>
            body {
                background-color: teal;
                color: gold;
            }
            p {
                color: white;
                background: black;
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
We'll be using Codepen.io online editor in this excercise. Make sure you are logged in.

**Goals**
- Get familiar with Codepen.io, a web based editor.
    - I also encourage to take a look at Glitch https://glitch.com/ 
- Understand the relationships between HTML, CSS and JS in a realtime environment.

**Setup**
Let's go to http://codepen.io
- Create New Pen
- Save the project following this pattern **MVIS-101-01_name-lastname**
    - MVIS-101-01_mateo_marquez
- Please share your Codepen URL / Username with the class.

![alt text](https://cdn.pbrd.co/images/HaAbWRG.gif "Codepen")

**Build**

Copy + paste this snippet in the HTML block.

```html
    <!-- 
        Codepen.io generates all the necessary markup.
        Anything that you include here will be in between <body>
    -->
    <h1>Title</h1>
    <div>
        <p>Some Content</p>
        <p>More Content</p>
    </div> 

```

Copy + paste this snippet in the CSS block.

```css
    /*
    Comments :~)
    */
    body {
        background-color: teal;
        color: gold;
    }
    p {
        color: white;
        background: black;
    }
```

Copy + paste this snippet in the JS block.

```js

    console.log("I'm useful")
    // alert("Hello, world!");
    // document.querySelector("p").style.background = "purple";

```

#### HOMEWORK

- 