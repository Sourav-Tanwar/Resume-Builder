import React from 'react'

export default function Education({education}) {
  return (
    <>
    <p className="head">Education</p>
    <ul>{education.map((data)=>{
          return <li  key={data} >{data}</li>
        })
    }</ul>
    </>

  )
}
