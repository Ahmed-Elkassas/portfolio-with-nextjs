import {FiArrowRight} from 'react-icons/fi';

import {motion} from 'framer-motion'

import { Section, SectionText, SectionTitle, Button } from 'styles/global';
import { SectionLeft } from './HeroStyles';



const Hero = () => {
  return (
    <Section row nopadding>
        <SectionLeft>
        <SectionTitle as={motion.h2} initial={{y: -30}}  animate={{y: 30}} main center>
          Welcome, <br />
            Ahmed Elkassas here.
        </SectionTitle>
        <SectionText> 
        I'm a front end developer based in Egypt, I have developed many types of front-ends from well know web-application.
        </SectionText>
        <Button padding upperText href='#contact'>
            <span>Let's build something awesome</span>
            <FiArrowRight size="2rem" />
        </Button>
      </SectionLeft>
    </Section>
  )
}

export default Hero