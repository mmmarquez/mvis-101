/*
                    ___           ___         ___         ___          ___           ___           ___       
        ___        /  /\         /  /\       /  /\       /  /\        /  /\         /  /\         /__/\      
       /  /\      /  /::\       /  /::\     /  /::\     /  /:/       /  /:/_       /  /::\        \  \:\     
      /  /:/     /  /:/\:\     /  /:/\:\   /  /:/\:\   /__/::\      /  /:/ /\     /  /:/\:\        \  \:\    
     /  /:/     /  /:/  \:\   /  /:/~/:/  /  /:/  \:\  \__\/\:\    /  /:/ /::\   /  /:/  \:\   _____\__\:\   
    /  /::\    /__/:/ \__\:\ /__/:/ /:/  /__/:/ \__\:\    \  \:\  /__/:/ /:/\:\ /__/:/ \__\:\ /__/::::::::\  
   /__/:/\:\   \  \:\ /  /:/ \  \:\/:/   \  \:\ /  /:/     \__\:\ \  \:\/:/~/:/ \  \:\ /  /:/ \  \:\~~\~~\/  
   \__\/  \:\   \  \:\  /:/   \  \::/     \  \:\  /:/      /  /:/  \  \::/ /:/   \  \:\  /:/   \  \:\  ~~~   
        \  \:\   \  \:\/:/     \  \:\      \  \:\/:/      /__/:/    \__\/ /:/     \  \:\/:/     \  \:\       
         \__\/    \  \::/       \  \:\      \  \::/       \__\/       /__/:/       \  \::/       \  \:\      
                   \__\/         \__\/       \__\/                    \__\/         \__\/         \__\/      
                                                                                                                                                                                                                                                                                                  
*/
// https://bl.ocks.org/mbostock/4090848
// http://bl.ocks.org/lokesh005/7640d9b562bf59b561d6 (V3)
// https://bost.ocks.org/mike/map/
// https://github.com/topojson/topojson/wiki/Gallery
// https://d3js.org/us-10m.v1.json

let height = 800;
let width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

let topoSvg = d3
  .select("#map_labels")
  .attr("width", width)
  .attr("height", height);

let path = d3.geoPath();

d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {
  if (error) throw error;

  //PREP DATA
  // we need to prepare our data!

  // this holds our array of "features"
  var geojson = topojson.feature(us, us.objects.states).features;

  // this calculates the centroid point of the "states"
  // then, usin .map(), returns it as an array.
  var centroids = geojson.map(function(feature) {
    return path.centroid(feature);
  });

  // loop through the `features`
  // ad a new property to the object we are looping: `label` and `centroid coordinates`
  geojson.forEach(function(d, i) {
    d.properties = {
      label: "label_" + i, // example of a label
      centroid: path.centroid(d) // center coordinates for translate
    };
  });

  // let's create the base
  var paths = topoSvg
    .append("g")
    .selectAll("path")
    .data(geojson)
    .enter()
    .append("g")
    .attr("class", "state");

  // let's add the paths
  paths.append("path").attr("d", path);

  // let's add text in the same <g>
  paths
    .append("text")
    .attr("class", "state-name")
    .text(function(d, i) {
      return d.properties.label; // returnt he label under properties
    })
    // translate the <text> based on the `centroid` coordinates
    .attr("transform", function(d) {
      return (
        "translate(" +
        d.properties.centroid[0] +
        "," +
        d.properties.centroid[1] +
        ")"
      );
    })
    .attr("dy", ".35em")
    .attr("fill", "red");

  topoSvg
    .append("path")
    .attr("class", "state-borders")
    .attr(
      "d",
      path(
        topojson.mesh(us, us.objects.states, function(a, b) {
          return a !== b;
        })
      )
    );
});
