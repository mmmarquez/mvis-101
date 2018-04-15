/*
                                                                                    
    _____                             ____                               __         
   /\___ \                           /\  _`\                  __        /\ \__      
   \/__/\ \     __     __  __     __ \ \,\L\_\    ___   _ __ /\_\  _____\ \ ,_\     
      _\ \ \  /'__`\  /\ \/\ \  /'__`\\/_\__ \   /'___\/\`'__\/\ \/\ '__`\ \ \/     
     /\ \_\ \/\ \L\.\_\ \ \_/ |/\ \L\.\_/\ \L\ \/\ \__/\ \ \/ \ \ \ \ \L\ \ \ \_    
     \ \____/\ \__/.\_\\ \___/ \ \__/.\_\ `\____\ \____\\ \_\  \ \_\ \ ,__/\ \__\   
      \/___/  \/__/\/_/ \/__/   \/__/\/_/\/_____/\/____/ \/_/   \/_/\ \ \/  \/__/   
                                                                     \ \_\          
                                                                      \/_/          
                             ______  ______  ______                                 
                            /\__  _\/\__  _\/\__  _\                                
                            \/_/\ \/\/_/\ \/\/_/\ \/                                
                               \ \ \   \ \ \   \ \ \                                
                                \_\ \__ \_\ \__ \_\ \__                             
                                /\_____\/\_____\/\_____\                            
                                \/_____/\/_____/\/_____/                            
                                                                                    
                                                                                    
*/

/*
    ⚪ Review JS concepts.
    ⚪ Setup D3.js project
    ⚪ D3.js core concepts
    ⚪ Examples
*/

/*                        
+-+-+-+-+-+-+ +-+ +-+-+-+-+ 
|V|a|l|u|e|s| |&| |D|a|t|a| 
+-+-+-+-+-+-+ +-+ +-+-+-+-+ 
*/

// in JavaScript we have basic value types. Most languages are similar.

// a variable can hold a value. we use variables to remember, modify and reuse values.
let myVariable = 0;
var myOtherVariable = 0;
const myConstant = 0;

// numbers
Number;
0;

// strings
String;
("some text");

// boleans
true;
false;

// arrays
Array;
let myArray = ["hi", "hola", "hello"];

// objects
Object;
let myObject = {
  value: "hi",
  value: "hola",
  value: "hello"
};

/*                   
+-+-+-+-+-+-+-+-+-+ 
|F|u|n|c|t|i|o|n|s| 
+-+-+-+-+-+-+-+-+-+                   
*/

// we can modularize our program with functions!
// functions are the building blocks of javascript

// regular function declaration with "x" as a parameter
// we can add multiple parameters (x, y, z)
function standardFunction(x) {
  // we can run some code here!
  console.log("The value of the parameter: " + x);
}

// and then reuse the code around or program, by invoking the function and passing data.
standardFunction("Hello!!!!");
standardFunction("Hi!!!!");
standardFunction("Hola!!!!");

// arrow notation - recommended!
let arrowFunction = (y, z) => {
  console.log("The value of the parameters: " + y + ", " + z);
};

// same way -- we pass data
arrowFunction("Dollar", "Peso");
arrowFunction("Euro", "Colon");

// functions can all return a value, so we can use them as variables.
let returnFunction = (y, z) => {
  return z;
};

// we assign returnFunction as the value of myCurrency.
// since returnFunction returns a data myCurrency will become that.
let myCurrency = returnFunction("Dollar", "Peso");
console.log(myCurrency);

/*
+-+-+-+-+-+ 
|L|o|g|i|c| 
+-+-+-+-+-+ 
*/

// we use conditinal logic to control the flow of our application

// lets declare some variables
let currentPugs = 1;

// we can do a simple if() statement to check some logic and decide what to run.
if (currentPugs > 0) {
  // if the condition is true, run this!
  console.log(currentPugs + " Pugs :)");
} else {
  // if the condition is not true, run this!
  console.log(":( no Pugs");
}

/*
+-+-+-+-+-+-+ +-+-+ +-+-+ 
|S|t|y|l|e|s| |i|n| |J|S| 
+-+-+-+-+-+-+ +-+-+ +-+-+ 
*/

// 1. select an element node
let styleContainer = document.querySelector("#container");

// 2. apply styles directly with JavaScript
styleContainer.style.background = "green";

/*                      
+-+-+-+-+ +-+-+ +-+-+ 
|H|T|M|L| |i|n| |J|S| 
+-+-+-+-+ +-+-+ +-+-+ 
*/

// 1. select an element node.
let mainContainer = document.querySelector("#container");

// 2. create an element
let nodeElement = document.createElement("p");

// 3. apply a class to the selected element
nodeElement.setAttribute("class", "small");

// 4. create a text node with content
let nodeText = document.createTextNode("I would love to work with MMM!");

// 5. append text node to p element
nodeElement.appendChild(nodeText);

// 6. at this point, nodeElement = <p class="small">This is new.</p>

// 7. append that to the main container
mainContainer.appendChild(nodeElement);

/*


/* 
+-+-+-+-+-+ 
|L|o|o|p|s| 
+-+-+-+-+-+            
*/

// there are many different ways to loop through data collections.
// I personally like the forEach() method, but also consider your specific use case.
// forEach() executes "something" for every item of the array.

let someData = [
  { country: "Colombia", lat: 234234, long: 74736383, currency: "Peso" },
  { country: "USA", lat: 2276233, long: 237632487632, currency: "Dollar" },
  { country: "Costa Rica", lat: 372763, long: 904984, currency: "Colon" },
  { country: "Spain", lat: 09984, long: 78376437643, currency: "Euro" }
];

