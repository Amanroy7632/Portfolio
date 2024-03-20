import './../CssFile/services.css';
import Scard from './Scard';
// import Scard from '../Scard';
import servicesData from '../../servicesData';
function Service(){
    return (
        <section className="services px-3 py-2 mt-[10vh]" id="services">
        <h2 className="heading pt-5">Our <span className='span-color'>Services</span></h2>
        <div className="services-container">
            {
                servicesData.map((servicesData)=>{
                    return <Scard {...servicesData} key={servicesData.id}></Scard>;
                  })
            }   
        </div>
    </section>
    );
}export default Service;