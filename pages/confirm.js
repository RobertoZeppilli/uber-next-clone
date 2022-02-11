import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

import Link from 'next/link'

import { ConfirmWrapper, RideContainer, BackButtonContainer, BackButton } from './tailwind-components/confirm-page-components'

import { getCoordinates } from './functions/get-coordinates'

import Map from './components/Map';
import RideSelector from './components/RideSelector';

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState([0, 0])
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0])

    useEffect(() => {
        getCoordinates(pickup, setPickupCoordinates)
        getCoordinates(dropoff, setDropoffCoordinates)
    }, [pickup, dropoff])

    return (<ConfirmWrapper>
        <Link href="/search" passHref>
            <BackButtonContainer>
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
            </BackButtonContainer>
        </Link>
        <Map pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
        <RideContainer>
            <RideSelector pickupCoordinates={pickupCoordinates} dropoffCoordinates={dropoffCoordinates} />
        </RideContainer>
    </ConfirmWrapper>);
};

export default Confirm;
