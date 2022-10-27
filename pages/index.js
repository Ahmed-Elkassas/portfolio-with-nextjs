import Layout from "components/layout/Layout";
import Hero from "components/hero/Hero";
import BackgroundAnimation from "components/hero/BackgroundAnimation";

import { Section } from "styles/global";
import  Works  from "components/works/Works";
import About from "components/about/About";

const Home = () => {
  return (
    <Layout>
      <Section grid>
          <Hero />
          <BackgroundAnimation />
      </Section>
      <About />
      <Works />
    </Layout>
  );
};

export default Home;
