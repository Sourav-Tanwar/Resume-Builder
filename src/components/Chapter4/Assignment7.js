import React from 'react'

export default function Assignment7({onClose}) {
    const handleClose =()=>{
        console.log("closing window")
        onClose()
    }
  return (
    <div>
        <h2>Assignment7</h2>
        <button onClick={handleClose} >Close window</button>
    </div>
  )
}
