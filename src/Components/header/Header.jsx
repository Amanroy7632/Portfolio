import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import "./../CssFile/header.css";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import data from "../../navbarData";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserTie } from "@fortawesome/free-solid-svg-icons";

import profileimage from "./../images/profile_1.png"
import ThemeButton from "../themeSwitch/ThemeButton";
function Header() {
//   const getId=90;
  // const [navDatas]=useState(data);
  const navDatas=data;
  const [isDarkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState(false);
  const menubarHandler = () => {
    const menuBar = document.querySelector(".menu-bar");
    if (active) {

      menuBar.classList.remove("active-menuBar");
    } else {
      menuBar.classList.add("active-menuBar");
    }
    setActive(!active);
  }
  const hideNavigationHandler = () => {
    setActive(false)
    menubarHandler();
  }
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    document.querySelector('html').classList.toggle("dark");
    document.body.classList.toggle("dark");

    // document.querySelector('.services-box').classList.toggle("add-border");
  }
  return (
    // <div className="header dark:bg-gray-950 backdrop-blur-xl z-50 flex">
    //   <div className="logo">

    //     <DarkModeSwitch className="darkmode-switch"
    //   style={{ marginLeft: '2rem' }}
    //   checked={isDarkMode}
    //   onChange={toggleDarkMode}
    // />
    // <a className="logo" href="/">
    //       <FontAwesomeIcon icon={faUserTie} id="men-icon"/>
    //     </a>
    //   </div>

    //   {/* <i class='bx bx-menu' id="menu-icon"></i> */}
    //   <div className="menu">
    //     <div
    //       className="hamburg-icon"
    //       onClick={(Event) => {
    //         Event.preventDefault();
    //         const hamburgIcon = document.querySelector(".hamburg-icon");
    //         const navBarIcon = document.querySelector(".navbar");
    //         hamburgIcon.classList.toggle("changeIcon");
    //         navBarIcon.classList.toggle("show-menu");
    //         document.getElementsByClassName("menubar");
    //         document.querySelector(".navbar").classList.toggle("dark-mode");
    //         // console.log("Hello Aman its works");

    //       }}
    //     >
    //       <span className=" bg-black dark:bg-white rounded-md"></span>
    //       <span className=" bg-black dark:bg-white rounded-md"></span>
    //       <span className=" bg-black dark:bg-white rounded-md"></span>
    //     </div>
    //     {/* <DarkModeSwitch className="darkmode-switch"
    //   style={{ marginLeft: '2rem' }}
    //   checked={isDarkMode}
    //   onChange={toggleDarkMode}
    //   // onClick={dark}
    //   // size={120}
    // /> */}
    //   </div>
    //   {/* <Link></Link> */}
    //   <nav className="navbar flex justify-between w-2/5 items-center dark:text-white">

    //   </nav>
    // </div>
    <>
    {/* block py-2 pr-4 pl-3 duration-200 text-indigo-700  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 dark:hover:text-indigo-700   */}
      <div className='  flex justify-center fixed items-center w-full h-[10vh] top-0  dark:bg-black dark:text-white border-b-2 border-[rgba(63,62,62,0.1)] z-50 backdrop-blur-lg '>
        <nav className=' flex justify-between w-4/5 items-center h-16 '>
          <div className=" flex w-1/6 max-md:w-1/3 justify-between gap-4 items-center">
            <div className=" w-2/3">
            <ThemeButton/>
            </div>
            <Link to={"/"} className='flex  items-center'>
              <img src={profileimage} alt="" className=" w-1/3 max-md:w-[50%] rounded-[50%]" />
            </Link>
          </div>
          <ul className='navbar-item hidden lg:flex justify-between w-1/3 gap-x-6 items-center text-2xl font-semibold transition duration-300'>
         
            {navDatas.map((navData) => {
              return <li key={navData.id} ><NavLink className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 text-2xl ${isActive
                  ? " text-cyan-400 border-[#0ef]"
                  : "text-gray-700 dark:text-white "
                } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
              } to={navData.href} hrefLang="#services" onClick={() => {

                // getId(navData.id);
              }} >{navData.name}</NavLink></li>;
            })}
          </ul>
          <div className='flex justify-center items-center'>
            {/* <NavLink to={"login"} className=' max-md:hidden lg:inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-xl mr-4 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 px-6 py-2 disabled:pointer-events-none disabled:opacity-50 text-white h-auto bg-indigo-600 hover:bg-indigo-700'>Sign Up</NavLink> */}
            <NavLink to={"contact"} className=' max-md:hidden lg:inline-flex items-center justify-center whitespace-nowrap rounded-3xl text-xl mr-4 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 px-6 py-2 disabled:pointer-events-none disabled:opacity-50 text-white h-auto bg-indigo-600 hover:bg-indigo-700' >Contact Us</NavLink>
            <div
              className="menu-bar flex justify-between flex-col cursor-pointer mr-4 lg:hidden"
              style={{
                height: "24px",
                width: "35px",
                transition: "all 0.3s ease-in-out",
              }}
              onClick={menubarHandler}
            >
              <span className=" bg-black dark:bg-white rounded-sm"></span>
              <span className=" bg-black dark:bg-white rounded-sm"></span>
              <span className=" bg-black dark:bg-white rounded-sm"></span>
            </div>
          </div>
        </nav>
      </div>
      {active ? <ul className='  navLinks lg:hidden flex flex-col fixed top-[9vh] w-full backdrop-blur-lg justify-between gap-x-6 items-center text-2xl font-semibold h-[50vh] transition duration-400' style={{ zIndex: "999" }}>
        {navDatas.map((navData) => {
          return <li onClick={hideNavigationHandler} ><NavLink className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${isActive
              ? " text-cyan-400 border-[#0ef]"
              : "text-gray-700 dark:text-white "
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
          } to={navData.href} hrefLang="#services" onClick={() => {
            // getId(navData.id);
          }} >{navData.name}</NavLink></li>;
        })}
        {/* <li><NavLink 
          to={"/"} 
          className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive
                        ? "text-indigo-700 "
                        : "text-gray-700 dark:text-white "
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 dark:hover:text-indigo-700  `
                  } onClick={hideNavigationHandler}> Home</NavLink></li>
          <li>
            <NavLink to={"courses"} smooth
            className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive
                ? "text-indigo-700 "
                : "text-gray-700 dark:text-white "
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 `
          } onClick={hideNavigationHandler}>Courses</NavLink>
          </li>
          <li>
            <NavLink to={"contact"} smooth
            className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive
                ? "text-indigo-700 "
                : "text-gray-700 dark:text-white "
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 `
          } onClick={hideNavigationHandler}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"article"}
            className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive
                ? "text-indigo-700 "
                : "text-gray-700 dark:text-white "
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 `
          } onClick={hideNavigationHandler}>Articles</NavLink>
          </li>
          <li>
            <NavLink to={"login"} onClick={hideNavigationHandler} className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive
                ? "text-indigo-700 "
                : "text-gray-700 dark:text-white "
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 `}>Sign Up</NavLink>
          </li> */}
           <li>
            <NavLink to={"contact"}
            className={({ isActive }) =>
            `block py-2 pr-4 pl-3 duration-200 ${
              isActive
                ? "text-cyan-400 "
                : "text-gray-700 dark:text-white "
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-indigo-700 lg:p-0 `
          } onClick={hideNavigationHandler}>Contact Us</NavLink>
          </li>
      </ul> : ""}
    </>
  );
}
export default Header;
