import React,{createContext,useContext} from "react";
export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})
export const ThemeContextProvider=ThemeContext.Provider
export default function useTheme(){
   return useContext(ThemeContext)
}
