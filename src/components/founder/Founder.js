import founderStyles from './Founder.module.css'
import founder from '../../assets/founder.png'
import { useNavigate } from 'react-router-dom'

const Founder = () =>
{
    const navigate = useNavigate();

    return(
        <div className={founderStyles.container}>
            <h1>Founder & Mentor</h1>
            <div className={founderStyles.card}>
                <img className={founderStyles.founder} src={founder} alt='founder'/>
                <ul className={founderStyles.content}>
                    <li>Top Finalist, Miss Queen of India, 2024</li>
                    <li>Miss Queen South, 2024</li>
                    <li>Miss Queen Karnataka, 2023</li>
                    <li>Miss Karnataka, 2022</li>                  
                    <button className={founderStyles.readmore} onClick={() => navigate('/mentor')}>Read More</button>
                </ul>
            </div>
        </div>
    )
}

export default Founder