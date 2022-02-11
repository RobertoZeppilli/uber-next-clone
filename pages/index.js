import Map from './components/Map'
import { Wrapper, ActionItems } from './tailwind-components/map-components'
import { Header, UberLogo, Profile, Name, UserImage, ActionButtons, ActionButton, ActionButtonImage, InputButton } from './tailwind-components/action-items-components'
import Link from 'next/link'

import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL

        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })
  })

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://1000marche.net/wp-content/uploads/2020/03/Uber-logo-1536x1024.png" />
          <Profile>
            <Name>{user && user.name}</Name>
            <UserImage
              src={user && user.photoUrl}
              onClick={() => signOut(auth)} />
          </Profile>
        </Header>
        <ActionButtons>
          <Link passHref href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>

          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>

        <InputButton>

        </InputButton>
      </ActionItems>
    </Wrapper>
  )
}

