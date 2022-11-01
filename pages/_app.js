import LoadingScreen from 'components/helpers/LoadingScreen';
import Head from 'next/head';
import Theme from 'styles/theme';

export default function App({ Component, pageProps }) {

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
 