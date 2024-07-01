import hamburger from './Hamburger.module.css'

const Hamburger = ({setSidebar}) =>
{

    return(
        <div className={hamburger.container} onClick={()=> setSidebar(true)}>
            <div className={hamburger.row}></div>
            <div className={hamburger.row}></div>
            <div className={hamburger.row}></div>
        </div>
    )
}

export default Hamburger