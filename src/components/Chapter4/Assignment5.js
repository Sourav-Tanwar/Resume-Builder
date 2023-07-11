import React from 'react'
import Assignment6 from './Assignment6'

export default function Assignment5({onClick}) {
  // console.log("Assignment 5")
  const HandleOnclick =()=>{
    onClick()
  }
  return (
    <div onClick={()=>console.log("Assignment 5")}>
        <h2>Assignment5</h2>
        <button onClick={HandleOnclick} >Click to See prop function</button>
        <Assignment6></Assignment6>
    </div>
  )
}
