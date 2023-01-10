import { MainSection, Title } from "styles/global";
import { LoadingBar, SubTitle, GridContainer, GridItem, Item, FlexItem, Text, CourseItem, CourseName} from './newCourseStyle'
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { BsHourglassSplit } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { AiOutlineConsoleSql, AiOutlineDatabase } from "react-icons/ai";
import { Div } from "./newCourseStyle";


const NewCourses = () => {
  return (
    <MainSection padding={+true}>
      <Div>
        <Title green={+true}>What&apos;s new ?</Title>
        <LoadingBar />
      </Div>
      <SubTitle>Courses</SubTitle>
      <GridContainer>
        <GridItem>
          <Item>
            <FlexItem high={+true}>
              <MdOutlineFileDownloadDone size="3.5rem" />
              <Text>On progress</Text>
            </FlexItem>
            <FlexItem>
              <FaNodeJs size="2.9rem" />
              <CourseName>Nodejs</CourseName>
            </FlexItem>
            <FlexItem>
              <AiOutlineConsoleSql size="2.9rem" />
              <CourseName>SQL</CourseName>
            </FlexItem>
          </Item>
        </GridItem>
        <GridItem>
          <Item>
            <FlexItem high={+true}>
              <BsHourglassSplit size="3.5rem" />
              <Text>Hold</Text>
            </FlexItem>
            <FlexItem>
              <AiOutlineDatabase  size="3.5rem"/>
              <CourseName>Datastracture & Algorithems</CourseName>
            </FlexItem>
          </Item>
        </GridItem>
      </GridContainer>
    </MainSection>
  );
};

export default NewCourses;
