import { Wrapper, SignInButton, UberLogo, Title, HeadImage } from './tailwind-components/login-page-components'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider } from '../firebase'


const Login = () => {
    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])

    
    return (
        <Wrapper>
            <UberLogo src="https://1000marche.net/wp-content/uploads/2020/03/Uber-logo-1536x1024.png" />
            <Title>Log In to access your acoount</Title>
            <HeadImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
            <SignInButton onClick={() => signInWithPopup(auth, provider)}>
                Sign in with Google
            </SignInButton>
        </Wrapper>
    )
}

export default Login