import { useEffect, useState } from 'react';
import { ConfirmWrapper, RideContainer, RideSelector, ConfirmButton } from './tailwind-components/confirm-page-components'
import Map from './components/Map';

import { getCoordinates } from './functions/get-coordinates'

const Confirm = () => {

    const [pickupCoordinates, setPickupCoordinates] = useState(null)
    const [dropoffCoordinates, setDropoffCoordinates] = useState(null)

    useEffect(() => {
        getCoordinates("santa barbara", setPickupCoordinates)
        getCoordinates("los angeles", setDropoffCoordinates)
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
