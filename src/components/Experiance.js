import React from 'react'




export default function Experiance({experience}) {
  // console.log(experience)
  const content = experience.map((exp) =>{
    let max =2;
    console.log(max, exp.id)
      if (exp.id<=max){
        return (<ul key={exp.id}>
          <li>Year : {exp.year}</li>
          <li>Company : {exp.company}</li>
          <li>Role : {exp.role}</li>
          <br />
        </ul>)
      }
  }
  );
  return (
    <>
    <p className="head">Experiance</p>
    {content}
 
    </>
  )
}
