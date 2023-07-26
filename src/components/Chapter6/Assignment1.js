import React, { useState } from 'react'

export default function Assignment1() {
    const [options, setOptions] = useState([])
    const [nation, setNation] = useState({name:"",value:""})


    const handleInput =(e)=>{
        setNation({...nation,
            [e.target.name] : e.target.value
        });
    }
    console.log(nation)
    console.log(options)


    const handleChange = (e) => {
        console.log(e.target.value);
      };

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(nation.name && nation.value ){
         setOptions([...options,nation])
         setNation({name:"",value:""})
        }   
    }

  return (
    <> 
    <div>DropDown</div>
    <select onChange={handleChange}>
        <option value="IN">--Select--</option>
        {options.map(op=><option value={op.value}>{op.name}</option>)}
      </select>
    <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="country">Country</label>
        <input type="text" placeholder="name" name="name" onChange={handleInput} value={nation.name}  />
    </div>
    <div>
        <label htmlFor="code">Code</label>
        <input type="text" placeholder="value" onChange={handleInput} name="value" value={nation.value}  />
    </div>
    <button >Add Nation</button>
    </form>

    

    </>
  )
}
