import React from 'react'

export default function Skill({skills}) {
  return (
    <>
    <div className='container'>
    <p className="head">Skills</p>
    <ul>{skills.map((data)=>{
          return <li key={data}>{data}</li>
        })
    }</ul>
     </div>
    </>
  )
} 
