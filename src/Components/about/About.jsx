import './../CssFile/about.css';
import profilePic from './../images/about_img.png';
import { useState } from 'react';
const string="I bring a wealth of experience and a passion for crafting robust, scalable, and innovative software. From intricate coding challenges to seamless user experiences, my commitment to excellence is evident in every line of code. Join me on a journey where technology meets precision, and together, let's build the future of digital innovation. Welcome to a world of unparalleled development expertise - welcome to my Portfolio.";
function About() {
    const[readMore,setReadmore]=useState(false);
    const description=readMore ? string:`${string.substring(0,200)}...`;
    function readMoreHandler(){
        document.querySelector(".about-img").classList.toggle("visible");
        document.querySelector(".readMore").classList.toggle("change-color");
        setReadmore(!readMore);
    }
    return (<div id="about" className='about'>
        <div className="about-img">
            <img src={profilePic} alt="profile pic" />
        </div>
        <div className="about-content">
            <h2 className="heading">About <span className='span-color'>Me</span></h2>
            <h3>Hello! Welcome to my <span>Portfolio</span>! Really happy to see you here.</h3>
            <p> {description}<span className='readMore' onClick={readMoreHandler}>{readMore?`show less`:`read more`}</span></p>

            {/* <a href="#" className="btn">Read More</a> */}
        </div>
    </div>);
}
export default About;