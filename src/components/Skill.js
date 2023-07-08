import React from 'react'

export default function Skill({skills}) {
    // console.log(skills)
  return (
    <>
    <p className="head">Skills</p>
    {/* <h6><span>{skills.join(" ,")} </span></h6> */}
    <ul>{skills.map((data)=>{
          return <li key={data}>{data}</li>
        })
    }</ul>
     
    </>
  )
} 
