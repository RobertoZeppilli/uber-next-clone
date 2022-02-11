import { useEffect, useState } from 'react'
import { RideSelectorContainer, Title, CarsList, Car, CarImage, CarDetails, CarPrice, Service, Time } from '../tailwind-components/confirm-page-components'

import { cars } from '../utils/carList'
import { getRideDuration } from '../functions/get-coordinates'

console.log(cars)

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
    const [rideDuration, setRideDuration] = useState(0)

    useEffect(() => {
        getRideDuration(pickupCoordinates, dropoffCoordinates, setRideDuration)
    }, [pickupCoordinates, dropoffCoordinates])
    return (
        <RideSelectorContainer>
            <Title>Choose a ride, or swipe up for more!</Title>
            <CarsList>
                {cars && cars.map((car, index) => {
                    return (<Car key={index}>
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <CarPrice>{ rideDuration ? '$' + (rideDuration * car.multiplier).toFixed(2) :
                            'Calulating price...'
                        }</CarPrice>
                    </Car>)
                })}
            </CarsList>
        </RideSelectorContainer>
    )
}

export default RideSelector