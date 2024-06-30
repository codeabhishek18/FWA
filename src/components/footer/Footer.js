import footerStyles from './Footer.module.css'
import logo from '../../assets/crown.png'
import call from '../../assets/call.png'
import ig from '../../assets/ig.png'
import mail from '../../assets/mail.png'

const Footer = () =>
{
    return(
        <div className={footerStyles.container}>
            <div className={footerStyles.header}>
                <img className={footerStyles.logo} src={logo} alt="logo"/>
                <h1>Flourish With Aish</h1>
            </div>
            <hr/>
            <div className={footerStyles.social}>
                <div className={footerStyles.row}>
                    <img src={ig} alt="instagram"/>
                    <a href='https://www.instagram.com/flourishwithaish?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>@flourishwithaish</a>
                </div>
                <div className={footerStyles.row}>
                    <img src={mail} alt="email"/>
                    <p>aishwarya@flourishwithaish.com</p>
                </div>
                <div className={footerStyles.row}>
                    <img src={call} alt="phone"/>
                    <p>+91 9148202335</p>
                </div>
            </div>
        </div>
    )
} 

export default Footer