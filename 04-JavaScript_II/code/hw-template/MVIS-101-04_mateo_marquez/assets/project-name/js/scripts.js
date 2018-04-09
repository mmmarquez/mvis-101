let mainContainer = document.querySelector("#container");
// create an element
let nodeElement = document.createElement("p");

// apply a class to the element
nodeElement.setAttribute("class", "small");

// create a text node with content
let nodeText = document.createTextNode("I would love to work with Mapbox!");

// append text node to p element
nodeElement.appendChild(nodeText);

// at this point, nodeElement = <p class="small">This is new.</p>

// append that to the main container
mainContainer.appendChild(nodeElement);

/*

FROM THE LIVE LESSON:

*/

//JS goes here.
// let nuV = "9";
// console.log(nuV);
// let nuFunction = (x, y) => {
//   return x + y;
// };
// function nuFunction(x, y) {
//   return x + y;
// }
// console.log(nuFunction(5, 10));
// let myFunction = x => {
//   if (x > 0) {
//     // BLOCK
//     console.log("Yes!");
//     //myAlert()
//     return x;
//   } else {
//     // BLOCK
//     console.log("Nah!");
//     return null;
//   }
// };
// console.log(myFunction(-1));
// while
// let result = 1;
// let counter = 0;
// while (counter < 10) {
//   console.log("loops");
//   console.log(counter);
//   result = result * 2;
//   counter = counter + 1;
// }
// console.log(result);
// for (let number = 0; number <= 10; number = number + 1) {
//   console.log(number);
// }
// let myData = "asjhdasjhghadjs";
// switch (myData) {
//   case "x":
//     console.log("case: x");
//     break;
//   case "y":
//     console.log("case: y");
//     break;
//   default:
//     console.log("??");
//     break;
// }
// let myArray = ["a", "b", "c"];
// console.log(myArray);
// console.log(myArray.length);
// myArray.push("d");
// console.log(myArray);
// let myArray = ["a", "ty", "0"];
// myArray.forEach((item, index) => {
//   console.log(item, index);
//   // > a, 0
//   // > ty, 1
//   // > 0, 2
//   myArray.push(index);
// });
// console.log(myArray);
// let myObject = { text: "hola", amount: 0 };
// myObject.text;
// console.log(myObject.amount);
// let myData = [
//   { name: "Mateo", age: 30, specie: "human" },
//   { name: "Huey", age: 12, specie: "dog" }
// ];
// myData.forEach((entry, index) => {
//   // console.log(entry, index);
//   console.log(entry.specie);
// });

// // variables first!
// let nodeContainer = document.querySelector("#container");
// // selecting the already exisitng node element.
// let nodeElement = document.createElement("h1");
// //<p></p>
// let nodeText = document.createTextNode("This is new.");
// //"his is new."

// //.appenChild
// // We append all th
// nodeElement.appendChild(nodeText);
// // <p>
// // This is new.
// // </p>
// nodeContainer.appendChild(nodeElement);
// /*
// <div id="container">
//   <p>
//     This is new.
//   </p>
// </div>
// */

// let listData = [{ name: "Mateo" }, { name: "Huey" }];

// let ourList = document.querySelector("#list");

// // Let's loop through our listData and create HTML nodes.
// listData.forEach((item, index) => {
//   // Let's create a text node for eac of the name properties.
//   // > Mateo, Huey
//   let listItem = document.createElement("li");
//   // we can also add an attribute such as class or ID ot the element.
//   //element.setAttribute("class", "list-item");
//   listItem.setAttribute("class", "list-item");
//   // remember setting the style? We can also set style!
//   // listItem.style.backgroundColor = "red";
//   let nameText = document.createTextNode(item.name);
//   listItem.appendChild(nameText);
//   // <li>
//   //   Mateo
//   // </li>

//   // Let's append the iteration to the master node element.
//   ourList.appendChild(listItem);
// });
