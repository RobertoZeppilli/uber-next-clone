import { useState } from 'react'
import { useRouter } from 'next/router'
import { CheckoutWrapper, ChoosenCar, CarImage, CarService, CarPrice, Title } from './tailwind-components/checkout-page-components'

const Checkout = () => {
    const router = useRouter()

    const [checkoutCar, setCheckoutCar] = useState(JSON.parse(router.query.choosenCar))
    const [choosenRideDuration, setChoosenRideDuration] = useState(Number(router.query.rideDuration))

    console.log(checkoutCar, choosenRideDuration)

    return (
        <CheckoutWrapper>
            <Title>The ride you have choosen!</Title>
            {checkoutCar && <ChoosenCar>
                <CarImage src={checkoutCar.imgUrl} />
                <CarService>{checkoutCar.service}</CarService>
                <CarPrice>${(choosenRideDuration * checkoutCar.multiplier).toFixed(2)}</CarPrice>
            </ChoosenCar>}

        </CheckoutWrapper>
    )
}

export default Checkout