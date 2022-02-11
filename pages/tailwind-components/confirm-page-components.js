import tw from "tailwind-styled-components"

export const ConfirmWrapper = tw.div`
    h-screen
    flex flex-col
    relative
`
export const BackButton = tw.img``
export const BackButtonContainer = tw.div`
    absolute
    top-3
    left-3
    z-10
    bg-white
    rounded-full
    cursor-pointer
    transform transition
    hover:bg-gray-200
`
export const RideContainer = tw.div`
    h-1/2
    flex flex-col
    flex-1
`
export const RideSelectorContainer = tw.form`
    flex flex-col
    flex-1
    overflow-y-scroll
`
export const ConfirmButtonContainer = tw.div`
    mt-4 p-2
    border-t-2
`
export const ConfirmButton = tw.button`
    text-white
    bg-black
    text-center
    py-2
    text-xl
    rounded-md
    w-full
    outline-none border-none
    transition
    hover:bg-gray-800
    font-bold
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
export const Car = tw.label`
    flex items-center
    p-4
    hover:bg-gray-200
    transition
    cursor-pointer
`
export const RadioButton = tw.input`

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