// forEach( (x, index) => { console.log(x) } )
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// we apply this method to our array of data.
someData.forEach((x, index) => {
  // basically we are inside a function that will execute once for each item.
  // we got "x" which is the actual array item. *note: x can be anything, your choice. ...element, item, cat,
  // we got index, standard, position in the array

  // since we are iterating over each array item, in this case we can access the data in the item, as an object.

  // let's say I want to get the currency
  console.log(x.currency);
  //> Peso
  //> Dollar
  //> Colon
  //> Euro

  // we can go a little further and join strings and data (early lessons)
  console.log(
    x.country +
      "is located in the coordinates: " +
      x.lat +
      "," +
      x.long +
      " and the currency used is called: " +
      x.currency
  );
  //> Colombia is located in the coordinates 234234, 74736383 and the currency used is called: Peso
  //> ...
});

// loops are challenging, but important to understand.

/*
                               
+-+-+-+-+-+-+-+-+ +-+-+-+-+  
|E|x|t|e|r|n|a|l| |D|a|t|a|  
+-+-+-+-+-+-+-+-+ +-+-+-+-+  
                               
*/

// we can use JavaScript to literally fecth data from sources.
// some sources are public, others will require some key / authentication.

// we'll use the .fetch() method, use the URL endpoint of the data and get it!

let externalData = [];
// https://jsonplaceholder.typicode.com
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => {
    // we got something as response, this is called a Promise.
    // since it might not be resolved, we chain another .then(), so once it resolves, it will run the next block.
    // console.log(response);
    return response.json();
  })
  .then(json => {
    // data resolves, we can use the array.
    // lets loop and only print the id.
    console.log(json);
    json.forEach((x, index) => {
      //   console.log(x.id);
    });
  });

/*

+-+-+-+-+-+  
|D|3|.|j|s|  
+-+-+-+-+-+

*/

// http://square.github.io/intro-to-d3/
// http://square.github.io/intro-to-d3/web-standards/
// https://benclinkinbeard.com/d3in5days/
// https://www.dashingd3js.com/binding-data-to-dom-elements

// D3.js can be a little overwhelming, remember is not the only tool.

// A library is like this set of helpers built on top of JavaScript.
// D3 uses JavaScript, but introduces it's own flavour of JS.

// You can include external libraries in your index.html file.
// We include this in the <head></head> since we want it to load before our script.js file loads.
// easiest way to include libraries is using a CDN - https://cdnjs.com

// using regular js
let p = document.querySelector("p");
let pContent = p.innerText;
console.log(pContent);

// using d3.js
let d = d3.select("p");
let dContent = d.text();
console.log(dContent);

/*
D3 stands for Data-Driven Documents, which really does describe its underlying philosophy. 
It provides a declarative API for creating and transforming a document's structure based on arbitrary underlying data. 
Whether your data is a simple array of numbers or a complex graph of JSON objects and arrays, 
D3 enables you to transform that data into a standard web document using declarative APIs.

When we say D3 is declarative, what we mean is that you tell D3 what you want, but not how you want it done. 
You will not write loops to create a collection of elements, you will simply describe a relationship between a 
set of data points and a set of UI elements, and D3 will handle the implementation details. 
For example, to turn all of the paragraph text on your page white, you could use the code:

d3.selectAll('p').style('color', 'white').

D3 will handle the mechanics of iterating over DOM elements and the updating of attribute values for you.

*/

/*
    _   _   _   _   _   _   _   _   _   _    
   / \ / \ / \ / \ / \ / \ / \ / \ / \ / \   
  ( S | e | l | e | c | t | i | o | n | s )  
   \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/   
                                       
*/

// selects the element with an id="foo" attribute
d3.select("#container");
// selects all elements with CSS class primary
d3.selectAll(".small");
// select all divs on the page
d3.selectAll("div");

/*
    _   _   _   _   _   _   _   _   _   _   _    
   / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ / \   
  ( I | n | t | e | r | a | c | t | i | o | n )  
   \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/ \_/   
                                                 
*/

// get the href value of the first link on the page
let link = d3.select("a").attr("href");
console.log(link);

// selection.attr(name, value)
d3.select("a").attr("href", "https://google.com");
d3.selectAll("a").style("background", "gold");

// value can also be a function, which allow us to run code and return a value.
d3.selectAll("a").attr("href", function(d, i, nodes) {
  // the first parameter is named d and is the node's data point, or datum
  // the second parameter is named i and is the node's index in the selection
  // the third parameter is an array of the nodes in the selection
  // lastly, `this` === nodes[i]
  // the function is bound to the DOM element, so `this` refers to the actual node
  console.log(d, i, this);
  //   if ( d  )
  if (this.href === "https://mica.edu") {
    return "???";
  } else {
    return "https://zeit.co";
  }
});

// .text()
// allow us to interact with the text content of the element
d3.select("a").text("Hello World!");

// .html()
// allows us to add or get the html inside that element.
d3.select("#container").html("<h2>Hello World!</h2>");

// .append()
// add elements
d3
  .selectAll("a")
  .append("p")
  .text(function() {
    return "🌎🌍🌏";
  });

let theData = [{ name: "Mateo" }, { name: "Huey" }];

// *note: selectAll : there are no <li> in the page yet,
// but D3.js needs to know there are going to be.

d3
  .select("#list")
  .selectAll("li")
  .data(theData)
  .enter()
  .append("li")
  .text((d, i) => {
    return d.name;
  });
