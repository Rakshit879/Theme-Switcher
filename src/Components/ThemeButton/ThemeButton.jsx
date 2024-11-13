import React , {useContext} from "react";
import "../ThemeButton/ThemeButton.css"
import ThemeContext from "../../Context/ThemeContext";


export default function ThemeButton() {
    const {themeMode,setThemeMode} = useContext(ThemeContext);
    const changeTheme = ()=>{
        if(themeMode==="light"){
            setThemeMode("dark");
        }
        else{
            setThemeMode("light");
        }
        console.log(themeMode);
    }
    return (
        <div className="themebuttonContainer">
            <label className="toggle-switch">
                <input type="checkbox" onChange={changeTheme}/>
                <span className="slider"></span>
            </label>
            <p className="togglepara">Toggle Theme</p>
        </div>
    )
}