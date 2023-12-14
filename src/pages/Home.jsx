import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Mobile from "../components/Mobile"
import Parallax from "../components/Parallax"
import Prices from "../components/Prices"
import Services from "../components/Services"

const Home = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <Parallax/>
        <Prices/>
        <Mobile/>
        <Contact/>
    </div>
  )
}

export default Home