import HImage from "./HImage";
import HContent from "./HContent"
export default function Home({iconDatas}) {
  return (
      <section className="home">
      {/* <div class="home-content"> */}
           <HImage/>
           <HContent iconDatas={iconDatas}/>
        {/* </div> */}
      </section>
        
      
    
  )
}
