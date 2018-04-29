/*
      ___           ___           ___           ___           ___     
     /__/\         /  /\         /__/\         /  /\         /  /\    
    |  |::\       /  /::\        \  \:\       /  /:/_       /  /:/_   
    |  |:|:\     /  /:/\:\        \  \:\     /  /:/ /\     /  /:/ /\  
  __|__|:|\:\   /  /:/  \:\   ___  \  \:\   /  /:/ /::\   /  /:/ /:/_ 
 /__/::::| \:\ /__/:/ \__\:\ /__/\  \__\:\ /__/:/ /:/\:\ /__/:/ /:/ /\
 \  \:\~~\__\/ \  \:\ /  /:/ \  \:\ /  /:/ \  \:\/:/~/:/ \  \:\/:/ /:/
  \  \:\        \  \:\  /:/   \  \:\  /:/   \  \::/ /:/   \  \::/ /:/ 
   \  \:\        \  \:\/:/     \  \:\/:/     \__\/ /:/     \  \:\/:/  
    \  \:\        \  \::/       \  \::/        /__/:/       \  \::/   
     \__\/         \__\/         \__\/         \__\/         \__\/    
                                                                                                                                                                                          
*/

// let's wrap our D3.js logic in a function.
// then we can reuse it - cleaner and easy to maintain.

let mouseData = [1, 2, 3, 4, 5, 6];

// Create Event Handlers for mouse
function handleMouseOver(d, i) {
  // Add interactivity
  // Use D3 to select element, change color and size
  d3
    .select(this)
    .style("background", "black")
    .text(d);
  console.log("mouse in!", d);
}

function handleMouseOut(d, i) {
  // Use D3 to select element, change color back to normal
  d3.select(this).style("background", "blue");
  console.log("mouse out!", d);
}

// we create a function that will host all our D3.js
let mouseGraph = () => {
  // `setup` : let's setup D3.js -- container, data, etc.
  let d3Setup = d3
    .select("#mouse")
    .selectAll("div") // ??
    .data(mouseData) // add our dataset as an argument
    .enter() // enter! like perform an operation for each item! enter does everyting below for :
    .append("div"); // append element, for each element in dataset!

  // let's `draw` -- styles, width, etc.
  let draw = () => {
    // in here we get the window dimensions:
    var w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    var h =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    d3Setup
      .style("height", (d, i) => {
        return 60 + "px";
      })
      .style("width", (d, i) => {
        return w + "px"; // we pass the width here, add "px" since it's css.
      })
      .style("background", (d, i) => {
        if (d === 1) {
          return "blue";
        } else if (d === 2) {
          return "orange";
        } else if (d === 3) {
          return "red";
        } else if (d === 4) {
          return "gold";
        } else if (d === 5) {
          return "green";
        } else if (d === 6) {
          return "pink";
        } else {
          return "black";
        }
      })
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);
  };
  draw(); // we call our draw() function, so the graph will draw.
};

mouseGraph(); // we call our function.
//window.addEventListener("resize", draw); // ~ same!!
