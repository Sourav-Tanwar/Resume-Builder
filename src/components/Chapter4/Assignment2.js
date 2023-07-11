import React from 'react'

export default function Assignment2(e) {
    

    const HandleClick =(e)=>{
        e.preventDefault()
    }
  return (
    
    <div>
        <h2>Assignment2</h2>
        <form action="">
            <label htmlFor="fname">First name:</label><br/>
            <input type="text" id="fname" name="fname" /><br/>
            <label htmlFor="lname">Last name:</label><br/>
            <input type="text" id="lname" name="lname" /><br/>
            <input type="submit" value="Submit" onClick={HandleClick} />
        </form> 

    </div>
  )
}
