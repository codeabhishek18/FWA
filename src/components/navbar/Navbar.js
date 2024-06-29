import navbarStyles from './Navbar.module.css'
import cart from '../../assets/cart.png'
import crown from '../../assets/crown.jpg'
import Register from '../register/Register';
import {useState} from 'react'

const Navbar = () =>
{
    const [ register, setRegister ] = useState(false);

    return(
        <div className={navbarStyles.container}>
            <div className={navbarStyles.logo}>
                <img className={navbarStyles.crown} src={crown} alt='crown'/>
                <span className={navbarStyles.title}>FWA</span>
            </div>
            <div className={navbarStyles.navigation}>
                <span>Courses</span>
                <img className={navbarStyles.cart} src={cart} alt="cart"/>
                <button className={navbarStyles.register} onClick={()=> setRegister(true)}>Register</button>
            </div>
            {register && <Register setRegister={setRegister}/>}
        </div>
    )
}

export default Navbar;