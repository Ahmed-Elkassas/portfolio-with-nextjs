import Aos from "aos";
import 'aos/dist/aos.cjs'

import { MdOutlineFileDownloadDone } from "react-icons/md";
import { BsHourglassSplit } from "react-icons/bs";
import { FaNodeJs, FaReact } from "react-icons/fa";

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


import { AiOutlineConsoleSql, AiOutlineDatabase } from "react-icons/ai";
import { Div } from "./newCourseStyle";
import { ProgressBar } from "components/helpers/ProgressBar";
import { courses } from "public/data/constants";

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
          <Item data-aos="fade-up">
            <FlexItem high={+true}>
              <MdOutlineFileDownloadDone size="3.5rem" />
              <Text>On progress</Text>
            </FlexItem>
            {courses.onPrgress.map(course => {
              return (
                <Div alignCenter={+true} gap="20px" key={course.id}>
                <FlexItem width="40%" ml="1.4rem">
                  {course.icon}
                  <CourseName href={course.link} target="_blank">{course.name}</CourseName>
                </FlexItem>
                <ProgressBar width={120} percent={course.percent} title={course.finished} color="#3F873F" />
              </Div>
              )
            })}
          </Item>
        </GridItem>
        <GridItem>
          <Item data-aos="fade-down">
            <FlexItem high={+true}>
              <BsHourglassSplit size="3.5rem" />
              <Text>Hold</Text>
            </FlexItem>
            {courses.hold.map(course => {
              return (
                <Div alignCenter={+true} gap="20px" key={course.id}>
                <FlexItem width="40%" ml="1.4rem">
                  {course.icon}
                  <CourseName href={course.link} target="_blank">{course.name}</CourseName>
                </FlexItem>
                <ProgressBar width={120} percent={course.percent} title={course.finished} color={course.color} />
              </Div>
              )
            })}
          </Item>
        </GridItem>
      </GridContainer>
    </MainSection>
  );
};

export default NewCourses;
