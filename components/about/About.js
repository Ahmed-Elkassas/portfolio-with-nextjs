import {FaReact} from 'react-icons/fa'
import styled from 'styled-components';
import { MainSection, Title, Paragraph, CenteredTitle, SubTitle, Section, ImgContainer, BigParagraph } from "styles/global";

import {motion} from 'framer-motion'

const GridType = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0px 10px;
    width: 85%;
    padding: 0px;
    margin: 20px auto;
    overflow: hidden;
` 
const GridItem = styled.li`
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
  &::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: ${props => props.theme.colors.mainColor};
    line-height: 12px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`

const textVariants = {
  offscreen: {
    x: -10,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      bounce: 0.4,
      duration: 0.8
    }
  }
};
const expertiseVariants = {
  hidden: {
    x: 10,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const About = () => {

  return (
    <MainSection as={motion.section}  padding={+true} id="about"  >
      <Title yellow={+true}>About me</Title>
      <motion.div variants={textVariants} initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.8 }}>
        <Paragraph> 
          Hello! I'm a junior web developer offering +1 year of experience and I
          enjoy creating things that live on the internet. My interest in web
          development started back in 2018 when I decided to shift my career path
          to web development, so I spend most of days to learn technology and
          skills to create awesome web applications and my Next step mobile app with React-Native.  
        </Paragraph>
        <BigParagraph>
          Here are a few technologies I’ve been working with recently:
        </BigParagraph>
        <GridType>
          <GridItem>JavaScript (ES6+)</GridItem>
          <GridItem>React</GridItem>
          <GridItem>Nextjs</GridItem>
          <GridItem>Typescript</GridItem>
          <GridItem>Redux</GridItem>
          <GridItem>Sanity (CMS)</GridItem>
        </GridType>
      </motion.div>
      <motion.div variants={expertiseVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.8 }}>
        <CenteredTitle>My Expertise</CenteredTitle>
        <SubTitle>
          <span><FaReact size="4rem" /></span>
          <h4>Frontend Dev React, NextJS</h4>
        </SubTitle>
        <Section row={+true}>
          <Paragraph>Passionate about web development and design. Over last two years of development experience in HTML, CSS, JS, React and NextJS frameworks at <span>AWStreams.</span></Paragraph>
          <ImgContainer>
            <img src='/hello-world-html.webp' alt="hello world code" />
          </ImgContainer>
        </Section>
      </motion.div>
    </MainSection>
  );
};

export default About;
