/*
        ___                     ___       
       /  /\      ___          /  /\      
      /  /::\    /  /\        /  /:/_     
     /  /:/\:\  /  /:/       /  /:/ /\    
    /  /:/~/:/ /__/::\      /  /:/ /:/_   
   /__/:/ /:/  \__\/\:\__  /__/:/ /:/ /\  
   \  \:\/:/      \  \:\/\ \  \:\/:/ /:/  
    \  \::/        \__\::/  \  \::/ /:/   
     \  \:\        /__/:/    \  \:\/:/    
      \  \:\       \__\/      \  \::/     
       \__\/                   \__\/      
                                          
*/

d3.csv("./media/pie.csv", data => {
  //let's start by selecting our SVG and applying some width and height.
  let pieSvg = d3
    .select("#pie")
    .attr("width", 600)
    .attr("height", 600);

  // since we are trying to do a Pie Graph, we need to slice a circle.
  // d3 has helpers for that!

  // this little helper will take the data and creare the pie slices fo us.
  let myPie = d3.pie().value(function(d) {
    // returning the age column of our CSV
    return d.age;
  });

  // we can then call this function and pass our data, returning our slices.
  // this would be complicated to calculate using pure math, but D3 makes it easier!
  let pieSlices = myPie(data);
  //console.log(pieSlices);

  // we start by usinf the .arc() method
  // basically to create the strcuture of our drawing using svg arcs
  let myArc = d3
    .arc()
    .innerRadius(0) // inner r
    .outerRadius(160); // outer r

  // this is a helper for mapping color.
  //https://bl.ocks.org/pstuffa/3393ff2711a53975040077b7453781a9
  // d3-scale-chromatic
  // it just scale values for us into a predifined colro scheme.
  let myColor = d3.scaleOrdinal(d3.schemeCategory10);

  // lets create the pie chart
  pieSvg
    .append("g") // append a group element to our svg
    // translate it -- since the anchor point is center
    // and default to the (0,0)
    // we move it 160px (r) from the left and the top
    .attr("transform", "translate(160,160)")
    .selectAll("path") // we selectAll paths -- to be created.
    .data(pieSlices) // pass the slice data
    .enter() // enter!
    .append("path") // appent a <path> per slice
    .attr("d", myArc) // d is path attribute, we use our myArc to return our arc.
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
    .attr("fill", function(d) {
      // we call our myColor color helper and pass a value from our data.
      return myColor(d.data.name);
    });

  // let's add some labels
  // select our SVG
  pieSvg
    .append("g") // append another group!
    .attr("transform", "translate(360,0)")
    .attr("class", "captions") // add a class to that group
    .selectAll("text") // selectAll future <text> nodes.
    .data(pieSlices) // pass our data
    .enter() // enter it!
    .append("text") // append the nodes
    .text(function(d) {
      // for each node, return the name + age
      // we concat that to a string and return it
      return d.data.name + " • " + d.data.age;
    })
    .attr("fill", function(d) {
      // we fill each item with the same myColor scale, by name.
      return myColor(d.data.name);
    })
    .attr("y", function(d, i) {
      // very similar to the bar, we increment the Y position depending on index (i)
      return 20 * (i + 1);
    });
});
