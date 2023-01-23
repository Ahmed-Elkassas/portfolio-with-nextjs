import { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

import Head from 'next/head';
import Theme from 'styles/theme';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 1000
    });
  }, []);

  return (
    <>
     <Head>
        <link rel="shortcut icon" href="/fav.ico" />
        <title>Ahmed Elkassas</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 