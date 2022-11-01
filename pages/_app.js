import LoadingScreen from 'components/helpers/LoadingScreen';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Theme from 'styles/theme';

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <>
     <Head>
        <link rel="shortcut icon" href="/fav.ico" />
        <title>Ahmed Elkassas</title>
      </Head>
      {loading ? (
        <LoadingScreen />
      ) :  (
      <Theme>
        <Component {...pageProps} />
      </Theme>
      )}
    </>
  );
}
 