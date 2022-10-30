import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Logo = styled.div`
  img {
    color: ${props => props.theme.colors.mainColor};
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding-top: 2rem;
  margin: auto;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0px;
    align-items: center;
    width: 100%;
    margin-bottom: 6rem;
  }
`;
export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  color: ${props => props.theme.colors.link};
  cursor: pointer;
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

// Social Icons 
export const SocialIcons = styled.a`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    scale: 1.2;
    cursor: pointer;
  }
`

export const ResumeButton = styled.a`
    background: transparent;
    border: 1px solid #64ffda;
    border-radius: 7px;
    cursor: pointer;
    font-size: 2rem;
    font-weight: 500;
    outline: none;
    padding: 0.3rem 0.9rem;
    position: relative;
    transition: all .3s ease-in-out 0s;
    color: ${props => props.theme.colors.link};
    &:hover {
      background: #64ffda;
      background-image: linear-gradient(315deg,#64ffda,#72f29a);
      box-shadow: 9px 7px 32px -11px rgb(20 233 86 / 74%);
      color: ${props => props.theme.backgrounds.mainBackground}
    }
`