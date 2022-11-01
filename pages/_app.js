import LoadingScreen from 'components/helpers/LoadingScreen';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Theme from 'styles/theme';

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
     <Head>
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
 