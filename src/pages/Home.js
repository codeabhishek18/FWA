import About from "../components/about/About"
import Herosection from "../components/herosection/Herosection"
import Navbar from "../components/navbar/Navbar"

const Home = () =>
{

    return(
        <div>
            <Navbar/>
            <Herosection/>
            <About/>
        </div>
    )
}

export default Home