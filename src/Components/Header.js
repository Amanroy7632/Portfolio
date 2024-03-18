import { NavLink } from "react-router-dom";
import {useState} from 'react';
import "./CssFile/header.css";
import {DarkModeSwitch} from 'react-toggle-dark-mode';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie} from "@fortawesome/free-solid-svg-icons";
function Header({ navDatas,getId }) {
  const [isDarkMode,setDarkMode]=useState(false);
  const toggleDarkMode =(checked)=>{
    setDarkMode(checked);
    document.querySelector('html').classList.toggle("dark");
    document.body.classList.toggle("dark");
    
    // document.querySelector('.services-box').classList.toggle("add-border");
  }
  return (
    <div className="header dark:bg-gray-950 backdrop-blur-xl">
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
          <span className=" bg-black dark:bg-white rounded-md"></span>
          <span className=" bg-black dark:bg-white rounded-md"></span>
          <span className=" bg-black dark:bg-white rounded-md"></span>
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
      <nav className="navbar flex justify-between w-2/5 items-center dark:text-white">
        {navDatas.map((navData) => {
          return <NavLink  className={({ isActive }) =>
          `block py-2 pr-4 pl-3 duration-200 ${
            isActive
              ? " text-cyan-400"
              : "text-gray-700 dark:text-white "
          } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
        }  to={navData.href} key={navData.id} hrefLang="#services" onClick={() => {
            // document.querySelector()
            const hamburgIcon = document.querySelector(".hamburg-icon");
            const navBarIcon = document.querySelector(".navbar");
            hamburgIcon.classList.toggle("changeIcon");
            navBarIcon.classList.toggle("show-menu");
            // document.querySelector(".about-selected").classList.toggle("hide");
            getId(navData.id);
          }} >{navData.name}</NavLink>;
        })}
      </nav>
    </div>
  );
}
export default Header;
