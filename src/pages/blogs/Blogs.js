import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import blogs from './Blogs.module.css'

const Blogs = () =>
{

    return(
        <div className={blogs.container}>
            <Navbar/>
            <Header title='Blogs'/>
            <Footer/>
        </div>
    )
}

export default Blogs