import React from 'react'

export default function inputForm({handleInput,player}) {
  return (
    <>
    <div>inputForm</div>
    <div>Filter List</div>

    <label htmlFor="player">Enter Name</label>
    <input type="text" placeholder="name" name="player" onChange={handleInput} />


    <p className="head">Cricketer</p>   
    <ul>{player.map((data)=>{
          return <li  key={data} >{data}</li>
        })
    }</ul>

    </>
  )
}
