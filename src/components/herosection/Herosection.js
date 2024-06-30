import herosection from './Herosection.module.css'
import hero from '../../assets/heroimage.png'
import { useNavigate } from 'react-router-dom'

const Herosection = () =>
{
    const navigate = useNavigate()

    return(
        <div className={herosection.container}> 
            <div className={herosection.content}>
                <p>Train Today, </p>
                <p>Triumph Tomorrow</p>
                <span>We believe that the seeds of success are sown through diligent training and preparation. 
                      The motto encapsulates our philosophy that the skills developed today will lead to the triumphs of tomorrow.
                </span>
                <button className={herosection.explore} onClick={() => navigate('/courses') }>Explore now</button>
            </div>
            <div className={herosection.heroimage}>
                <img src={hero} alt="img"/>
            </div>
        </div>
    )
}

export default Herosection