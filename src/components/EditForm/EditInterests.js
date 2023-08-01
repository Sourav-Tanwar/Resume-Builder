import React, { useState } from 'react'

export default function EditInterests({setInterests}) {

    // const [data, setData] = useState([])

    const handleChange = (e) => {
        let temp_data = e.target.value;
        
        // setData(e.target.value);
        // console.log(temp_data)
        setInterests(temp_data.split(/[ ,]+/))
    };
    // console.log(data)

  return (
    <>
    <div className='editInterests'>EditInterests</div>
    <form action="">
        <label >Interests</label>
        <input type="text" onChange={handleChange}/>
    </form>

    </>
  )
}
