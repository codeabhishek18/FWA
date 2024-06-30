import Footer from "../../components/footer/Footer"
import Founder from "../../components/founder/Founder"
import Herosection from "../../components/herosection/Herosection"
import Mission from "../../components/mission/Mission"
import Navbar from "../../components/navbar/Navbar"

const Home = () =>
{

    return(
        <div>
            <Navbar/>
            <Herosection/>
            <Founder/>
            <Mission/>
            <Footer/>
        </div>
    )
}

export default Home