import About from "../components/about/About"
import Founder from "../components/founder/Founder"
import Herosection from "../components/herosection/Herosection"
import Navbar from "../components/navbar/Navbar"

const Home = () =>
{

    return(
        <div>
            <Navbar/>
            <Herosection/>
            <Founder/>
        </div>
    )
}

export default Home