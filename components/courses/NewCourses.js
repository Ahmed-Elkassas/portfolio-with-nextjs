import styled, { keyframes } from "styled-components";
import { MainSection, Title } from "styles/global";

const Div = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
`

const slide = keyframes`
    from {
    background-position-x: 0;
  }

  to {
    background-position-x: 113px;
  }
`;

const LoadingBar = styled.div`
  min-height: 2px;
  border-radius: 1px;
  width: calc(80px * 4);
  box-shadow: 3px 5px 5px -2px #2b394c;
  background-color: ${props => props.theme.backgrounds.mainBackground};
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 25px,
    #64ffda 25px,
    #64ffda 75px
  );
  animation: ${slide} 4s linear infinite;
  will-change: background-position;
  @media only screen and (max-width: 450px) {
      width: calc(80px * 3);
  }
  @media only screen and (max-width: 350px) {
      width: calc(80px * 2);
  }
`;

const NewCourses = () => {
  return (
    <MainSection padding={+true}>
        <Div>
          <Title green={+true}>What&apos;s new ?</Title>
          <LoadingBar />
        </Div>
    </MainSection>
  );
};

export default NewCourses;
