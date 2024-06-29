import registerStyles from './Register.module.css'

const Register = ({setRegister}) =>
{

    return(
        <div className={registerStyles.container}>
            <div className={registerStyles.form}>
                <h1>Register Now!</h1>
                <input name="firstname" placeholder="Enter your first name"/>
                <input name="lastname" placeholder="Enter your last name"/>
                <input name="dob" placeholder="DOB (dd/mm/yy)"/>
                <input name="place" placeholder="Place"/>
                <button className={registerStyles.register}>Register</button>
                <span className={registerStyles.close} onClick={()=> setRegister(false)}>X</span>
            </div>
        </div>
    )
}

export default Register