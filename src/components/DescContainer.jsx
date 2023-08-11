import { Link } from 'react-router-dom'
import { BioText, DescWrapper, Heading, SubHeading } from '../styles/Home.style'
import Button from './Button'

const DescContainer = () => {
  return (
    <>
      <DescWrapper>
        <Heading>Hello</Heading>
        <SubHeading>Oh. My. Code! It&apos;s great to have you here!</SubHeading>
        <div style={{ marginBottom: '30px' }}>
          <Link to="resume">
            <Button>Resume</Button>
          </Link>
          <Link to="projects">
            <Button backgroundcolor="#fff" color="#000" border="1px solid #000">
              Projects
            </Button>
          </Link>
        </div>
        <BioText>
          I&apos;m a final year engineering undergrad and a programmer. I work as a Web Developer
          with experience in handling JavaScript, Node, React and Vue coding, designs and
          extensions.
        </BioText>
        <BioText>
          Apart from development, I am an Open-Source enthusiast. I also write Technical blogs
          regularly on dev.to
        </BioText>
      </DescWrapper>
    </>
  )
}

export default DescContainer
