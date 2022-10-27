import Layout from "components/layout/Layout";
import Hero from "components/hero/Hero";
import BackgroundAnimation from "components/hero/BackgroundAnimation";

import { Section } from "styles/global";

const Home = () => {
  return (
    <Layout>
      <Section grid>
          <Hero />
          <BackgroundAnimation />
      </Section>
    </Layout>
  );
};

export default Home;
