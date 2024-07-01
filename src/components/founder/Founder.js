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
                <div className={founderStyles.founder}>
                    <img className={founderStyles.founder} src={founder} alt='founder'/>
                    <h1>Aishwarya Magdum</h1>
                </div>
                <div className={founderStyles.content}>
                    <ul>
                        <li>Top Finalist, Miss Queen of India, 2024</li>
                        <li>Miss Queen South, 2024</li>
                        <li>Miss Queen Karnataka, 2023</li>
                        <li>Miss Karnataka, 2022</li>                  
                    </ul>
                    <button className={founderStyles.readmore} onClick={() => navigate('/mentor')}>Read More</button>
                </div>
            </div>
        </div>
    )
}

export default Founder