import navbarStyles from './Navbar.module.css'
import cart from '../../assets/cart.png'
import crown from '../../assets/crown.png'
import Register from '../register/Register';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () =>
{
    const [ register, setRegister ] = useState(false);
    const navigate = useNavigate();

    return(
        <div className={navbarStyles.container}>
            <img className={navbarStyles.logo} src={crown} alt="logo"/>
            <div className={navbarStyles.navigation}>
                <span onClick={()=> navigate('/blogs')}>Blogs</span>
                <span onClick={()=> navigate('/announcements')}>Announcements</span>
                <span onClick={()=> navigate('/courses')}>Courses</span>
                <img className={navbarStyles.cart} src={cart} alt="cart" onClick={()=> navigate('/cart')}/>
                <button className={navbarStyles.register} onClick={()=> setRegister(true)}>Register</button>
            </div>
            {register && <Register setRegister={setRegister}/>}
        </div>
    )
}

export default Navbar;