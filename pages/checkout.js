import { useState } from 'react'
import { useRouter } from 'next/router'
import { CheckoutWrapper, ChoosenCar, CarImage, CarService, CarPrice, Title } from './tailwind-components/checkout-page-components'

import { motion } from 'framer-motion';
import { hidden, visible } from './utils/animations'


const Checkout = () => {
    const router = useRouter()

    const [checkoutCar, setCheckoutCar] = useState(JSON.parse(router.query.choosenCar))
    const [choosenRideDuration, setChoosenRideDuration] = useState(Number(router.query.rideDuration))

    console.log(checkoutCar, choosenRideDuration)

    return (
        <CheckoutWrapper>
            <motion.div initial="hidden" animate="visible" variants={{ hidden, visible }}>
                <Title>The ride you have choosen!</Title>
            </motion.div>
            {checkoutCar && <ChoosenCar>
                <CarImage src={checkoutCar.imgUrl} />
                <CarService>{checkoutCar.service}</CarService>
                <CarPrice>${(choosenRideDuration * checkoutCar.multiplier).toFixed(2)}</CarPrice>
            </ChoosenCar>}

        </CheckoutWrapper>
    )
}

export default Checkout