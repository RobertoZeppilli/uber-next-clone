import tw from "tailwind-styled-components"

export const Wrapper = tw.div`
    flex flex-col items-center

    bg-gray-200
    p-4
`
export const SignInButton = tw.button`
    bg-black
    text-white
    text-center
    py-4 my-4
    w-full
`
export const Title = tw.div`
    text-5xl
    pt-4
    text-gray-500
`
export const UberLogo = tw.img`
    h-20 w-auto
    object-contain
    self-start
`
export const HeadImage = tw.img`
    object-contain
    w-full
`