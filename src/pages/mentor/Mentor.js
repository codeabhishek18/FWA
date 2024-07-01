import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import mentor from './Mentor.module.css'

const Mentor = () =>
{

    return(
        <div className={mentor.container}>
            <Navbar/>
            <Header title='Aishwarya, Mentor'/>
            <Footer/>
        </div>
    )
}

export default Mentor