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
