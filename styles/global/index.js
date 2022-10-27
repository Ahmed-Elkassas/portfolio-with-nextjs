import styled from "styled-components";

export const Section = styled.section`
    display: ${props => props.grid ? "grid" : "flex"};
    flex-direction: ${props => props.row ? "row" : "column"};
    padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" };
    margin: auto 0;
    max-width: 1040px;
    position: relative;
    /* overflow: hidden; */
    grid-template-columns: 1fr 1fr;
    @media ${(props) => props.theme.breakpoints.md} {
        padding: 24px 10px;
        flex-direction: column;
    }
    @media ${(props) => props.theme.breakpoints.sm} {
        padding: ${(props) => props.nopadding ? "0": "16px 16px 0"};
        width: calc(100vw - 32px);
        flex-direction: column;
    }
`

export const SectionTitle = styled.h2`
    font-size: ${(props) => props.main ? '56px' : '49px'};
    line-height: ${(props) => props.main ? '60px' : '50px'};
    width: max-content;
    max-width: 100%;
    background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  margin-bottom: 16px;
  padding: ${(props) => props.main ? '58px 0 16px' : '0'};
  @media ${props => props.theme.breakpoints.md}{
    font-size: ${(props) => props.main ? '49px' : '40px'};
    line-height: ${(props) => props.main ? '52px' : '42px'};
    margin-bottom: 12px;
    padding: ${(props) => props.main ? '40px 0 12px' : '0'};
  }
  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => props.main ? '26px' : '30px'};
    line-height: ${(props) => props.main ? '28px' : '34px'};
    margin-bottom: 8px;
    padding: ${(props) => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`

export const Button = styled.a`
  position: relative;
  padding: ${props => props.padding ? "19px 22px" : "5px"};
  cursor: pointer;
  margin-bottom: 20px;
  transition: all .2s ease;
  display: block;
  width: max-content;
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    display: block;
    border-radius: 28px;
    background: ${props => props.theme.colors.mainColor};
    opacity: .5;
    width: 56px;
    height: 56px; 
    transition: all .3s ease;
  }
  span {
    position: relative;
    font-size: 17px;
    font-weight: 900;
    letter-spacing: .18em;
    text-transform: ${props => props.upperText ? "uppercase" : "none"};
    vertical-align: middle;
  }
  svg {
    position: relative;
    top: 5px;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
    transform: translateX(-10px);
    transition: all .3s ease;
    }
  &:hover {
    &:before {
      width: 100%;
      background: ${props => props.theme.colors.mainColor};
      opacity: 1;
    }
    span {
      color: ${props => props.theme.backgrounds.mainBackground}
    }
    svg {
      transform: translateX(0);
      stroke:  ${props => props.theme.backgrounds.mainBackground};
    } 
  }

  &:active {
    scale: .96
  }
 
`