import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import cart from './Cart.module.css'

const Cart = () =>
{

    return(
        <div>
            <Navbar/>
            <Header title='Checkout'/>
            <Footer/>
        </div>
    )
}

export default Cart