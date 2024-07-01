import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import announcements from './Announcements.module.css'

const Announcements = () =>
{

    return(
        <div className={announcements.container}>
            <Navbar/>
            <Header title='Announcements'/>
            <Footer/>
        </div>
    )
}

export default Announcements