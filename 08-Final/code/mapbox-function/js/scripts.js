// set our parameters
let accessToken = "pk.eyJ1IjoibWF0ZW9tcnF6IiwiYSI6ImNqZ2I4Z2F2bDE1Zm4ycXFzMDJycm1wZzIifQ.PMTZRIytVBkwg8TaY1dpxw";
let mapElement = "map"
let width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
let height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
let dataUrl = 'https://wanderdrone.appspot.com/';
// let dataUrl = './assets/data.json';
// let dataUrl = "https://data.baltimorecity.gov/resource/m8g9-abgb.geojson";
let layerName = "drone"
let imagePath = './assets/point.png'
let initialZoom = 3
let initialCenter = [-96, 37.8]
let dynamicData = false
let refreshRate = 5000
// makeMap(token, element, w, h, z, c, url, layer, image, dynamic);

// let's pass our parameters:
makeMap(accessToken, mapElement, width, height, initialZoom, initialCenter, dataUrl, layerName, imagePath, dynamicData, refreshRate);