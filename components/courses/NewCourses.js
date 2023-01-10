import { MainSection, Title } from "styles/global";
import {
  LoadingBar,
  SubTitle,
  GridContainer,
  GridItem,
  Item,
  FlexItem,
  Text,
  CourseItem,
  CourseName,
} from "./newCourseStyle";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { BsHourglassSplit } from "react-icons/bs";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { AiOutlineConsoleSql, AiOutlineDatabase } from "react-icons/ai";
import { Div } from "./newCourseStyle";
import { ProgressBar } from "components/helpers/ProgressBar";

const NewCourses = () => {
  return (
    <MainSection padding={+true}>
      <Div flex="flex-start">
        <Title green={+true}>What&apos;s new?</Title>
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
            <Div alignCenter={+true} gap="20px">
              <FlexItem width="40%" ml="1.4rem">
                <FaNodeJs size="2.9rem" />
                <CourseName>Nodejs</CourseName>
              </FlexItem>
              <ProgressBar width={120} percent="0.35" title="35% is Finished" color="#3F873F" />
            </Div>
            <Div alignCenter={+true} gap="20px">
              <FlexItem  width="40%" ml="1.4rem">
                <AiOutlineConsoleSql size="2.9rem" />
                <CourseName>SQL</CourseName>
              </FlexItem>
              <ProgressBar width={120} percent="0.55" title="55% is Finished" color="#61DAFB" />
            </Div>
          </Item>
        </GridItem>
        <GridItem>
          <Item>
            <FlexItem high={+true}>
              <BsHourglassSplit size="3.5rem" />
              <Text>Hold</Text>
            </FlexItem>
            <Div alignCenter={+true} gap="20px" flex="space-between">
            <FlexItem ml="1.4rem" >
              <AiOutlineDatabase size="3.5rem" />
              <CourseName>Datastracture & Algorithems</CourseName>
            </FlexItem>
            <ProgressBar width={120} percent="0.4" title="40% is Finished" />
            </Div>
            <Div alignCenter={+true} gap="20px" flex="space-between">
              <FlexItem ml="1.4rem">
                <FaReact size="2.9rem" />
                <CourseName>React Native</CourseName>
              </FlexItem>
              <ProgressBar width={120} percent="0.15" title="15% is Finished" />
            </Div>
          </Item>
        </GridItem>
      </GridContainer>
    </MainSection>
  );
};

export default NewCourses;
