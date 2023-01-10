import Layout from "components/layout/Layout";
import Hero from "components/hero/Hero";
import BackgroundAnimation from "components/hero/BackgroundAnimation";

import { Section } from "styles/global";
import  Works  from "components/works/Works";
import About from "components/about/About";
import Contact from "components/contact/Contact";
import NewCourses from "components/courses/NewCourses";

const Home = () => {
  return (
    <Layout>
      <Section grid>
          <Hero />
          <BackgroundAnimation />
      </Section>
      <About />
      <Works />
      <NewCourses />
      <Contact />
    </Layout>
  );
};

export default Home;
