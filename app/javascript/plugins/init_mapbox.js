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


    new mapboxgl.Marker()
      .setLngLat([marker.lng, marker.lat])
      .setPopup(popup)
      .addTo(map);
  })
}

const initMapbox = () => {
  const mapElement = document.getElementById('map');
  if (mapElement == null)
    return;

  console.log(mapElement.dataset.markers);
  const markersData = JSON.parse(mapElement.dataset.markers);
  mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/dianemrn/ckj2rm14hav7n19mhr42rgygd',// <-- use your own!
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
  });
  map.addControl(new MapboxGeocoder({ accessToken: mapboxgl.accessToken,
                                    mapboxgl: mapboxgl }));
  fitMapToMarkers(map, markersData);
  addMarkersToMap(map, markersData);
}
export default initMapbox

