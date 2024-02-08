import { Link } from "react-router-dom";
import {useState} from 'react';
import "./CssFile/header.css";
import {DarkModeSwitch} from 'react-toggle-dark-mode';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie} from "@fortawesome/free-solid-svg-icons";
function Header({ navDatas,getId }) {
  const [isDarkMode,setDarkMode]=useState(false);
  const toggleDarkMode =(checked)=>{
    setDarkMode(checked);
    document.body.classList.toggle("dark");
    // document.querySelector('.services-box').classList.toggle("add-border");
  }
  return (
    <div className="header">
      <div className="logo">
        
        <DarkModeSwitch className="darkmode-switch"
      style={{ marginLeft: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
    />
    <a className="logo" href="/">
          <FontAwesomeIcon icon={faUserTie} id="men-icon"/>
        </a>
      </div>

      {/* <i class='bx bx-menu' id="menu-icon"></i> */}
      <div className="menu">
        <div
          className="hamburg-icon"
          onClick={(Event) => {
            Event.preventDefault();
            const hamburgIcon = document.querySelector(".hamburg-icon");
            const navBarIcon = document.querySelector(".navbar");
            hamburgIcon.classList.toggle("changeIcon");
            navBarIcon.classList.toggle("show-menu");
            document.getElementsByClassName("menubar");
            document.querySelector(".navbar").classList.toggle("dark-mode");
            // console.log("Hello Aman its works");
            
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <DarkModeSwitch className="darkmode-switch"
      style={{ marginLeft: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      // onClick={dark}
      // size={120}
    /> */}
      </div>
      {/* <Link></Link> */}
      <nav className="navbar">
        {navDatas.map((navData) => {
          return <Link to={navData.href} key={navData.id} hrefLang="#services" onClick={() => {
            // document.querySelector()
            const hamburgIcon = document.querySelector(".hamburg-icon");
            const navBarIcon = document.querySelector(".navbar");
            hamburgIcon.classList.toggle("changeIcon");
            navBarIcon.classList.toggle("show-menu");
            // document.querySelector(".about-selected").classList.toggle("hide");
            getId(navData.id);
          }} >{navData.name}</Link>;
        })}
      </nav>
    </div>
  );
}
export default Header;
