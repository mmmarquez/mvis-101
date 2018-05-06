// MapBox
mapboxgl.accessToken =
  "pk.eyJ1IjoibWF0ZW9tcnF6IiwiYSI6ImNqZ2I4Z2F2bDE1Zm4ycXFzMDJycm1wZzIifQ.PMTZRIytVBkwg8TaY1dpxw";

var w =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
var h =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

let mapEl = document.querySelector("#map");
mapEl.style.width = w;
mapEl.style.height = h;

// this is our map instance
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v10",
  zoom: 12,
  center: [-76.615959, 39.326142]
});

// d3 // we can load multiple files.
//   .queue()
//   .defer(d3.json, "https://data.baltimorecity.gov/resource/m8g9-abgb.geojson") // file one
//   .await(makeMyMap); // then we use await and pass a function.
// // this function we passed will contain the data fetched.

// // we do all our logic inside this one.
// function makeMyMap(error, data) {
//   let csvData = [];
//   data.features.forEach((x, index) => {
//     x.properties.title = x.properties.description;
//     x.properties.icon = "crosshair";
//   });
//   // console.log(data);
//   // here we can put mapbox logic
// }

// // console.log(map);


map.on("load", () => {
  // when map is ready, loaded.
  // console.log(data);
  // add layers!

  /*
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -76.660349,
          39.329039
        ]
      },
      "properties": {
        "location_state": "MD",
        "location_zip": null,
        "priority": "Low",
        "incidentlocation": "3600 REISTERSTOWN RD",
        "description": "AUTO ACCIDENT",
        ":@computed_region_5kre_ccpb": "187",
        "location_address": "3600 REISTERSTOWN RD",
        "callnumber": "P172302804",
        "location_city": "BALTIMORE",
        ":@computed_region_s6p5_2pgr": "27295",
        "calldatetime": "2017-08-18T21:05:00.000",
        "recordid": "2772659",
        ":@computed_region_gwq4_fjxs": "72",
        "district": "NW"
      }
    },
*/
  var url = 'https://data.baltimorecity.gov/resource/m8g9-abgb.geojson';

  window.setInterval(function () {
    map.getSource('drone').setData(url);
  }, 300000);

  map.addSource('drone', {
    type: 'geojson',
    data: url
  })

  map.addLayer({
    "id": "drone",
    "type": "symbol",
    "source": "drone",
    "layout": {
      "icon-image": "police-15",
      "text-field": "{description}",
      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      "text-offset": [0, 1.8],
      "text-size": 10,
      "text-anchor": "center"

    },
    "paint": {
      "text-color": "rgb(255,0,0)"
    }
  });

  // map.addLayer({
  //   id: "points",
  //   type: "symbol",
  //   source: {
  //     type: "geojson",
  //     data: data
  //   },
  //   layout: {
  //     "icon-image": "{icon}-15",
  //     "text-field": "{title}",
  //     "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
  //     "text-offset": [0, 0.6],
  //     "text-size": 10,
  //     "text-anchor": "center"
  //   },
  //   paint: {
  //     "text-color": "rgb(255,0,0)"
  //   }
  // });
});