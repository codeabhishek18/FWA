import founderStyles from './Founder.module.css'
import founder from '../../assets/founder.png'

const Founder = () =>
{

    return(
        <div className={founderStyles.container}>
            <h1>Founder & Mentor</h1>
            <div className={founderStyles.card}>
                <img className={founderStyles.founder} src={founder} alt='founder'/>
                <ul className={founderStyles.content}>
                    <li>Miss Karnataka, 2022</li>
                    <li>Miss Queen Karnataka, 2023</li>
                    <li>Miss Queen South, 2024</li>
                    <li>Top Finalist, Miss Queen of India, 2024</li>
                    <button className={founderStyles.readmore}>Read More</button>
                </ul>
            </div>
        </div>
    )
}

export default Founder