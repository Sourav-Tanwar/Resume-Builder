import React,{useContext} from 'react'
import FontContext from '../context/FontContext'

export default function Education({education}) {
  const theme = useContext(FontContext)
  const handleClick =()=>{
    theme.setfont_family("italic")
  }
  return (
    <>
    <hr />
    <p className="head">Education</p>
    <button onClick={handleClick}>Change to Italic</button>
    <p>{theme.font_family}</p>
    <ul>{education.map((data)=>{
          return <li  key={data} >{data}</li>
        })
    }</ul>
    </>

  )
}
