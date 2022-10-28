import Link from 'next/link';

import { AiFillGithub, } from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa'
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, Logo, NavLink, ResumeButton, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom: '20px' }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
        {/* <Logo>A</Logo> */}
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#work">
          <NavLink>work</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li> 
      <li>
        <Link href="#" target="_blank" rel="noopener noreferrer">
          <ResumeButton>Resume</ResumeButton>
        </Link>
      </li>       
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/Ahmed-Elkassas" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ahmed-elkassas/" target="_blank">
          <FaLinkedinIn size="2.7rem" />
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;