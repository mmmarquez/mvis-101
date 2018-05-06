/*
        ___           ___           ___         ___          ___           ___           ___       
       /  /\         /  /\         /  /\       /  /\        /  /\         /  /\         /__/\      
      /  /:/_       /  /:/_       /  /::\     /  /:/       /  /:/_       /  /::\        \  \:\     
     /  /:/ /\     /  /:/ /\     /  /:/\:\   /__/::\      /  /:/ /\     /  /:/\:\        \  \:\    
    /  /:/_/::\   /  /:/ /:/_   /  /:/  \:\  \__\/\:\    /  /:/ /::\   /  /:/  \:\   _____\__\:\   
   /__/:/__\/\:\ /__/:/ /:/ /\ /__/:/ \__\:\    \  \:\  /__/:/ /:/\:\ /__/:/ \__\:\ /__/::::::::\  
   \  \:\ /~~/:/ \  \:\/:/ /:/ \  \:\ /  /:/     \__\:\ \  \:\/:/~/:/ \  \:\ /  /:/ \  \:\~~\~~\/  
    \  \:\  /:/   \  \::/ /:/   \  \:\  /:/      /  /:/  \  \::/ /:/   \  \:\  /:/   \  \:\  ~~~   
     \  \:\/:/     \  \:\/:/     \  \:\/:/      /__/:/    \__\/ /:/     \  \:\/:/     \  \:\       
      \  \::/       \  \::/       \  \::/       \__\/       /__/:/       \  \::/       \  \:\      
       \__\/         \__\/         \__\/                    \__\/         \__\/         \__\/      
                                                                                                                                                                                                                                                                                        
*/
// http://geojson.org/
// http://maptimeboston.github.io/
// https://github.com/d3/d3-geo
// https://github.com/maptime-ams/animated-borders-d3js
// http://enjalot.github.io/intro-d3/maptime/
// http://maptimesea.github.io/2015/01/07/d3-mapping.html

let width = 800;
let height = 800;

let geoSvg = d3
  .select("#geo")
  .attr("width", width)
  .attr("height", height);

let geoPoints = geoSvg.append("g");

/*

let albersProjection = d3.geoAlbers()
albersProjection([-71.057, 42.313]);
-> return projected coordinates, in the context of our map.

*/
let albersProjection = d3
  .geoAlbers()
  .scale(190000) // scale
  .rotate([71.057, 0]) // rotate
  .center([0, 42.313]) // center
  .translate([width / 2, height / 2]); // aligning in the center of the projection

/*
geoPath()
    - get lat/long
    - convert to screen coordinates
    - return as an SVG path
*/

let geoPath = d3.geoPath().projection(albersProjection);

d3.json("./media/geo-data.json", data => {
  console.log(data);
  geoPoints
    .selectAll("path")
    .data(data.features)
    .enter()
    .append("path")
    .attr("fill", "#ccc")
    .attr("d", geoPath);
});
