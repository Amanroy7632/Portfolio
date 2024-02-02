import './CssFile/services.css';
import Scard from './Scard';
function Services({servicesDatas}){
    return (
        <section className="services" id="services">
        <h2 className="heading">Our <span>Services</span></h2>
        <div className="services-container">
            {
                servicesDatas.map((servicesData)=>{
                    return <Scard {...servicesData} key={servicesData.id}></Scard>;
                  })
            }   
        </div>
    </section>
    );
}export default Services;