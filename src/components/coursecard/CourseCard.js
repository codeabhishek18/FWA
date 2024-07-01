import card from './CourseCard.module.css'

const CourseCard = ({title, image, price, striked}) =>
{

    return(
        <div className={card.container}>
            <p className={card.title}>{title}</p>
            <img src={image} alt='img'/>
            <p className={card.price}>₹ {price} <span className={card.striked}>{striked}</span></p>
            <div className={card.footerbuttons}>
                <button className={card.details}>Details</button>
                <button className={card.purchase}>Purchase now</button>
            </div>
        </div>
    )
}

export default CourseCard