import Map from './components/Map'
import { Wrapper, ActionItems } from './tailwind-components/map-components'
import { Header, UberLogo, Profile, Name, UserImage, ActionButtons, ActionButton, ActionButtonImage, InputButton } from './tailwind-components/action-items-components'
import Link from 'next/link'

export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://1000marche.net/wp-content/uploads/2020/03/Uber-logo-1536x1024.png" />
          <Profile>
            <Name>Roby</Name>
            <UserImage src="https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png" />
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

