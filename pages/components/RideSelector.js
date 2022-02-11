import { useEffect, useState } from 'react'
import { RideSelectorContainer, Title, CarsList, Car, CarImage, CarDetails, CarPrice, Service, Time, RadioButton, ConfirmButtonContainer, ConfirmButton } from '../tailwind-components/confirm-page-components'
import Link from 'next/link'
import { cars } from '../utils/carList'
import { getRideDuration } from '../functions/get-coordinates'

const RideSelector = ({ pickupCoordinates, dropoffCoordinates }) => {
    const [rideDuration, setRideDuration] = useState(0)
    const [choosenCar, setChoosenCar] = useState(null)

    const ChooseThePerfectRide = (e) => {
        e.preventDefault()
        setChoosenCar(e.target.value)
    }

    useEffect(() => {
        getRideDuration(pickupCoordinates, dropoffCoordinates, setRideDuration)
    }, [pickupCoordinates, dropoffCoordinates])

    return (
        <RideSelectorContainer onChange={ChooseThePerfectRide} >
            <Title>Choose a ride, or swipe up for more!</Title>
            <CarsList>
                {cars && cars.map((car, index) => {
                    return (<Car key={index}>
                        <RadioButton type="radio" name="ride" value={JSON.stringify(car)} />
                        <CarImage src={car.imgUrl} />
                        <CarDetails>
                            <Service>{car.service}</Service>
                            <Time>5 min away</Time>
                        </CarDetails>
                        <CarPrice>{rideDuration ? '$' + (rideDuration * car.multiplier).toFixed(2) :
                            'Calulating price...'
                        }</CarPrice>
                    </Car>)
                })}
                <Link href={{ pathname: '/checkout', query: { choosenCar, rideDuration } }} passHref>
                    <ConfirmButtonContainer>
                        <ConfirmButton type="submit">Confirm Ride</ConfirmButton>
                    </ConfirmButtonContainer>
                </Link>
            </CarsList>
        </RideSelectorContainer>
    )
}

export default RideSelector