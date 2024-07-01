import navbarStyles from './Navbar.module.css'
import cart from '../../assets/cart.png'
import crown from '../../assets/crown.png'
import Register from '../register/Register';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Hamburger from '../hamburger/Hamburger';
import Navigation from '../navigation/Navigation';

const Navbar = () =>
{
    const [ register, setRegister ] = useState(false);
    const [ sidebar, setSidebar ] = useState(false) 
    const navigate = useNavigate();

    return(
        <div className={navbarStyles.container}>
            <img className={navbarStyles.logo} src={crown} alt="logo" onClick={()=> navigate('/')}/>
            <Navigation setRegister={setRegister} sidebar={sidebar} setSidebar={setSidebar}/>
            <Hamburger setSidebar={setSidebar}/>
            {register && <Register setRegister={setRegister}/>}
        </div>
    )
}

export default Navbar;