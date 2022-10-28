import {FaReact} from 'react-icons/fa'
import { MainSection, Title, Paragraph, CenteredTitle, SubTitle } from "styles/global";

const About = () => {
  return (
    <MainSection padding id="about">
      <Title yellow>About me</Title>
      <Paragraph>
        Hello! I'm a junior web developer offering +1 year of experience and I
        enjoy creating things that live on the internet. My interest in web
        development started back in 2018 when I decided to shift my career path
        to web development, so I spend most of days to learn technology and
        skills to create awesome web applications and my Next step mobile app with React-Native.  
      </Paragraph>
      <CenteredTitle>My Expertise</CenteredTitle>
      <SubTitle>
        <span><FaReact size="4rem" /></span>
        <h4>Frontend Dev React, NextJS</h4>
      </SubTitle>
      <Paragraph>Passionate about web development and design. Over last two years of development experience in HTML, CSS, JS, React and NextJS frameworks.</Paragraph>
    </MainSection>
  );
};

export default About;
