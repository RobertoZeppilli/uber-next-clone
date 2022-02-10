import { useEffect } from 'react';
import { MapContainer } from '../tailwind-components/map-components';
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iZXJ0b3plcHBpbGxpIiwiYSI6ImNremgzazFrYjE5cnAydXBkcGpuN3V1NGsifQ.tg5kLySOIpP24EPb6tPIig';

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-99.29011, 39.39172],
            zoom: 3
        });
    });

    return (<MapContainer id="map"></MapContainer>);
};

export default Map;

