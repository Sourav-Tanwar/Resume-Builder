import React from 'react'

export default function Interests({interests}) {
    // console.log(interests)
  return (
    <>
    <p className="head">Interests</p>
    <ul>{interests.map((data)=>{
          return <li key={data}>{data}</li>
        })
    }</ul>
     
    </>
  )
}
