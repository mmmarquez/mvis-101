// MapBox
mapboxgl.accessToken =
  "pk.eyJ1IjoibWF0ZW9tcnF6IiwiYSI6ImNqZ2I4Z2F2bDE1Zm4ycXFzMDJycm1wZzIifQ.PMTZRIytVBkwg8TaY1dpxw";

// this is our map instance
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v10",
  zoom: 2,
  center: [-96, 37.8]
});

// we have our dataset!
let myData = [
  {
    name: "First Location",
    latitude: -77.03238901390978,
    longitude: 38.913188059745586
  },
  {
    name: "Second Location",
    latitude: -122.414,
    longitude: 37.776
  },
  {
    name: "Third Location",
    latitude: -152.414,
    longitude: 27.776
  }
];

d3.csv("./media/map.csv", data => {
  let csvData = [];
  data.forEach((x, index) => {
    // let's define the model
    let model = {
      type: "Feature",
      geometry: { type: "Point", coordinates: [x.lat, x.long] },
      properties: { title: x.name, icon: "monument" }
    };
    // push model to csvData array
    csvData.push(model);
  });

  // here we can put mapbox logic
  map.on("load", () => {
    // when map is ready, loaded.
    console.log(csvData);
    // add layers!
    map.addLayer({
      id: "external",
      type: "symbol",
      source: {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: csvData
        }
      },
      layout: {
        "icon-image": "{icon}-15",
        "text-field": "{title}",
        "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
        "text-offset": [0, 0.6],
        "text-anchor": "top"
      }
    });
  });
});

// Model
/*
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-77.03238901390978, 38.913188059745586]
    },
    properties: {
      title: "Mapbox DC",
      icon: "monument"
    }
  },
*/

// blank array
let prepData = [];

myData.forEach((x, index) => {
  // let's define the model
  let model = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [x.latitude, x.longitude]
    },
    properties: {
      title: x.name,
      icon: "monument"
    }
  };

  // push model to prepData array
  prepData.push(model);
});

// map.on("load", () => {
// when map is ready, loaded.
// add layers!
// map.addLayer({
//   id: "points",
//   type: "symbol",
//   source: {
//     type: "geojson",
//     data: {
//       type: "FeatureCollection",
//       features: prepData
//     }
//   },
//   layout: {
//     "icon-image": "{icon}-15",
//     "text-field": "{title}",
//     "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
//     "text-offset": [0, 0.6],
//     "text-anchor": "top"
//   }
// });
// });

// map.on("mousemove", "points", e => {
//   console.log(e);
// });

// Reset the state-fills-hover layer's filter when the mouse leaves the layer.
// map.on("mouseleave", "points", () => {
//   console.log("We Left!");
// });
