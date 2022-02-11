import { RideSelectorContainer, Title, CarsList, Car, CarImage, CarDetails, CarPrice, Service, Time } from '../tailwind-components/confirm-page-components'

import { cars } from '../utils/carList'

console.log(cars)

const RideSelector = () => {
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
                        <CarPrice>$24.00</CarPrice>
                    </Car>)
                })}
            </CarsList>
        </RideSelectorContainer>
    )
}

export default RideSelector