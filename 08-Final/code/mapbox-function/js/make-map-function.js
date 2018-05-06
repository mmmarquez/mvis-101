/*
PARAMS
    - token : Mapbox token `mapbox website`
    - element : element to insert map. `map`
    - w : width `600`
    - h : height `600`
    - z : initial map zoom `9000`
    - c : intial coordinates `[lat, long]`
    - url : data path `geojson`
    - layer : layer name `drone`
    - image : image path `./media/image.png`
    - dynamic: loop fetching of data? `true/false`
    - refresh: refresh rate `1000`
*/

let makeMap = (token, element, w, h, z, c, url, layer, image, dynamic, refresh) => {
    // TOKEN
    mapboxgl.accessToken = token;
    // MAP SETUP
    let mapEl = document.querySelector('#' + element);
    mapEl.style.width = w;
    mapEl.style.height = h;

    // INIT MAP
    let map = new mapboxgl.Map({
        container: element,
        style: "mapbox://styles/mapbox/streets-v10",
        zoom: z,
        center: c
    });

    map.on("load", () => {
        if (dynamic) {
            window.setInterval(function () {
                map.getSource(layer).setData(url);
            }, refresh);
        } else {
            window.setTimeout(() => {
                map.getSource(layer).setData(url);
            }, 1000)
        }
        map.loadImage(image, function (error, pointer) {
            if (error) throw error;
            map.addImage("point", pointer);
            map.addSource(layer, {
                type: "geojson",
                data: url
            });
            map.addLayer({
                id: layer,
                type: "symbol",
                source: layer,
                layout: {
                    "icon-image": "point"
                },
                paint: {
                    "text-color": "rgb(0,0,255)"
                }
            });
        });
    });


}