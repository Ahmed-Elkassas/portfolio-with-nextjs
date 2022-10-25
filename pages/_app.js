import '../styles/globals.css'
import Theme from '../Themes'

function MyApp({ Component, pageProps }) {
  return (
  <Theme>
    <Component {...pageProps} />
  </Theme>
  )
}

export default MyApp
