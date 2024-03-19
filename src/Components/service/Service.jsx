import './../CssFile/services.css';
import Scard from './Scard';
// import Scard from '../Scard';
import servicesData from '../../servicesData';
function Service(){
    return (
        <section className="services" id="services">
        <h2 className="heading">Our <span className='span-color'>Services</span></h2>
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