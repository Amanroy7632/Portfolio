import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Scard({iconName,headName,detail,btnData}){
    return (
        <div className="services-box border border-slate-500 dark:border-[rgba(255,255,255,0.10)]">
                <FontAwesomeIcon icon={iconName} className='scard-icon'/>
                <h3>{headName}</h3>
                <h4 >{btnData}</h4>
                <p>{detail}</p>
                {/* <a href="#" class="btn">Read More</a> */}
        </div>
    );
}
export default Scard;