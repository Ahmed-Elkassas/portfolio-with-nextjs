import {motion} from 'framer-motion'

import { CenteredTitle, MainSection, Paragraph, Title } from "styles/global"
import { EmailLink } from "./ContactStyles"

const emailVariants = {
  offscreen: {
    x: -200,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

const Contact = () => {
  return (
    <MainSection padding={+true} id="contact"> 
        <Title>Contact</Title>
        <motion.div variants={emailVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
          <CenteredTitle>Get In Touch</CenteredTitle>
          <Paragraph lowPadding={+true} lowFont={+true}>
              I’m currently looking to join a new team of creative designers and developers. If you think we might be a good fit for one another send me an 
              <EmailLink href="mailto:contact@ahmedelkassas.com" >📧 contact@ahmedelkassas.com</EmailLink>
          </Paragraph>
        </motion.div>
    </MainSection>
  )
}

export default Contact