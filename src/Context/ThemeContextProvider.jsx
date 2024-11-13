import React , {useState} from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeContextProvider({children}){
    const [themeMode,setThemeMode] = useState("light");
    return(
        <ThemeContext.Provider value={{themeMode,setThemeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}