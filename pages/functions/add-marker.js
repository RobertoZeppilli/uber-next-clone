import mapboxgl from '!mapbox-gl'

export const addMarkerToMap = (map, coordinates, color) => {
    const marker = new mapboxgl.Marker({ "color": color })
        .setLngLat(coordinates)
        .addTo(map);
}