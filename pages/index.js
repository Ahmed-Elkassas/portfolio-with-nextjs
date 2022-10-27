import Layout from "components/layout/Layout";
import Hero from "components/hero/Hero";
import BackgroundAnimation from "components/hero/BackgroundAnimation";

import { Section } from "styles/global";
import  Works  from "components/works/Works";

const Home = () => {
  return (
    <Layout>
      <Section grid>
          <Hero />
          <BackgroundAnimation />
      </Section>
      <Works />
    </Layout>
  );
};

export default Home;
