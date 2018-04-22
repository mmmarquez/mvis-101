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
                                ______   __  __                                   
                               /\__  _\ /\ \/\ \                                  
                               \/_/\ \/ \ \ \ \ \                                 
                                  \ \ \  \ \ \ \ \                                
                                   \_\ \__\ \ \_/ \                               
                                   /\_____\\ `\___/                               
                                   \/_____/ `\/__/                                
                                                                                  
                                                                                  
*/

/*
    ⚪ Review
    ⚪ Helpers
    ⚪ Scales
    ⚪ External/Local Data
    ⚪ Build: Bar Graph
    ⚪ Build: Pie Chart
    ⚪ Assignment

*/

/*
 ______           _                
 | ___ \         (_)               
 | |_/ /_____   ___  _____      __ 
 |    // _ \ \ / / |/ _ \ \ /\ / / 
 | |\ \  __/\ V /| |  __/\ V  V /   
 \_| \_\___| \_/ |_|\___| \_/\_/   
                                   
*/

// we are basically mapping datsets to the dom in realtime. we can update, create etc.

let dataSet = [1, 2, 3, 4, 5, 6];

d3
  .select("#container")
  .selectAll("p") // ??
  .data(dataSet) // add our dataset as an argument
  .enter() // enter! like perform an operation for each item! enter does everyting below for :
  .append("p") // append element, for each element in dataset!
  .text("??") // at the same time, we add text to each one
  .style("color", (d, i) => {
    // or we can follow the d3 pattern of return functions!
    // we can apply logic to our iteration
    // in this case we are returning the color conditionally.
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

/*




// d3 6



/*
  _   _      _                      
 | | | |    | |                     
 | |_| | ___| |_ __   ___ _ __ ___  
 |  _  |/ _ \ | '_ \ / _ \ '__/ __| 
 | | | |  __/ | |_) |  __/ |  \__ \ 
 \_| |_/\___|_| .__/ \___|_|  |___/ 
              | |                   
              |_|                   
                                    
*/
/*
  D3 has a lot of helper functions, 
  to perform simple JavaScript operations!
  or help us with complex logic :)
  https://github.com/d3/d3/blob/master/API.md
  .min()
  .max()
  .extent()
  .pie()
  ....
*/

// we have an array with some numbers
let myNumbers = [5, 4, 10, 1];

// .min() will return the lowest number.
let numbersMin = d3.min(myNumbers);
// .max() will return the highest number.
let numbersMax = d3.max(myNumbers);

// console.log(`Minimum Number: ${numbersMin}`);
// console.log(`Maximum Number: ${numbersMax}`);

// working with a more robust data set?
// let's create a sample array of objects
let sampleData = [
  {
    date: "2014-01-01",
    amount: 10
  },
  {
    date: "2014-02-01",
    amount: 20
  },
  {
    date: "2014-03-01",
    amount: 40
  },
  {
    date: "2014-04-01",
    amount: 80
  }
];

// we'll use the .max() method, but this time we'll return a function.
// this will allow us to control what numbers D3.js is going to return
let amountMax = d3.max(sampleData, (d, i) => {
  // some logic here
  // let's return only the value of the amount of each object.
  return d.amount;
  // return d.date will return the date
});

// console.log(`Maximum Amount: ${amountMax}`);

// SCALES

/*                            
   _____           _             
  /  ___|         | |            
  \ `--.  ___ __ _| | ___  ___   
   `--. \/ __/ _` | |/ _ \/ __|  
  /\__/ / (_| (_| | |  __/\__ \  
  \____/ \___\__,_|_|\___||___/  
                                                       
*/

/*
  help us map values acroos axes / screen / values
  https://github.com/d3/d3-scale
  - linear
  - logarithmic
  - linear for time
  - ...

  so you have numbers from 0 to 1000
  but you need to display from 0 to 10
  map helps us with that proportional logic
  original -> mapped
  500 -> 5
  750 -> 7.5
*/

let scaleSample = d3
  .scaleLinear()
  .domain([0, 80])
  .range([0, 300]);

// we can pass a number and it will return the position of the range.
// console.log(scaleSample(80));

/*
  ______      _              
  |  _  \    | |             
  | | | |__ _| |_ ___  ___   
  | | | / _` | __/ _ \/ __|  
  | |/ / (_| | ||  __/\__ \  
  |___/ \__,_|\__\___||___/  
                             
*/

// still in the context of scales ~
// this is how we create a date in JavaScript
// new Date(Date.parse("2014-01-01"))
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

let startDay = new Date(Date.parse("2014-01-01"));
let endDay = new Date(Date.parse("2014-04-01"));

var scaleDate = d3
  .scaleTime()
  .domain([startDay, endDay])
  .range([0, 1200]);

let currentDate = new Date(Date.parse("2014-02-01"));
// console.log(scaleDate(currentDate));
// 103.3811949976841

/*
  _____  _   _ _____      
 /  ___|| | | |  __ \     
 \ `--. | | | | |  \/___  
  `--. \| | | | | __/ __| 
 /\__/ /\ \_/ / |_\ \__ \ 
 \____/  \___/ \____/___/ 
                          
*/

// create and array of objects.
// each object will follow this model:
// date -> Date
// amount -> Number
let svgData = [
  { date: "2014-01-01", amount: 10 },
  { date: "2014-02-01", amount: 20 },
  { date: "2014-03-01", amount: 40 },
  { date: "2014-04-01", amount: 80 }
];

// select the svg with id of #sample.
// this element already exists in the html
let sampleSvg = d3
  .select("#sample") // the selector id
  .attr("width", 300) // we add attributes
  .attr("height", 300);

// we call this selection and chain some D3 methods
sampleSvg
  .append("g") // create a <g> element * we can group in SVG --
  .attr("class", "x--axis") // add a class to each item
  .selectAll("rect") // prepare D3 for multiple <rect>
  .data(svgData)
  .enter() // ~get in the data loop~
  .append("g") // create a <g> element * we can group in SVG --
  .attr("class", "item") // add a class to each item
  .append("rect") // create + append a <rect> for each item
  .attr("fill", "gold") // add the fill attribute with gold color.
  .attr("y", (d, i) => {
    // let's use some logic for the Y position
    // so y will dictate the Y/Up/Down position
    // kind of relative to the the SVG element, 600x600
    // since we want to move it a little bit down
    // we need to increase the value of Y position in each item.
    // simple multiplication of the index (i) * some value
    // we can + some extra value to create the margin between.
    return i * (10 + 5);
  })
  .attr("height", 10) // add height to each bar
  .attr("width", (d, i) => {
    // for the width (x axis), let's use the values from the dataset.
    // console.log(d);
    // here we use our scaleSample() function from the first example.
    // we pass the amount of our data set.
    // so values will be scaled between 0 and 300px (width of SVG)
    return scaleSample(d.amount);
  });

/* 
<svg id="sample" width="600" height="600">
  <g class="x axis">
    <rect fill="gold" y="0" height="10" width="~25"></rect>
    <rect fill="gold" y="15" height="10" width="~50"></rect>
    <rect fill="gold" y="30" height="10" width="~100"></rect>
    <rect fill="gold" y="45" height="10" width="~200"></rect>
  </g>
</svg>
*/

/*
  ______      _          
  |  _  \    | |         
  | | | |__ _| |_ __ _   
  | | | / _` | __/ _` |  
  | |/ / (_| | || (_| |  
  |___/ \__,_|\__\__,_|  
                         
*/

/*
  d3 makes it very simple to work with external data
  https://github.com/d3/d3-fetch

  we use the appropiate method, then d3 will fetch the data
  and provides us with a function of that data
  then, being inside that block, we can read the fetched data

*/
d3.csv("./media/sample.csv", data => {
  // `data` is an array and we can work with it inside this function.
  // console.log(data);
  // d3
  //   .select("#external")
  //   .selectAll("p") // ??
  //   .data(data)
  //   .enter()
  //   .append("p")
  //   .text("//")
  //   .style("color", "red");
});
