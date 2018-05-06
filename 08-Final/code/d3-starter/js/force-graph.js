/*
       ___         ___           ___           ___           ___      
      /  /\       /  /\         /  /\         /  /\         /  /\     
     /  /:/_     /  /::\       /  /::\       /  /:/        /  /:/_    
    /  /:/ /\   /  /:/\:\     /  /:/\:\     /  /:/        /  /:/ /\   
   /  /:/ /:/  /  /:/  \:\   /  /:/~/:/    /  /:/  ___   /  /:/ /:/_  
  /__/:/ /:/  /__/:/ \__\:\ /__/:/ /:/___ /__/:/  /  /\ /__/:/ /:/ /\ 
  \  \:\/:/   \  \:\ /  /:/ \  \:\/:::::/ \  \:\ /  /:/ \  \:\/:/ /:/ 
   \  \::/     \  \:\  /:/   \  \::/~~~~   \  \:\  /:/   \  \::/ /:/  
    \  \:\      \  \:\/:/     \  \:\        \  \:\/:/     \  \:\/:/   
     \  \:\      \  \::/       \  \:\        \  \::/       \  \::/    
      \__\/       \__\/         \__\/         \__\/         \__\/     
                                                                                                              
*/

// Source: https://bl.ocks.org/mbostock/4062045

/*
Model:

    {
        "nodes": [
            { "id": "Unique Name", "group": "Number"  }
        ],
        "links": [
            { "source": "Node Name", "target": "Node Name", "value": Number }
        ]
    }

*/

// global variables
let width = 800;
let height = 800;

// select the SVG node
let svg = d3.select("#force");

// little color helper from D3.js
var color = d3.scaleOrdinal(d3.schemeCategory20);

// let's declare the simulation
// read the API if you want to get more familiar with these helpers.
// https://github.com/d3/d3-force
var simulation = d3
  .forceSimulation() // helper
  .force(
    // let's add `force` to our `link` data
    "link",
    d3.forceLink().id(function(d) {
      return d.id; // get the ID of the element, to apply the force.
    })
  )
  .force("charge", d3.forceManyBody()) // add some interaction between links.
  .force("center", d3.forceCenter(width / 2, height / 2)); // stablish the center of the force to be center of SVG.

// note: we are working with JSON, but kind of is the same.
d3.json("media/data.json", function(error, graph) {
  if (error) throw error;

  // create links based on the data.
  var link = svg
    .append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter()
    .append("line")
    .attr("stroke-width", function(d) {
      return d.value;
    });

  // create nodes based on the data
  var node = svg
    .append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("fill", function(d) {
      return color(d.group);
    })
    .call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    )
    .on("mouseover", forceOver)
    .on("mouseout", forceOut);

  simulation.nodes(graph.nodes).on("tick", ticked);

  simulation.force("link").links(graph.links);

  function ticked() {
    link
      .attr("x1", function(d) {
        return d.source.x;
      })
      .attr("y1", function(d) {
        return d.source.y;
      })
      .attr("x2", function(d) {
        return d.target.x;
      })
      .attr("y2", function(d) {
        return d.target.y;
      });

    node
      .attr("cx", function(d) {
        return d.x;
      })
      .attr("cy", function(d) {
        return d.y;
      });
  }
});

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

function forceOver(d, i) {
  d3
    .select(this)
    .transition()
    .duration(1000)
    .attr("r", 100);
  console.log("mouse in!", d);
}

function forceOut(d, i) {
  d3
    .select(this)
    .transition()
    .duration(1000)
    .attr("r", 5);
  console.log("mouse out!", d);
}
