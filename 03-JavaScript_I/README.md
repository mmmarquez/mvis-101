# JavaScript I

* Intro
* Resources
* Review
* JavaScript
  * Values
    * Numbers
    * Strings
    * Booleans
    * Undefined
    * Arrays
    * Objects
  * Operators
    * Arithmetic
    * Concatenation
    * Comparison
    * Logic
  * Variables / Binding
  * Functions
    * Definition
* Homework

## Intro

Today:

* JavaScript

## Resources

* http://eloquentjavascript.net/01_values.html
* https://cdnjs.com/
* https://drive.google.com/file/d/1ahdCcB2nl_02zTdQvFkH-U02bJThXM_J
* https://www.w3schools.com/js/js_htmldom.asp

## Review

Let's take a couple of minutes to go over what we learned last lesson.

* SVG
* VS Code
* Project Structure
* NPM
* NOW

## JavaScript : Values

Basic building blocks of JavaScript programs.

```js
"hello"
44
44.5
['a', 'ty' '0']
{ value: 'sfd' }
```

### Numbers

Numeric type values.

```js
10;
20;

// dot notation for floating numbers!
3.0;
```

### Strings

Represent text.

```js
// enclosed between quotes!
`hi!`;
("hello!");
("hola!");
```

### Booleans

True and false.

```js
true;
false;
```

### Undefined

Value with no information.

```js
null;
undefined;
```

### Arrays\*

Collection of values.

```js
["a", "b", "d", "x"];
```

### Objects\*

Collection of values.

```js
{ key: value }
{ hello: 'hi!' }
{ 'hello': 'hi!' } // See JSON Objects.
```

## JavaScript : Operators

Transformation of values.

```js
10 + 2 * 1;
"hi" + 2 + "helow";
2 === 2;
true && true;

if (10 === 10) {
  //yes!
} else {
  // :~(
}
```

### Arithmetic

Collection of values.

```js
10 + 2;
// console.log(10 + 2)
// → 12

10 - 2;
// console.log(10 - 2)
// → 8

4 * 2;
// console.log(4 * 2)
// → 8

4 / 2;
// console.log(4 / 2)
// → 2

(4 %
  2(
    // console.log(4 % 2)
    // remainder / modulo
    // → 0

    4 * 2 + 1
  )) /
  2;

// +
// -
// *
// /
// %
```

### Concatenation

Connecting strings.

```js
"ho" +
  "la"`half equals to: ${
    1 / 2 // template literals // → "hola" // console.log("ho" + "la")
  }`;
// → "half equals to: 0.5"
```

### Comparison

Producing Boolean values.

```js
10 > 9;
//console.log(3 > 2)
// is greater than
// → true
9 < 10;
//console.log(9 < 10)
// is less than
// → false

// >= (greater than or equal to)
// <= (less than or equal to)
// == (equal to)
// != (not equal to)
```

### Logic

To reason.

```js
true && true;
// binary operator
// and
// → true

false || false;
// binary operator
// or
// → true

!true;
// unary operator
// → false

// && (and)
// || (or)
// ! (not)

// Extra: ternary operator
console.log(true ? "x" : "y");
// → 'x'
console.log(false ? "x" : "y");
// → 'y'
```

## JavaScript : Variables

Maintaining state and remembering things.

Values are tied to a value, but not forever.

* No spaces, punctuation or special characters.

```js
let myValue = 1 + 4;
// var myValue...
// const myValue...
//console.log(myValue)
```

## JavaScript : Functions

Wrappers that provides a defined functionality.

```js
alert("hello");
// prompt! A built in function
// const myValue...

console.log("sdfgsgd");
// another built in function!
```

### Defining a function

Creating our own logic blocks.

You can pass variables and `return` a result.

```js
const myName = function(x) {
  return x + x;
};

console.log(myName(4));
// → 8
```

## Homework

** What kind of data? **

Think about a specific data/set that you will like to visualize. Or simply one that you have some kind of interest in. Investigate this data. Write a small piece of content with your thoughts and any relevant information / process.  
Create and deploy a small web application / project that will include, as content of the page itself, your thoughts. Feel free to experiment, just make sure you meet the requirements!

### Requirements

* Any deployment method.
* Serve and work locally.
* Include content.
* Use CSS to style the page.
* Consider principles of design or some aesthetic considerations.
* Include and external JavaScript library.
* Using JS and `console.log()`, print **many** things to the console.
  * Create a function
  * Perform some operation
  * etc.

### Submission

Let's keep the same submission structure, but this time we are also going to include the local project, under the /assets folder.

Refer to the code examples (hw-template) / resources at the top of the page.

Please include your deployment URL and your content in the markdown file.

**Please Read:**

* http://eloquentjavascript.net/01_values.html
* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction#DOM_and_JavaScript
* https://drive.google.com/file/d/1ahdCcB2nl_02zTdQvFkH-U02bJThXM_J

**DUE! SATURDAY APRIL 8th**

* Local Project + ZIP export

_Please submit to CANVAS and follow the required submission structure_
