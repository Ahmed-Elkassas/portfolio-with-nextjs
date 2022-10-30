import { CenteredTitle, MainSection, Paragraph, Title } from "styles/global"
import { EmailLink } from "./ContactStyles"


const Contact = () => {
  return (
    <MainSection padding={+true} id="contact"> 
        <Title>Contact</Title>
        <CenteredTitle>Get In Touch</CenteredTitle>
        <Paragraph lowPadding={+true} lowFont={+true}>
            I’m currently looking to join a new team of creative designers and developers. If you think we might be a good fit for one another send me an 
            <EmailLink href="mailto:contact@ahmedelkassas.com">📧 contact@ahmedelkassas.com</EmailLink>
        </Paragraph>
    </MainSection>
  )
}

export default Contact