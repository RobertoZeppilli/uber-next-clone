import tw from "tailwind-styled-components"

export const ConfirmWrapper = tw.div`
    h-screen
    flex flex-col
`
export const RideContainer = tw.div`
    h-1/2
    flex flex-col
    flex-1
`
export const RideSelectorContainer = tw.div`
    flex flex-col
    flex-1
    overflow-y-scroll
`
export const ConfirmButtonContainer = tw.div`
    mt-4 p-2
    border-t-2
`
export const ConfirmButton = tw.div`
    text-white
    bg-black
    text-center
    py-2
    text-xl
    rounded-md
    outline-none border-none
    transform transition
    hover:bg-gray-800
    cursor-pointer
`
export const Title = tw.div`
    py-2
    text-gray-500
    text-center
    text-xs
    border-b
`
export const CarsList = tw.div`
    overflow-y-scroll
`
export const Car = tw.div`
    flex items-center
    p-4
`
export const CarImage = tw.img`
    h-14
    mr-4
`
export const CarDetails = tw.div`
    flex-1
`
export const Service = tw.div`
    font-lg
`
export const Time = tw.div`
    text-xs
    text-blue-500
`
export const CarPrice = tw.div`
    text-sm
`