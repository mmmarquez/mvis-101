# JavaScript II

* Intro
* Resources
* Review
* Libraries
* JavaScript
  * Functions
    * Defining
    * Executing
    * Return
  * Control Flow
    * If/Else
    * While/Do/For
    * Breaking
    * Switch
  * Data Structures
    * Arrays
    * Objects
  * Transforms
    * JSON/CSV/TSV
  * DOM
* Homework

## Intro

Today:

* Vue.js

  * http://connectpro39003801.adobeconnect.com/p8bub27eak2x/

* JavaScript II
  * Functions, Control Flow, Data Structures
  * Mapbox, Celsium, Google Maps, Kartograph

## Resources

* http://eloquentjavascript.net/04_data.html
* https://www.csvjson.com/csv2json
* http://eloquentjavascript.net/03_functions.html
* https://codebeautify.org/tsv-to-json-converter
* https://gist.github.com/iwek/7154578
* https://github.com/Keyang/node-csvtojson
* https://www.w3schools.com/js/js_htmldom_nodes.asp
* https://cesiumjs.org/
* https://www.mapbox.com/
* http://kartograph.org/
* https://developers.google.com/maps/
* https://stackoverflow.com/questions/14379274/how-to-iterate-over-a-javascript-object
* https://www.w3schools.com/js/js_json_intro.asp
* https://www.w3schools.com/js/js_object_definition.asp

## Review

Let's take a couple of minutes to go over what we learned last lesson.

* Variables
* Conditionals
* Functions

## Libraries

Some cool libraries.

### Mapbox

Map toolkit with a good JavaScript SDK/API.

https://dist-tqghijlbdp.now.sh/

### Celsium

JavaScript library to work with 3D maps.

http://work.tbc.us/mck_globe/

### Google Maps API

Google Map offers an API for interaction.

### Kartograph

Lightweight JavaScript library for creating interactive maps.

## JavaScript : Functions

Modular code blocks.

* Structure larger programs
* Reduce repetition, to
* Associate/isolate subprograms from each other.

### Defining

There are multiple ways to define a function.
All depends on the use case and preference. We'll be using arrow functions most of the time.

#### Declaration Notation

```js
function myName(x) {
  return x * x;
}
```

#### Arrow

```js
const myFunction = y => {
  return y * y;
};

// myFunction(y)
```

### Executing

We invoke or call a function by its name followed by a parentheses with the arguments.

```js
/*
// myName(x)
// myFunction(y)
*/

let myNumber = 5;
myFunction(myNumber);

// console.log(myFunction(myNumber))
// > My function: 5
```

### Return

Functions can modify values or return values.

```js
let num = 2;
myFunction(num);
// > 4

let nuNumber = 0;
const nuFunction = x => {
  let nuNumber = x;
};

nuFunction(5);
// console.log(nuNumber)
// > 5
```

## JavaScript : Control Flow

Program is run from top to bottom. We use conditionals to control the flow of the program.

### If/Else

```js
// let myAlert = () => {
//   alert('YES!');
// };

let myFunction = x => {
  if (x > 0) {
    // BLOCK
    console.log("Yes!");
    //myAlert()
    return x;
  } else {
    // BLOCK
    console.log("Nah!");
    return null;
  }
};

/*
Chaining: else if {  }
*/
```

### While/Do/For

Looping through data.

```js
if (num > 0) {
  console.log("num is greater than 0");
} else if (num < 10) {
  console.log("+ num is greater less than 10");
} else {
  console.log("num is something else");
}
```

#### While

```js
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024
```

#### Do

```js
let yourBool = true;
do {
  //BLOCK
  //..do something while yourBool is true!
} while (yourBool);
console.log("Hi!");
```

#### For

```js
for (let number = 0; number <= 10; number = number + 1) {
  console.log(number);
}
// → 0
// → 2
//   … etcetera
```

### Breaking

Stopping the execution of a function.

```js
break;
```

### Switch

```js
let myData = "x";
switch (myData) {
  case "x":
    console.log("case: x");
    break;
  case "y":
    console.log("case: y");
    break;
  default:
    console.log("??");
    break;
}
```

## JavaScript : Data Structures

Data sets and collections.

```js
['a', 'ty' '0']
{ value: 'sfd', value: 'sdsd' }
```

### Arrays

List of values between square brackets, separated by commas.

```js
let myArray = ['a', 'ty' '0']
// [0, 6, 98, 1]
// index = [index]

myArray[1]
// > ty

// USEFUL: length
// let myArrayLength = myArray.length

// USEFUL: push
// myArray.push('s')
// > ['a', 'ty' '0', 's']
```

#### forEach

Looping through the values of an array.

```js
let myArray = ['a', 'ty' '0']

myArray.forEach((x, index) => {
  console.log(x, index)
  // > a, 0
  // > ty, 1
  // > 0, 2
})
```

### Objects

Collections of properties. We use curly braces.

```js
let myObject = { value: "hola", amount: 0 };

myObject.value;
// > 'hola'
```

#### for

Looping through an object

