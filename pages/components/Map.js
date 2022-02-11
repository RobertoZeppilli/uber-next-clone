import { useEffect } from 'react';
import { MapContainer } from '../tailwind-components/map-components';
import mapboxgl from '!mapbox-gl'
import { addMarkerToMap } from '../functions/add-marker';
import {pickupMarkerColor, dropoffMarkerColor} from "../utils/marker-colors"

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iZXJ0b3plcHBpbGxpIiwiYSI6ImNremgzazFrYjE5cnAydXBkcGpuN3V1NGsifQ.tg5kLySOIpP24EPb6tPIig';

const Map = (props) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-99.29011, 39.39172],
            zoom: 3
        });
        if (props.pickupCoordinates && props.dropoffCoordinates) {
            addMarkerToMap(map, props.pickupCoordinates, pickupMarkerColor)
            addMarkerToMap(map, props.dropoffCoordinates, dropoffMarkerColor)

            // AUTO ZOOM
            map.fitBounds([
                props.dropoffCoordinates,
                props.pickupCoordinates,
            ], { padding: 50 })
        }

    }, [props]);

    return (<MapContainer id="map"></MapContainer>);
};

export default Map;

