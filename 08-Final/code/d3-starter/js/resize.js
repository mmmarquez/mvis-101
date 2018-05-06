/*
        ___           ___           ___                       ___           ___       
       /  /\         /  /\         /  /\        ___          /  /\         /  /\      
      /  /::\       /  /:/_       /  /:/_      /  /\        /  /::|       /  /:/_     
     /  /:/\:\     /  /:/ /\     /  /:/ /\    /  /:/       /  /:/:|      /  /:/ /\    
    /  /:/~/:/    /  /:/ /:/_   /  /:/ /::\  /__/::\      /  /:/|:|__   /  /:/ /:/_   
   /__/:/ /:/___ /__/:/ /:/ /\ /__/:/ /:/\:\ \__\/\:\__  /__/:/ |:| /\ /__/:/ /:/ /\  
   \  \:\/:::::/ \  \:\/:/ /:/ \  \:\/:/~/:/    \  \:\/\ \__\/  |:|/:/ \  \:\/:/ /:/  
    \  \::/~~~~   \  \::/ /:/   \  \::/ /:/      \__\::/     |  |:/:/   \  \::/ /:/   
     \  \:\        \  \:\/:/     \__\/ /:/       /__/:/      |  |::/     \  \:\/:/    
      \  \:\        \  \::/        /__/:/        \__\/       |  |:/       \  \::/     
       \__\/         \__\/         \__\/                     |__|/         \__\/      
                                                                                                                           
*/

// let's wrap our D3.js logic in a function.
// then we can reuse it - cleaner and easy to maintain.

let dataSet = [1, 2, 3, 4, 5, 6];

// we create a function that will host all our D3.js
let myGraph = () => {
  // `setup` : let's setup D3.js -- container, data, etc.
  let d3Setup = d3
    .select("#resize")
    .selectAll("div") // ??
    .data(dataSet) // add our dataset as an argument
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
      });
  };
  draw(); // we call our draw() function, so the graph will draw.
  d3.select(window).on("resize", draw); // similar to addEventListener. We call draw at window resize.
};

myGraph(); // we call our function.
//window.addEventListener("resize", draw); // ~ same!!
