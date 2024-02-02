// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter,faFacebook,faInstagram,faLinkedin, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
// import { useState } from 'react';
import { Link } from "react-router-dom";
import Icon from "./Icon";
import Typewriter from "typewriter-effect";
import "./CssFile/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HContent({ iconDatas }) {
  return (
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
          return <Icon {...iconData} key={iconData.id}></Icon>;
        })}
      </div>
      <Link to="/" className="btn">
        Download CV <FontAwesomeIcon icon={faDownload} />
      </Link>
    </div>
  );
}

export default HContent;
