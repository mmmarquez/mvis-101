// https://www.mapbox.com/mapbox-gl-js/example/simple-map/
// https://www.mapbox.com/mapbox-gl-js/example/live-geojson/

// MapBox
mapboxgl.accessToken =
  "pk.eyJ1IjoibWF0ZW9tcnF6IiwiYSI6ImNqZ2I4Z2F2bDE1Zm4ycXFzMDJycm1wZzIifQ.PMTZRIytVBkwg8TaY1dpxw";

let w =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
let h =
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

map.on("load", () => {
  // when map is ready, loaded.
  // url of our data
  let url = 'https://data.baltimorecity.gov/resource/m8g9-abgb.geojson';
  // let url = 'https://wanderdrone.appspot.com/';
  // let url = './assets/data.json';

  // setInterval :: creates a looping function.
  window.setInterval(function () {
    // we `fetch` the data every 15 minutes
    map.getSource('drone').setData(url);

  }, 5000); // milisecons 1000 = 1s

  // let's load our point, we next the logic so we know that data / assets are loaded.
  map.loadImage('./assets/point.png', function (error, image) {
    if (error) throw error;

    // once image is `received` let's add it with the name point
    map.addImage('point', image);
    // add data to the layer `drone`
    // url refers to this source: map.getSource('drone').setData(url);
    map.addSource('drone', {
      type: 'geojson',
      data: url
    })
    // add layer `drone` with the data
    // icons: https://github.com/mapbox/mapbox-gl-styles/tree/master/sprites
    map.addLayer({
      "id": "drone",
      "type": "symbol",
      "source": "drone",
      "layout": {
        "icon-image": "point",
      },
      "paint": {
        "text-color": "rgb(0,0,255)"
      }
    });

  });

});