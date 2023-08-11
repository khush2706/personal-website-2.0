import { AboutCardFooter, AboutCardWrapper, Separator } from '../styles/Home.style'
import avatar from '../assets/smile looking right.png'
import { Name } from '../styles/Navbar.style'
import { CardRole } from '../styles/Home.style'
import { Link } from 'react-router-dom'
import Dev from './Icons/Dev'
import Github from './Icons/Github'
import Linkedin from './Icons/Linkedin'
import Twitter from './Icons/Twitter'
import Gmail from './Icons/Gmail'
import FlexBox from './containers/FlexBox'

const AboutCard = () => {
  return (
    <>
      <AboutCardWrapper>
        <img src={avatar} alt="" width="220" height="220" />
        <FlexBox align="center" justify="center" direction="column" style={{ marginTop: '25px' }}>
          <Name>khushboo</Name>
          <Name>chaturvedi</Name>
        </FlexBox>
        <Separator />
        <CardRole>software developer</CardRole>
        <AboutCardFooter>
          <Link
            to="https://www.linkedin.com/in/khush2706/"
            target="_blank"
            rel="noopener noreferrer">
            <Linkedin width="28" height="28" />
          </Link>
          <Link to="https://github.com/khush2706" target="_blank" rel="noopener noreferrer">
            <Github width="28" height="28" />
          </Link>
          <Link to="https://dev.to/khush2706" target="_blank" rel="noopener noreferrer">
            <Dev width="28" height="28" />
          </Link>
          <Link to="https://twitter.com/khush__2706" target="_blank" rel="noopener noreferrer">
            <Twitter width="28" height="28" />
          </Link>
          <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=kc220313@gmail.com">
            <Gmail width="28" height="28" />
          </Link>
        </AboutCardFooter>
      </AboutCardWrapper>
    </>
  )
}

export default AboutCard
