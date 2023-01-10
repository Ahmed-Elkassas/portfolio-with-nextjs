import styled, { keyframes } from "styled-components";

export const Div = styled.div`
  display: flex;
  align-items: ${(props) => (props.alignCenter ? "center" : "baseline")};
  justify-content: ${(props) => props.flex};
  gap: ${(props) => props.gap};
`;

export const slide = keyframes`
    from {
    background-position-x: 0;
  }

  to {
    background-position-x: 113px;
  }
`;

export const LoadingBar = styled.div`
  min-height: 2px;
  border-radius: 1px;
  width: calc(80px * 4);
  box-shadow: 3px 5px 5px -2px #2b394c;
  background-color: ${(props) => props.theme.backgrounds.mainBackground};
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 25px,
    #64ffda 25px,
    #64ffda 75px
  );
  animation: ${slide} 4s linear infinite;
  will-change: background-position;
  @media only screen and (max-width: 570px) {
    width: 0px;
  }
`;

export const SubTitle = styled.h3`
  font-size: 26px;
  margin-bottom: 1.3rem;
`;

export const GridContainer = styled.ul` 
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
`;

export const GridItem = styled.li`
  &:hover {
  }
`;

export const Item = styled.div`
  border-style: solid;
  border-width: 2px 1.3px 2px 2px;
  border-color: #a3a3a3;
  transition: rgba(0, 0, 0, 0.1) 0.3s, border 0.3s, border-radius 0.3s,
    box-shadow 0.3s;
  padding: 40px 30px;
  min-height: 259px;
`;

export const FlexItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: ${props => props.flexWrap};
  gap: 2px 10px;
  margin-bottom: ${(props) => (props.high ? "3rem" : "2.3rem")};
  margin-left: ${(props) => props.ml};
  width: ${(props) => props.width};
`;

export const Text = styled.h4`
  font-size: 1.6rem;
`;

export const CourseItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2px 10px;
`;

export const CourseName = styled.a`
  font-size: 1.3rem;
  color: #fff;
`;
