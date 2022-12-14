import { motion } from "framer-motion";

import { AiOutlineFolder } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import { GridContainer, GridItem, Title, MainSection } from "styles/global";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  ImgContainer,
} from "./workStyles";

import { projects } from "public/data/constants";
import { ShowMoreButton } from "components/helpers/ShowMoreButton";
import Image from "next/image";

const projectVariants = {
  offscreen: {
    x: -10,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      bounce: 0.4,
      duration: 0.7,
    },
  },
};

function CardItem({ item }) {
  return (
    <GridItem
      as={motion.li}
      variants={projectVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <Card>
        <header style={{ width: "100%" }}>
          <CardHeader>
            <div className="project__folder">
              <AiOutlineFolder size="4rem" />
            </div>
            {item.source ? (
              <div className="project__links">
                <a href={item.source}>
                  <FiExternalLink size="2rem" />
                </a>
              </div>
            ) : null}
          </CardHeader>
          <ImgContainer>
            <CardTitle>{item.title}</CardTitle>
            <img src={item.img} alt={item.title} />
          </ImgContainer>
          <ShowMoreButton textLimit="50">{item.description}</ShowMoreButton>
        </header>
        <CardFooter>
          {item.tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </CardFooter>
      </Card>
    </GridItem>
  );
}

const Works = () => {
  return (
    <MainSection padding={+true} id="work">
      <Title blue={+true} show={+true}>
        Work
      </Title>
      <GridContainer>
        {projects.map((item) => {
          return <CardItem key={item.id} item={item} />;
        })}
      </GridContainer>
    </MainSection>
  );
};

export default Works;
