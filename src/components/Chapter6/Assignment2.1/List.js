import React , {useState} from 'react';
import InputForm from './InputForm';
export default function List() {

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
    <div>List</div>
    <InputForm handleInput={handleInput} player={player} setPlayer={setPlayer} />

    </>
  )
}
