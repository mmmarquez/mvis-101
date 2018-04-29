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
                                     __  __                                       
                                    /\ \/\ \                                      
                                    \ \ \ \ \                                     
                                     \ \ \ \ \                                    
                                      \ \ \_/ \                                   
                                       \ `\___/                                   
                                        `\/__/                                    

*/

/*
    ⚪ Review
    ⚪ Events & Interactions
    ⚪ Sizing
    ⚪ Build: Force Layout
    ⚪ Build: Bubble Graph

*/

/*
 ______           _                
 | ___ \         (_)               
 | |_/ /_____   ___  _____      __ 
 |    // _ \ \ / / |/ _ \ \ /\ / / 
 | |\ \  __/\ V /| |  __/\ V  V /   
 \_| \_\___| \_/ |_|\___| \_/\_/   
                                   
*/

// STILL: D3.js just help us map data to the DOM.

d3.csv("./media/sample.csv", data => {
  d3
    .select("#review") // select dom node
    .selectAll("p") // prepare d3.js by selecting all elements.
    .data(data) // add the dataset
    .enter() // enter the dataset -> execute for each item.
    .append("p") // append a <p> for each item.
    .text("~~~~~~") // add text to the <p>
    .style("color", "blue"); // set styles for the <p>
});

/*
  _____                _        
 |  ___|              | |       
 | |____   _____ _ __ | |_ ___  
 |  __\ \ / / _ \ '_ \| __/ __| 
 | |___\ V /  __/ | | | |_\__ \ 
 \____/ \_/ \___|_| |_|\__|___/ 
                                
*/

// https://www.w3schools.com/js/js_events.asp
// https://www.w3schools.com/jsref/dom_obj_event.asp

/*

HTML events are "things" that happen to HTML elements. JavaScript can react to these "things".

- A button is pushed.
- Window is resized.
- Input field was filled.
- Page finished loading
- ...

*/

// function to run every time an event is triggered.
// html: <div onclick="eventSample()">
let eventSample = () => {
  console.log("event!");
  let reviewContainer = document.querySelector("#review"); // select another container
  reviewContainer.style.display = "none"; // apply simple style: display: none to make it dissapear.
};

// Adding an event listener to an element.
// this is the correct / common way to attach events.
let myButton = document.querySelector("#button"); // select your element

// add the eventListener() method.
myButton.addEventListener("click", () => {
  // this is callback function.
  // perform some logic here.
  // this will only run when myButton is clicked.
  console.log("event listener");
});

/*
  _____ _     _              
 /  ___(_)   (_)             
 \ `--. _ _____ _ __   __ _  
  `--. \ |_  / | '_ \ / _` | 
 /\__/ / |/ /| | | | | (_| | 
 \____/|_/___|_|_| |_|\__, | 
                       __/ | 
                      |___/  

*/

// https://www.w3schools.com/jsref/event_onresize.asp
// https://plainjs.com/javascript/styles/getting-width-and-height-of-an-element-23/
// http://eyeseast.github.io/visible-data/2013/08/28/responsive-charts-with-d3/

// `v` and `h` in example below seem a little wordy. We are performing checks, as browsers
// deal with widths and heights differently.
let myFunction = () => {
  var w =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  var h =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  console.log(`width: ${w} and heigth: ${h}`);
};

//myFunction(); // we run our function, initially. Otherwise, it would just run when resized.
//window.addEventListener("resize", myFunction); // we add the event `resize` to the window object.

/*

~We can just add the function:

window.addEventListener("resize", () => {

});

*/

/*
  ______          _          
  | ___ \        (_)         
  | |_/ /___  ___ _ _______  
  |    // _ \/ __| |_  / _ \ 
  | |\ \  __/\__ \ |/ /  __/ 
  \_| \_\___||___/_/___\___| 
                             
*/

//~~~ Check resize.js for example.

/*
  ___  ___                      
  |  \/  |                      
  | .  . | ___  _   _ ___  ___  
  | |\/| |/ _ \| | | / __|/ _ \ 
  | |  | | (_) | |_| \__ \  __/ 
  \_|  |_/\___/ \__,_|___/\___| 
                                
*/

//~~~ Check mouse.js for example.

/*
   _____                   _ _   _                  
  |_   _|                 (_) | (_)                 
    | |_ __ __ _ _ __  ___ _| |_ _  ___  _ __  ___  
    | | '__/ _` | '_ \/ __| | __| |/ _ \| '_ \/ __| 
    | | | | (_| | | | \__ \ | |_| | (_) | | | \__ \ 
    \_/_|  \__,_|_| |_|___/_|\__|_|\___/|_| |_|___/ 
                                                    
*/

//~~~ Check transitions.js for example.

/*
  ______                   _                             _    
  |  ___|                 | |                           | |   
  | |_ ___  _ __ ___ ___  | |     __ _ _   _  ___  _   _| |_  
  |  _/ _ \| '__/ __/ _ \ | |    / _` | | | |/ _ \| | | | __| 
  | || (_) | | | (_|  __/ | |___| (_| | |_| | (_) | |_| | |_  
  \_| \___/|_|  \___\___| \_____/\__,_|\__, |\___/ \__,_|\__| 
                                        __/ |                 
                                       |___/                  
                                                                                                                       
*/

//~~~ Check force-graph.js for example.

/*
  ______       _     _     _        _____                 _       
  | ___ \     | |   | |   | |      |  __ \               | |      
  | |_/ /_   _| |__ | |__ | | ___  | |  \/_ __ __ _ _ __ | |__    
  | ___ \ | | | '_ \| '_ \| |/ _ \ | | __| '__/ _` | '_ \| '_ \   
  | |_/ / |_| | |_) | |_) | |  __/ | |_\ \ | | (_| | |_) | | | |  
  \____/ \__,_|_.__/|_.__/|_|\___|  \____/_|  \__,_| .__/|_| |_|  
                                                   | |            
                                                   |_|            
                                                                  
*/

//~~~ Check bubble-graph.js for example.
