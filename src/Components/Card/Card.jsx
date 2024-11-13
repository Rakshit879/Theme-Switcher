import React ,{useState,useContext, useEffect}from "react";
import "../Card/Card.css"
import ThemeContext from "../../Context/ThemeContext";

export default function Card(){
    const{themeMode} = useContext(ThemeContext);
    const [style,setStyle] = useState({});
    useEffect(()=>{
        if(themeMode=="light"){
            setStyle({backgroundColor:"#10194c",color:"white"})
        }
        else{
            setStyle({backgroundColor:"white",color:"black"})
        }
    },[themeMode])
    return(
        <div className="card_container" style={style}>
            <img src="https://images.unsplash.com/photo-1725714834412-7d7154ac4e4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className="card_image"/>
            <h1 className="card_heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptates.</h1>
            <div className="buynow">
                <h1 className="buynowhead">$699</h1>
                <button className="buynowbutton">Buy Now</button>
            </div>
        </div>
    )
} 