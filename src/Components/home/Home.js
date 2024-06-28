import HImage from "./HImage";
import iconData from "../../iconData";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import Typewriter from "typewriter-effect";

import "./../CssFile/home.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
export default function Home() {
  const [iconDatas]=useState(iconData)
  return (
      <div className="home lg:mt-[10vh]">
      {/* <div class="home-content"> */}
           <HImage/>
           {/* <HContent iconDatas={iconDatas}/> */}
           <div className="home-content">
      <h3>Hello, It's Me</h3>
      <h1>Aman Kumar Yadav</h1>
      <h3>
        & I'm a &nbsp;
        <span id="name">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 100,
              strings: ["Developer.", "Programmer.", "Coder."],
            }}
          />
        </span>
      </h3>
      {/* <br/> */}
      <span>
        <p id="coding">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 170,
              strings: ["I ❤ Coding and Development."],
            }}
          />
        </p>
      </span>
      <div className="social-media">
        {iconDatas.map((iconData) => {
          return ( <a key={iconData.id}  href={iconData.link}> 
            <FontAwesomeIcon icon={iconData.iconName} />
            
            </a>);
        })}
      </div>
      {/* <Link to="/" className=" glowing-btn">
        Download <span className="glowing-txt">Cv</span> <FontAwesomeIcon icon={faDownload} />
      </Link> */}
      {/* <a className="glowing-btn">
        <span className="glowing-txt">Get</span>{" "}
      </a> */}
      
      <a href="https://raw.githubusercontent.com/Amanroy7632/Amanroy7632/b076c1ccf5ca8895ba44c2c57ebcfbd5f0e32419/AmanKrYadav-1.pdf" className="glowing-btn btn">
        <span className="glowing-txt">
          G<span className="faulty-letter">e</span>t CV<FontAwesomeIcon icon={faDownload} />&nbsp;
        </span>
      </a>
      {/* <FontAwesomeIcon icon={faDownload} /> */}
    </div>
        {/* </div> */}
      </div>
        
      
    
  )
}
