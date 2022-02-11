import tw from "tailwind-styled-components"

export const Header = tw.div`
    flex justify-between items-center
`
export const UberLogo = tw.img`
    h-28
`
export const Profile = tw.div`
    flex items-center
`
export const Name = tw.div`
    mr-4 w-20
    text-sm
    font-medium
`
export const UserImage = tw.img`
    h-12 w-12
    rounded-full
    border-2 border-green-500
    cursor-pointer
`
export const ActionButtons = tw.div`
    flex w-full
`
export const ActionButton = tw.div`
    flex-1
    flex items-center flex-col justify-center
    m-4 h-32
    bg-gray-200 rounded-lg
    transform transition
    hover:scale-105
    text-xl
    cursor-pointer
`
export const ActionButtonImage = tw.img`
    h-3/5
`
export const InputButton = tw.div`
    h-20
    flex items-center
    bg-gray-200
    text-2xl p-4
    mt-8
`