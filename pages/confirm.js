import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import { ConfirmWrapper, RideContainer, ConfirmButtonContainer, ConfirmButton } from './tailwind-components/confirm-page-components'

import { getCoordinates } from './functions/get-coordinates'

import Map from './components/Map';
import RideSelector from './components/RideSelector';

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState(null)
    const [dropoffCoordinates, setDropoffCoordinates] = useState(null)

    useEffect(() => {
        getCoordinates(pickup, setPickupCoordinates)
        getCoordinates(dropoff, setDropoffCoordinates)
    }, [pickup, dropoff])

    return (<ConfirmWrapper>
        <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
        <RideContainer>
            <RideSelector/>
            <ConfirmButtonContainer>
                <ConfirmButton>Confirm Ride</ConfirmButton>
            </ConfirmButtonContainer>
        </RideContainer>
    </ConfirmWrapper>);
};

export default Confirm;
