import { ProjectsContent } from '../styles/Project.style'
import { Heading } from '../styles/Resume.style'
import { GeometricShape } from '../styles/Containers.style'
import ContactForm from '../components/Form'
import { useState } from 'react'
import { ContactWrapper } from '../styles/Contact.style'

const Contact = () => {
  const [msgSent, setMsgSent] = useState(false)
  return (
    <>
      <ContactWrapper>
        <Heading>
          <GeometricShape />
          <h1>Let&apos;s talk</h1>
        </Heading>
        <ProjectsContent>
          <ContactForm setMsgSent={setMsgSent} />
        </ProjectsContent>
        <div className={`success-blk ${msgSent ? '' : 'display-none'}`}>
          Your message has been sent!
        </div>
      </ContactWrapper>
    </>
  )
}

export default Contact
