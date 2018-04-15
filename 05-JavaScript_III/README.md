# JavaScript II

* Intro
* Resources
* VS Extension
* Review
* External Data
* D3.js
  * Intro
  * Selections
  * Interaction
* Homework

## Intro

* JavaScript III
  * External Data
  * D3.js

## Resources

* https://www.dashingd3js.com/binding-data-to-dom-elements
* https://jsonplaceholder.typicode.com/
* https://www.metaweather.com/api/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
* https://cdnjs.com/libraries/d3
* http://square.github.io/intro-to-d3/
* https://benclinkinbeard.com/d3in5days/

## VS Extension

### Live Server

This handy extension will automatically sets a server for our project and provides auto refresh.
Very easy alternative from Serve.

https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

There are many useful libraries, I encourage you to look around.

Let's install it and use it through the lesson. We'll cover usage as we setup our project.

## Review

Let's take a couple of minutes to go over what we learned last lesson.

* HTML, CSS, JS
* Project Structure
* JavaScript Libraries

## Lesson Content

As we dig deeper in JavaScript, it only makes sense to use the editor for everything. Please check out the project sample under Resources / Code at the top of the page. Here we have our lesson with comments and working code.

* Download the code files under Download Examples
* Use d3-starter folder as your project folder.
* Follow along the content in the script.js

Alternatively, you can download the Code Examples here:
https://github.com/mmmarquez/mvis-101/blob/master/05-JavaScript_III/resources/05_code.zip

## Homework

Visualize data in the DOM.

Create or find a data source that fits your needs. Let's use the example fo last week's assignment.

```js
let myData = [
  { country: "Colombia", lat: "982973", long: "5462332" },
  { country: "Costa Rica", lat: "008363", long: "-282387" }
];
```

Using D3.js and your data collection, generate a list of items. Display all the values as elements in the browser.

```js
// just an example!

d3
  .select("#list") // select your element container
  .selectAll("li") // select an empty collection of elements, just so D3.js knows!
  .data(myData) // chain your data collection
  .enter() // "enter", kind of enter a loop of that collection of items.
  .append("li") // we append a <li> element for each item.
  .text((d, i) => {
    // we add text to each list item.
    return d.country; // d is the object, so we can get the country by d.country.
  });
```

Some reading below -- mostly D3.js tutorials! There are pretty basic, just go over them we'll cover some of the concepts next class.

A nice little podcast, below as well. We might discuss this one.

Don't be frustrated, it might take couple of times to understand. I relate this to math, sometimes I'll have to step away and then return. Is also a language, with it's own syntax and concepts.

**Next Week** we'll continue with D3.js - possibly external data sets and simple graphs. 📈🔥

### Requirements

* Use 🛑 **ONLY** D3.js to generate the HTML elements from your data source 🛑
* Make sure your data source has at least 20 elements.
* Any deployment method, just include url in markdown file.
* Serve and work locally.
* Include your project folder in the assets folder.
* Use CSS to style the page.
* Consider principles of design or some aesthetic considerations, always.

### Submission

Let's keep the same submission structure, but this time we are also going to include the local project, under the /assets folder.

* MVIS-101-05_mateo_marquez
  * README.md
  * assets
    * your-d3-project folder

Refer to the code examples (hw-template) / resources at the top of the page.

Please include your deployment URL and your content in the markdown file.

**Please Read:**

* https://benclinkinbeard.com/d3in5days/
* http://square.github.io/intro-to-d3/
* https://www.dashingd3js.com/binding-data-to-dom-elements

**DUE! SATURDAY APRIL 21st**

* Local Project + ZIP export

_Please submit to CANVAS and follow the required submission structure_
