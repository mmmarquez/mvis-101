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

- https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf/ (HTML Cheat Sheet)
- https://devhints.io/css/ (CSS Cheat Sheet)
- http://interactivepython.org/runestone/static/pythonds/_images/htmltree.png/


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

The most basic HTML template, with inlined `<style>` and `<script>` for clarity.

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

### Goals
- Get familiar with Codepen.io, a web based editor.
    - I also encourage to take a look at Glitch https://glitch.com/ 
- Understand the relationships between HTML, CSS and JS in a realtime environment.

### Setup
Let's go to http://codepen.io
- Create New Pen
- Save the project following this pattern **MVIS-101-01_name-lastname**
    - MVIS-101-01_mateo_marquez
- Please share your Codepen URL / Username with the class.

![alt text](https://cdn.pbrd.co/images/HaAbWRG.gif "Codepen")

### Build

Follow along!

**HTML block**

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

**CSS block**

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

**JS block**

```js
    console.log("I'm useful");
    // alert("Hello, world!");
    // document.querySelector("p").style.background = "purple";
```

## HOMEWORK

**PLEASE** experiment!

**Create an analogy for the realationships between HTML/CSS/JS** 

- The best way to understand new concepts is to find familiar ways to relate to them! Describe _in some way_ the relationship you see between HTML/CSS/JS.
- _Structure, Aesthetics, Function_
- _HTML is the cake, CSS is the icing and JS is the..._

**List of Interests** 

- Create a new project in Codepen.io.
    - Pattern: **MVIS-101-01_name-lastname_HW**
- Using HTML, create an _*unordered list_ of personal interests.
    - Websites, interests, words, etc.
- Using HTML, create a `div` container and nest a `<p>` element.
    - Use your **analogy** as the content.
- Using CSS, add some styling to elements.
    - Please refer to the **Resources** for CSS properties.
- Using JS, interact with the document.
    - See excercise!
    - Change the _*properties_ of elements, display an alert box, etc.

_*unordered list_

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <!-- ..etc -->
</ul>
```

_*js_

```js
    // document.querySelector("element")
    // this searchs for the specified element (and class or id)
    // FLOW: read the document, find the element <p>, style the background purple.
    // SYNTAX IS VERY IMPORTANT, follow the pattern.
    // document.querySelector("li").style.width = "50%";
    document.querySelector("p").style.background = "purple";
```

**Check Out Grasshopper**
- http://grasshopper.codes/ 

**DUE! FRIDAY MARCH 23rd** 
- Codepen + ZIP export

_Please submit to CANVAS_









