import React,{useContext, useState} from 'react'
import '../App1.css';
import FontContext from '../context/FontContext';


export default function Border(props) {
  const [font_family, setfont_family] = useState("cursive");
  const [font_color, setfont_color] = useState("green");
  console.log(font_family)

  const handleFontFamily =(e)=>{
    setfont_family(e.target.value)
  }
  const handleFontColor =(e)=>{
  setfont_color(e.target.value)
  }
  return (
    <> <FontContext.Provider value={{font_family,setfont_family,setfont_color,font_color}} >
        <div id="header" ></div>
            <div className="left"></div>
            <div id="content"  style={{fontFamily:font_family, color:font_color}}  className="stuff">
            <br/>
            <label htmlFor="Font-Family">Font-Family : </label>
            <input type="Font-Family" style={{margin:"5px"}} name="Font-Family" onChange={handleFontFamily} />
            <br />
            <label htmlFor="Font-Family">Font-Color : </label>
            <input type="Font-Family" name="Font-Family" style={{margin:"5px"}} onChange={handleFontColor} />
            {props.children}
            </div>
            <div className="right"></div>
            <div id="footer">
            <h2 id="name">Sourav</h2></div>
          </FontContext.Provider>
    </>
  )
}
