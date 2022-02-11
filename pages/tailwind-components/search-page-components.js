import tw from "tailwind-styled-components"

export const SearchWrapper = tw.div`
    h-screen
    bg-gray-200
`
export const ButtonContainer = tw.div`
    bg-gray-200
    cursor-pointer
`
export const BackButton = tw.img`
    h-12
`
export const InputContainer = tw.div`
    flex
    items-center
    px-4 mb-2
    bg-white
`

export const FromToIcons = tw.div`
    w-10
    mr-2
    flex flex-col items-center
`
export const Circle = tw.img`
    h-2.5
`
export const Line = tw.img`
    h-10
`
export const Square = tw.img`
    h-3
`
export const InputBoxes = tw.div`
    flex flex-col flex-1
`
export const Input = tw.input`
    h-10
    bg-gray-200
    my-2 p-2
    rounded-2
    outline-none border-none
`
export const PlusIcon = tw.img`
    w-10 h-10
    rounded-full
    ml-3
    bg-gray-200
`
export const SavedPlaces = tw.div`
    flex items-center
    bg-white
    px-4 py-2
    text-lg
`
export const StarIcon = tw.img`
    w-10 h-10
    p-2 mr-2
    rounded-full
    bg-gray-400
`
export const ConfirmContainer = tw.div`
    p-2
`
export const ConfirmLocationButton = tw.button`
    bg-black
    p-2
    w-full
    text-white
    font-bold
    rounded-md
    outline-none border-none
    transform transition
    hover:bg-gray-800
    cursor-pointer
`
export const WaitForButton = tw.div`
    py-2
    text-gray-500
    text-center
    text-xs
    border-b
`
export const ButtonIcon = tw.span`
    bg-black
    text-white
    p-1 ml-2
    rounded-md
`