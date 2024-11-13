import React,{useContext, useEffect, useState} from 'react'
import './App.css'
import Card from './Components/Card/Card'
import ThemeButton from './Components/ThemeButton/ThemeButton'
import ThemeContext from './Context/ThemeContext'

function App() {
  const {themeMode,setThemeMode} = useContext(ThemeContext);
  const [style,setStyle] = useState({});
  useEffect(()=>{
    if(themeMode=="light"){
      setStyle({backgroundColor:"white",color:"black"})
    }
    else{
      setStyle({backgroundColor:"#10194c",color:"white"}) 
    }
  },[themeMode])

  return (
    <div className='app_container' style={style}>
      <div className="main_content_container">
        <ThemeButton/>
        <Card/>
      </div>
    </div>
  )
}

export default App
