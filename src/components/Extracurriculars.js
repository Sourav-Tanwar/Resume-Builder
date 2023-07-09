import React from 'react'

export default function Extracurriculars(props) {
  
  return (
    <>
    <p className="head">Extracurriculars</p>
    <ol>{props.EC_items.map((data)=>{
            if (props.layout ==="numbered"){
          return <li type="1" key={data}>{data}</li>
            }
            else if (props.layout ==="alpha"){
                return <li type="a" key={data}>{data}</li>
            }
            else if (props.layout ==="bullet"){
                return <li type="disc" key={data}>{data}</li>
            }
            return ""
        })
        
    }</ol>
    
    </>
  )
}

