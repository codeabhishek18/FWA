import CourseCard from '../../components/coursecard/CourseCard'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import courses from './Courses.module.css'
import training from '../../assets/training.jpg'
import oneonone from '../../assets/oneonone.jpg'
import photoshoot from '../../assets/photoshoot.jpg'
import resources from '../../assets/resources.png'
import Header from '../../components/header/Header'

const Courses = () =>
{
    return(
        <div className={courses.container}>
            <Navbar/>
            <div className={courses.header}>
                <Header title='Services'/>
                <div className={courses.services}>
                    <CourseCard title='Basic Training Program' image={training} price='499' striked='999'/>
                    <CourseCard title='One-on-One Session' image={oneonone} price='2,499' striked='4,999'/>
                    <CourseCard title='Portfolio Shoots' image={photoshoot} price='1,999' striked='3,999'/>
                    <CourseCard title='Resources' image={resources} price='199' striked='399'/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Courses