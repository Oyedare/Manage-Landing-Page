import About from '../components/About'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import  Header from '../components/Header'
import { Container } from '../components/styles/Container.styled'
import Testimonial from '../components/Testimonial'


export default function Home() {
  return (
      <>
        
        <Header />
        <About />
        <Testimonial />
        <CTA />
        <Footer />
        
      </>
  )
}
