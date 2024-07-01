import mission from './Mission.module.css'
import performance from '../../assets/performance.jpg'
import photoshoot from '../../assets/photoshoot.jpg'
import grooming from '../../assets/grooming.jpg'
import wardrobe from '../../assets/wardrobe.jpg'

const Mission = () =>
{
    
    return(
        <div className={mission.container}>
            <h1>Mission</h1>
            <div className={mission.content}>
                <p>FWA stands for Flourish with Aish (Aishwarya). At FWA, we believe in the power of starting young. 
                    We understand that the key to success in the competitive world of pageantry and modeling is early and consistent training. 
                    Our mission is to provide high-quality, affordable skills and knowledge that helps aspiring models and pageant participants get a head start on their careers. 
                    We aim to cultivate talent, confidence, and success from an early age, setting the stage for a bright future.
                </p>
            </div>
            <div className={mission.services}>                
                <img src={grooming} alt='grooming'/>
                <img src={wardrobe} alt='wardrobe'/>
                <img src={photoshoot} alt='photoshoot'/>
                <img src={performance} alt='performance'/>
            </div>
        </div>
    )
}

export default Mission