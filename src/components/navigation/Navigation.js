import { useNavigate } from 'react-router-dom'
import navigation from './Navigation.module.css'

const Navigation = ({setRegister, sidebar, setSidebar}) =>
{
    const navigate = useNavigate();

    return(
        <div className={sidebar === true ? `${navigation.container} ${navigation.show}` : `${navigation.container} ${navigation.hide}`}>
            <span onClick={()=> navigate('/')}>Home</span>
            <span onClick={()=> navigate('/blogs')}>Blogs</span>
            <span onClick={()=> navigate('/announcements')}>Announcements</span>
            <span onClick={()=> navigate('/courses')}>Services</span>
            {/* <img className={navbarStyles.cart} src={cart} alt="cart" onClick={()=> navigate('/cart')}/> */}
            <button className={navigation.register} onClick={()=> setRegister(true)}>Register</button>
            <p className={navigation.close} onClick={()=> setSidebar(false)}>X</p>
        </div>
    )
}

export default Navigation