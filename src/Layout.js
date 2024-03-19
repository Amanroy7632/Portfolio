import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
// import Header from './components/header/Header'
// import Header from './Components/Header'
import Header from './Components/header/Header';
import { ThemeContextProvider } from './context/theme'
function Layout() {
    const [themeMode,setThemeMode]=useState("dark");
    const lightTheme=()=>{
        setThemeMode("light");
    }
    const darkTheme=()=>{
        setThemeMode("dark");
    }
    useEffect(()=>{
        document.querySelector('html').classList.remove("light","dark");
        document.querySelector('body').classList.remove("dark","light")
        document.querySelector('html').classList.add(themeMode);
        document.querySelector('body').classList.add(themeMode)
    },[themeMode])
  return (
    <ThemeContextProvider value={{themeMode,lightTheme,darkTheme}}>
    <Header/>
    <Outlet/>
    {/* <Footer/> */}
    </ThemeContextProvider>
  )
}

export default Layout

