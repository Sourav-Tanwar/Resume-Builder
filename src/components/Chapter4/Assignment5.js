import React from 'react'

export default function Assignment5({onClick}) {
  const HandleOnclick =()=>{
    onClick()
  }
  return (
    <div>
        <h2>Assignment5</h2>
        <button onClick={HandleOnclick} >Click to See prop function</button>
    </div>
  )
}
