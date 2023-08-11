import { HomeWrapper } from '../styles/Home.style'
import AboutCard from '../components/AboutCard'
import DescContainer from '../components/DescContainer'

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <AboutCard />
        <DescContainer />
      </HomeWrapper>
    </>
  )
}

export default Home
