import { Header } from '@/components/Header'
import { SubHeader } from '@/components/SubHeader'
import { HomeContentContainer, LeftEmailContainer } from './styles'
import { TextLink } from '@/components/TextLink'
import RigthSocialMediaLinks from '@/components/RigthSocialMediaLinks'
import About from '@/components/About'

export default function Home() {
  return (
    <>
      <Header />
      <LeftEmailContainer>
        <div className="left-side">
          <div className="up" />
          <div />
        </div>
        <p>
          <TextLink href="#" content="rafascatena@gmail.com" />{' '}
        </p>
      </LeftEmailContainer>
      <HomeContentContainer>
        <SubHeader />
      </HomeContentContainer>
      <RigthSocialMediaLinks />
      <About />
    </>
  )
}
