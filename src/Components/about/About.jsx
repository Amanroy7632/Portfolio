import "./../CssFile/about.css";
import profilePic from "./../images/about_img.png";
import { useState } from "react";
import debugCertificateimg from "./certificate/debug.png"
const string =
  "I bring a wealth of experience and a passion for crafting robust, scalable, and innovative software. From intricate coding challenges to seamless user experiences, my commitment to excellence is evident in every line of code. Join me on a journey where technology meets precision, and together, let's build the future of digital innovation. Welcome to a world of unparalleled development expertise - welcome to my Portfolio.";
function About() {
  const [readMore, setReadmore] = useState(false);
  const description = readMore ? string : `${string.substring(0, 200)}...`;
  function readMoreHandler() {
    document.querySelector(".about-img").classList.toggle("visible");
    document.querySelector(".readMore").classList.toggle("change-color");
    setReadmore(!readMore);
  }
  return (
    <>
    <div
      id="about"
      className="about max-md:mt-[5vh] flex justify-evenly items-center flex-nowrap w-[100vw] mt-[12vh] gap-[2rem] transition-all duration-200"
    >
      <div className="about-img w-[40%] max-sm:w-[80%]">
        <img src={profilePic} alt="profile pic" />
      </div>
      <div className="about-content transition-all duration-200 w-full">
        <h2 className="heading font-semibold">
          About <span className="span-color">Me</span>
        </h2>
        <h3>
          Hello! Welcome to my <span>Portfolio</span>! Really happy to see you
          here.
        </h3>
        <p>
          {" "}
          {description}
          <span className="readMore" onClick={readMoreHandler}>
            {readMore ? `show less` : `read more`}
          </span>
        </p>

        {/* <a href="#" className="btn">Read More</a> */}
      </div>
    </div>
    <div className="projects-container">
    <h1 className='heading mb-10 font-semibold'><span className='span-color'>My </span>Acheivemnts</h1>
    <div className="projects">
      
        <div className="project dark:bg-[#323946]">
          {/* <img src={require(`${project.image}`).default}  alt={project.title} /> */}
         <img src={debugCertificateimg}  alt="debug certificate image" /> 
          <div className="project-info">
            <h2 className='title'>I got 1 <sup>st</sup> prize in debugging contest which is organised by ACES </h2>
            <p>Date: 21 Sept ,2023</p>
          </div>
        </div>
    </div>
  </div>
    </>
  );
}
export default About;
