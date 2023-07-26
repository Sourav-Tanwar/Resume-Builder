import React, {useState} from 'react'

export default function Assignment2() {
    let Cricketer =['Rohit Sharma', "Virat Kohli","Suresh Raina", "Yuvraj Singh", "Gautam Gambhir","Virendar Shewag","Umesh Yadav"
    ,"Ishan Kishan","Subhman Gill","Ravinder Jadeja","Sachin","Jaspreet Bumrah","Ishant Sharma", "MS Dhoni"]

    const [player, setPlayer] = useState(Cricketer)
    // console.log(player)

    const handleInput =(e)=> {
        let search = e.target.value
        console.log(search)
        let temp = []
        for (let a in Cricketer) {
            // console.log(player[a])
            if ((Cricketer[a].toLowerCase()).includes(search.toLowerCase())){
                temp.push(Cricketer[a])
            }
          }
        console.log(temp)
        setPlayer(temp)
        temp =[]
    }
  return (
    <>
    <div>Filter List</div>

    <label htmlFor="player">Enter Name</label>
    <input type="text" placeholder="name" name="player" onChange={handleInput}   />


    <p className="head">Cricketer</p>
    <ul>{player.map((data)=>{
          return <li  key={data} >{data}</li>
        })
    }</ul>
    

    </>
  )
}
