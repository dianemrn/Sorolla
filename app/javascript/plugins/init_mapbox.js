import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
const fitMapToMarkers = (map, markers) => {
  const bounds = new mapboxgl.LngLatBounds();
  markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
  map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
};
  const addMarkersToMap = (map, markers) => {
  markers.forEach((marker) => {
    const popup = new mapboxgl.Popup().setHTML(marker.infoWindow); // add this
    // Create a HTML element for your custom marker
    const element = document.createElement('div');
    element.className = 'marker';
    element.style.backgroundImage = `url('${marker.image_url}')`;
    element.style.backgroundSize = 'contain';
    element.style.width = '25px';
    element.style.height = '25px';
    // Pass the element as an argument to the new marker
    new mapboxgl.Marker(element)
      .setLngLat([marker.lng, marker.lat])
      .setPopup(popup)
      .addTo(map);
  })
}
const initMapbox = () => {
  const mapElement = document.querySelector('#map')
  if (mapElement == null)
    return
  const markersData = JSON.parse(mapElement.dataset.markers)
  mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/dianemrn/ckj1oygty9uji19qtjq2pjkv0',// <-- use your own!
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
  });
  map.addControl(new MapboxGeocoder({ accessToken: mapboxgl.accessToken,
                                    mapboxgl: mapboxgl }));
  fitMapToMarkers(map, markers);
  addMarkers(map, markers)
}
export default initMapbox

