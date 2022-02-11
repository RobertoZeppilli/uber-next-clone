import { useEffect, useState } from 'react';
import { ConfirmWrapper, RideContainer, RideSelector, ConfirmButton } from './tailwind-components/confirm-page-components'
import Map from './components/Map';

const Confirm = () => {

    const [pickupCoordinates, setPickupCoordinates] = useState([])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([])

    const getPickupCoordinates = () => {
        const pickup = "latina"

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + new URLSearchParams({
            access_token: "pk.eyJ1Ijoicm9iZXJ0b3plcHBpbGxpIiwiYSI6ImNremgzazFrYjE5cnAydXBkcGpuN3V1NGsifQ.tg5kLySOIpP24EPb6tPIig",
            limit: 1
        }))
            .then((res) => res.json())
            .then(data => {
                setPickupCoordinates(data.features[0].center)
            })
    }

    const getDropoffCoordinates = () => {
        const dropoff = "los angeles"

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + new URLSearchParams({
            access_token: "pk.eyJ1Ijoicm9iZXJ0b3plcHBpbGxpIiwiYSI6ImNremgzazFrYjE5cnAydXBkcGpuN3V1NGsifQ.tg5kLySOIpP24EPb6tPIig",
            limit: 1
        }))
            .then((res) => res.json())
            .then(data => {
                setDropoffCoordinates(data.features[0].center)
            })
    }

    useEffect(() => {
        getPickupCoordinates()
        getDropoffCoordinates()
    }, [])

    return (<ConfirmWrapper>
        <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
        <RideContainer>
            <RideSelector></RideSelector>
            <ConfirmButton></ConfirmButton>
        </RideContainer>
    </ConfirmWrapper>);
};

export default Confirm;
