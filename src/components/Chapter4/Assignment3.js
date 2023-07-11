import React from 'react'

export default function Assignment3() {
    const HandleKeyPress =(e)=>{
        let keywordsStr = e.key;
        if (keywordsStr==="Enter"){
            alert("Enter Pressed")
        }
    }

  return (
    <div>
        <h2>Assignmen3</h2>
        <label htmlFor="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname"  onKeyPress={HandleKeyPress} /><br/>
    </div>
  )
}
