import Link from 'next/link';
import Image from 'next/image';

import {motion} from 'framer-motion'

import { AiFillGithub, } from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';

import { Container, Div2, Div3, Logo, NavLink, ResumeButton, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
      <Link href="/">
        <Logo>
          <Image src="/logo.svg" alt='logo' width="28px" height="28px" />
        </Logo>
      </Link>
    <Div2>
      <li>
        <Link href="#work">
          <NavLink as={motion.a}  whileHover={{scale: 1.2, transition: { duration: 1 }}}>work</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink as={motion.a} whileHover={{scale: 1.1}}>About</NavLink>
        </Link>
      </li> 
      <li>
          <ResumeButton  href="/data/Ahmed Elkassas's Cv.pdf" target="_blank" rel="noopener noreferrer">Resume</ResumeButton>
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