```js
for (let key in myObject) {
  console.log(key, myObject[key]);
}

/*
We can also convert object to array and use forEach.
*/

Object.keys(Array).forEach(key => {
  console.log("key", key);
  //> key hola
  //> key amount
});
```

### Objects X Arrays

We can combine and nest.

```js
let myData = [
  { name: 'Mateo' age: 30, specie: 'human' },
  { name: 'Huey' age: 12, specie: 'dog'  }
]

myData.forEach((entry, index) => {
  console.log(entry, index)
  // entry.name
  // > Mateo
  // > Huey
})
```

## JavaScript : Transforms

Ideally, our data would be JS Objects or Arrays, but this is not the case always, so we need to apply transformations. CSV/TSV/JSON/EXCELL are all popular data collection formats.

There are many web services to do this. We can also do it directly in our program.

This is when NPM becomes extremely useful. We can search for a package:

https://www.npmjs.com/package/csvtojson

and, while being in our project, we can add it.

```bash
npm i csvttojson
```

```js
const csvFilePath = "...csvFile.csv";
const csv = require("csvtojson");

csv()
  .fromFile(csvFilePath)
  .on("json", jsonObj => {
    // combine csv header row and csv line to a json object
    // jsonObj.a ==> 1 or 4
  })
  .on("done", error => {
    console.log("end");
  });
```

The other method, if you don't use NPM.

https://www.papaparse.com/

And can be added to the index.html as an external dependency.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/4.3.7/papaparse.min.js"></script>
```

We can then use the helpers in our JavaScript file.

```js
Papa.parse(file, {
  complete: function(results) {
    console.log("Finished:", results.data);
  }
});
```

## JavaScript : DOM

Generating HTML in pure JavaScript

```html
<div id="container"></div>
```

```js
let nodeContainer = document.querySelector("#container");
let nodeElement = document.createElement("p");
let nodeText = document.createTextNode("This is new.");

//.appenChild
// We append all th
nodeElement.appendChild(nodeText);
nodeContainer.appendChild(nodeElement);
/*
<div id="container">
  <p>
    This is new.
  </p>
</div>
*/
```

```html
<ul id="list"></ul>
```

```js
let listData = [{ name: "Mateo" }, { name: "Hue" }];

let ourList = document.querySelector("#list");

// Let's loop through our listData and create HTML nodes.
listData.forEach((item, index) => {
  // Let's create a text node for eac of the name properties.
  // > Mateo, Huey
  let listItem = document.createElement("li");
  // we can also add an attribute such as class or ID ot the element.
  //element.setAttribute("class", "list-item");
  listItem.setAttribute("class", "list-item");
  // remember setting the style? We can also set style!
  listItem.style.backgroundColor = "red";

  let nameText = document.createTextNode(item.name);
  let listNode = listItem.appendChild(nameText);

  // Let's append the iteration to the master node element.
  ourList.appendChild(listItem);
});

/*
<u id="list">
  <li class="list-item">
    Mateo
  </li>
  <li class="list-item">
    Huey
  </li>
</u>
*/
```

## Homework

D3.js is not the only library to visualize data. Almost all visualization tool include a JS API/SDK so users can interact and integrate.

In the context of your visualization (refer to previous homework), research JavaScript libraries, web services or anything that could fit your needs.

Take a look at the data sets you have in mind and create a sample model (structure) of it, as a JavaScript object. Don't include all the data set, just the structure of each `row`. This is the model.

```js
// for example, you have a CSV with country and lat/long

let myMapData = [
  { country: "Colombia", lat: "982973", long: "5462332" },
  { country: "Costa Rica", lat: "008363", long: "-282387" }
];
```

You can always work with the full data set if you feel comfortable transforming it programmatically or using a web service.

Using this sample model of data, iterate and create a list of html elements of your choice, displaying the data.

```js
// for example, you have a CSV with country and lat/long

myMapData.forEach((x, index) => {
  // ...
  // .createElement
  // x.country
  // x.lat
  // x.long
  // ...
});
```

As something extra, take a look at the D3.js Example Gallery https://github.com/d3/d3/wiki/Gallery and choose one visualization that interests you.

**Next Week** we'll dig into the basics of D3.js 📈🔥

### Requirements

* Use 🛑 **ONLY** JavaScript to generate the HTML elements. 🛑 Only elements allowed inside the `<body>` are the container elements that will nest your HTML.
* Any deployment method.
* Serve and work locally.
* Include your project folder in the assets folder.
* Include your research as content.
* Include link to the D3.js example.
* Include a sample of your data set as a list in the HTML.
* Use CSS to style the page.
* Consider principles of design or some aesthetic considerations, always.

### Submission

Let's keep the same submission structure, but this time we are also going to include the local project, under the /assets folder.

Refer to the code examples (hw-template) / resources at the top of the page.

Please include your deployment URL and your content in the markdown file.

**Please Read:**

* http://eloquentjavascript.net/03_functions.html
* http://eloquentjavascript.net/04_data.html
* https://github.com/d3/d3/wiki/Gallery (choose example)

**DUE! SATURDAY APRIL 14th**

* Local Project + ZIP export

_Please submit to CANVAS and follow the required submission structure_
