import Header from '../header/Header';
import Footer from '../footer/Footer'

import { Container } from './LayoutStyles';

export const Layout = ({children}) => {
  return (
    <Container>
     <Header />
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}

export default Layout