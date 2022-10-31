import {FiArrowRight} from 'react-icons/fi';

import {motion} from 'framer-motion'

import { Section, SectionText, SectionTitle, Button } from 'styles/global';
import { SectionLeft } from './HeroStyles';

const Hero = () => {
  return (
    <Section row={+true} nopadding={+true}>
        <SectionLeft>
        <SectionTitle as={motion.h2} initial={{y: -30}}  animate={{y: 30}} main={+true} center={+true}>
          Welcome, <br />
            Ahmed Elkassas here.
        </SectionTitle>
        <SectionText as={motion.p} initial={{y: 20}} animate={{y: -10}}> 
            I'm a front end developer based in Egypt, I have developed many types of front-ends from well know web-application.
        </SectionText>
        <Button as={motion.a} initial={{x: "-100vw"}} animate={{x: 0}} transition={{delay: .5}} padding={+true} textupper={+true} href='#contact'>
            <span>Let's build something awesome</span>
            <FiArrowRight size="2rem" />
        </Button>
      </SectionLeft>
    </Section>
  )
}

export default Hero