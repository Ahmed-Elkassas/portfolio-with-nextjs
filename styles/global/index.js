import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  margin: auto 0;
  max-width: 1040px;
  position: relative;
  grid-template-columns: 1fr 1fr;
  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;
export const MainSection = styled.section`
  padding: ${(props) => (props.padding ? "100px 0px 0px" : "0px")};
`;
export const SectionTitle = styled.h2`
  font-size: ${(props) => (props.main ? "56px" : "49px")};
  line-height: ${(props) => (props.main ? "60px" : "50px")};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "49px" : "40px")};
    line-height: ${(props) => (props.main ? "52px" : "42px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "74px 0 12px" : "0")};
    transform: translateY(15px) translateZ(0px) !important;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "26px" : "30px")};
    line-height: ${(props) => (props.main ? "28px" : "34px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
    transform: translateY(0px) translateZ(0px) !important;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: ${(props) => props.theme.colors.text} ;
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
`;
export const GridContainer = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 50px 0px 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
`;
export const GridItem = styled.li`
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s,
    transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
  visibility: visible;
  opacity: 1;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);

  &:hover {
    transform: translateY(-7px);
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px 40px 40px 0px;
  font-size: 29px;
  font-weight: 900;
  z-index: 0;
  color: #b3ffae;
  &::before {
    content: "";
    position: absolute;
    bottom: 13.5%;
    transition: all 0.1s ease-in-out;
    z-index: -1;
    height: 0.3em;
    width:
      ${(props) =>
      props.blue
        ? "6.5%"
        : props.yellow
        ? "11.5%"
        : props.green
        ? "100%"
        : "9.4%"};
    background: ${(props) =>
      props.blue
      ? "linear-gradient(65deg, #2C49D8 0%, #2C49D8 100%, rgba(255, 209, 0, 0) 100%)"
      : props.yellow
      ? "linear-gradient(65deg, #FF6B2B 0%, #FF6B2B 100%, rgba(255, 209, 0, 0) 100%)"
      : props.green ? "linear-gradient(65deg, #05df7a 0%, #05df7a 100%, rgba(255, 209, 0, 0) 100%)"
      : "linear-gradient(65deg, #DF058D 0%, #DF058D 100%, rgba(255, 209, 0, 0) 100%)"};
}
  &::after {
    content: "";
    position: relative;
    top: 0px;
    left: 0;
    width:${(props) => props.show ? "300px" : '0'} ;
    height: 1px;
    display: block;
    background: #ccd6f6;
    margin-left: 15px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    display: inline-block;
    &::before {
      width: 104%;
      left: -1%;
    }
    &::after {
    width: 0;
  }
`;

export const Button = styled.a`
  position: relative;
  color: #fff;
  padding: ${(props) => (props.padding ? "19px 22px" : "5px")};
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.2s ease;
  display: block;
  width: max-content;
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 0;
    display: block;
    border-radius: 28px;
    background: ${(props) => props.theme.colors.mainColor};
    opacity: 0.5;
    width: 56px;
    height: 56px;
    transition: all 0.3s ease;
  }
  span {
    position: relative;
    font-size: 17px;
    font-weight: 900;
    letter-spacing: 0.18em;
    text-transform: ${(props) => (props.textupper ? "uppercase" : "none")};
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
    transition: all 0.3s ease;
  }
  &:hover {
    &:before {
      width: 100%;
      background: ${(props) => props.theme.colors.mainColor};
      opacity: 1;
    }
    span {
      color: ${(props) => props.theme.backgrounds.mainBackground};
    }
    svg {
      transform: translateX(0);
      stroke: ${(props) => props.theme.backgrounds.mainBackground};
    }
  }
  &:active {
    scale: 0.96;
  }
  @media ${props => props.theme.breakpoints.md}  {
    margin-top: 2rem;
  }
  @media ${props => props.theme.breakpoints.sm} {
    span {
      font-size: 12px;
    }
  }
`;

export const Paragraph = styled.p`
    width: 90%;
   padding: 1rem 2rem;
   margin: auto;
   font-size: 1.8rem;
   letter-spacing: 1.5px;
   line-height: 27px;
   color: ${(props) => props.theme.colors.text};
   span {
    font-weight: 300;
    color: #fff;
   }
   @media ${props => props.theme.breakpoints.sm} {
      width: 100%;
      padding: ${props => props.lowPadding ? "1rem 0.6rem" : "1rem 2rem"};
      font-size: ${props => props.lowFont ? "1.6rem" : "1.8rem "} ;
   }
`
export const BigParagraph = styled.p`
    width: 90%;
   padding: 1rem 2rem;
   margin: auto;
   font-size: 1.8rem;
   letter-spacing: 1.5px;
   line-height: 27px;
   color: #fff;
   span {
    font-weight: 300;
    color: #fff;
   }
   @media ${props => props.theme.breakpoints.sm} {
      width: 100%;
   }
`

export const CenteredTitle = styled.h2`
  text-align: center;
  font-size: 4rem;
  letter-spacing: .8px;
  margin: 3rem 0 2rem;
`

export const SubTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  width: max-content;
  margin-left: 5rem;
  h4 {
    font-size: 2rem;
  }
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 0;
    h4 {
      font-size: 18px;
    }
  }
`
export const ImgContainer = styled.div`
  margin: -20px 0 0;
  img {
    width: 582px;
    opacity: .2;
    max-width: 100%;
  }
`