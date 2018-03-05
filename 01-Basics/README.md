```
 ____           _____ _____ _____  _____ 
|  _ \   /\    / ____|_   _/ ____|/ ____|
| |_) | /  \  | (___   | || |    | (___  
|  _ < / /\ \  \___ \  | || |     \___ \ 
| |_) / ____ \ ____) |_| || |____ ____) |
|____/_/    \_\_____/|_____\_____|_____/ 
```

- Intro
- Syllabus & Resources
- Web Context
    - HTML
    - DOM
    - CSS
    - SVG
    - JavaScript

## Intro


## Syllabus


## Resources


## Web Context

### HTML
Hypertext Markup Language is used to structure content for web browsers.

```html
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <h1>Page Title</h1>
        <p>This is a really interesting paragraph.</p>
    </body>
</html>
```

### DOM
The Document Object Model refers to the hierarchical structure of HTML. Each bracketed tag is an _element_, and we refer to elements’ relative relationships to each other in human terms: parent, child, sibling, ancestor, and descendant. In the HTML above, body is the parent element to both of its children, h1 and p (which are siblings to each other). All elements on the page are descendants of html.

Web browsers parse the DOM in order to make sense of a page’s content.

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

