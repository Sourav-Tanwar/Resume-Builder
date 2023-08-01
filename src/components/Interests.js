import React from 'react'
// import EditInterests from './EditForm/EditInterests'

export default function Interests({interests}) {

  // const [showform, setShowForm] = useState(false);
  // const [interests, setInterests] = useState(interests_data);
  
  // console.log(interests_data)  
  // console.log(interests)
  // const showForm = () => {
  //   // console.log(showform)
  //   setShowForm(!showform);
  // }
    // console.log(interests)

  // useEffect(()=>{
    // console.log("Re rendering Updated Interests")
    // console.log(interests)
    // setInterests(interests)
  // },[interests])
  return (
    <>
    <div className='container'>
    <p className="head">Interests</p>
    {/* <button className='edit' onClick={showForm} >{showform? "Save":"Edit"}</button>
    {showform ? <EditInterests setInterests={setInterests}/>: null} */}
    <ul>{interests.map((data)=>{
          return <li key={data}>{data}</li>
        })
    }</ul>
    </div>
    </>
  )
}
