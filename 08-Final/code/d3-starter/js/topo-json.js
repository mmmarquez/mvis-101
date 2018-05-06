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
  .select("#map")
  .attr("width", width)
  .attr("height", height);

let path = d3.geoPath();

d3.json("https://d3js.org/us-10m.v1.json", function(error, us) {
  if (error) throw error;

  topoSvg
    .append("g")
    .attr("class", "states")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features)
    .enter()
    .append("path")
    .attr("d", path);

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
