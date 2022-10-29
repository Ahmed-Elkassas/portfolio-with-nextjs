import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

    render() {
        return (
          <Html lang='en-GB'>
            <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
              <link href="https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles:wght@400;700&display=swap" rel="stylesheet" />
              <link rel="mask-icon" type="image/x-icon" href="/logo.svg" />
              <title>Ahmed Elkassas</title>
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        );
      }

}