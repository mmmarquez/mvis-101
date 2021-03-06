/*
                     ___                                                     ___      
      _____         /__/\         _____         _____                       /  /\     
     /  /::\        \  \:\       /  /::\       /  /::\                     /  /:/_    
    /  /:/\:\        \  \:\     /  /:/\:\     /  /:/\:\    ___     ___    /  /:/ /\   
   /  /:/~/::\   ___  \  \:\   /  /:/~/::\   /  /:/~/::\  /__/\   /  /\  /  /:/ /:/_  
  /__/:/ /:/\:| /__/\  \__\:\ /__/:/ /:/\:| /__/:/ /:/\:| \  \:\ /  /:/ /__/:/ /:/ /\ 
  \  \:\/:/~/:/ \  \:\ /  /:/ \  \:\/:/~/:/ \  \:\/:/~/:/  \  \:\  /:/  \  \:\/:/ /:/ 
   \  \::/ /:/   \  \:\  /:/   \  \::/ /:/   \  \::/ /:/    \  \:\/:/    \  \::/ /:/  
    \  \:\/:/     \  \:\/:/     \  \:\/:/     \  \:\/:/      \  \::/      \  \:\/:/   
     \  \::/       \  \::/       \  \::/       \  \::/        \__\/        \  \::/    
      \__\/         \__\/         \__\/         \__\/                       \__\/     
                                                                                                                    
*/

// Source: https://bl.ocks.org/mbostock/4063269
// https://github.com/d3/d3-hierarchy
// https://gist.github.com/bhurlow/7087648
// https://mbostock.github.io/d3/talk/20111018/pack.html
// https://bl.ocks.org/mbostock/4063530
// https://bl.ocks.org/denjn5/6d5ddd4226506d644bb20062fc60b53f

/*

This is a complex graph.
This example is meant to be reused, just transform the data and play with it!

*/

let bubbleSvg = d3.select("#bubble");
let bubbleWidth = +bubbleSvg.attr("width");
let bubbleHeight = +bubbleSvg.attr("height");

let format = d3.format(",d");

let colorScale = d3.scaleOrdinal(d3.schemeCategory20c);

let pack = d3
  .pack()
  .size([bubbleWidth, bubbleHeight])
  .padding(1.5);

d3.csv(
  "media/bubbles.csv",
  function(d) {
    d.value = +d.value;
    if (d.value) return d;
  },
  function(error, classes) {
    if (error) throw error;

    var root = d3
      .hierarchy({ children: classes })
      .sum(function(d) {
        return d.value;
      })
      .each(function(d) {
        if ((id = d.data.id)) {
          var id,
            i = id.lastIndexOf(".");
          d.id = id;
          d.package = id.slice(0, i);
          d.class = id.slice(i + 1);
        }
      });

    var node = bubbleSvg
      .selectAll(".node")
      .data(pack(root).leaves())
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      });

    node
      .append("circle")
      .attr("id", function(d) {
        return d.id;
      })
      .attr("r", function(d) {
        return d.r;
      })
      .style("fill", function(d) {
        return colorScale(d.package);
      });

    node
      .append("clipPath")
      .attr("id", function(d) {
        return "clip-" + d.id;
      })
      .append("use")
      .attr("xlink:href", function(d) {
        return "#" + d.id;
      });

    node
      .append("text")
      .attr("clip-path", function(d) {
        return "url(#clip-" + d.id + ")";
      })
      .selectAll("tspan")
      .data(function(d) {
        return d.class.split(/(?=[A-Z][^A-Z])/g);
      })
      .enter()
      .append("tspan")
      .attr("x", 0)
      .attr("y", function(d, i, nodes) {
        return 13 + (i - nodes.length / 2 - 0.5) * 10;
      })
      .text(function(d) {
        return d;
      });

    node.append("title").text(function(d) {
      return d.id + "\n" + format(d.value);
    });
  }
);
