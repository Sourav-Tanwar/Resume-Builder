import React,{useState} from 'react'

export default function AddData({dispatch,resume,interests,education,skills,EC_items}) {
    const [Interestsdata,setInterests]= useState(interests);
    const [Skillsdata,setSkills ]= useState(skills);
    const [Educationdata,setEducationdata ]= useState(education);
    const [EC_itemsdata,setEC_itemsdata ]= useState(EC_items);
    // console.log(interests)
    console.log(skills,Skillsdata)
    const handleInterestsChange = async(e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)
        
        await dispatch({
            type: 'ADD_INTERESTS',
            data: Interestsdata.concat(final_data)
          });
        // console.log(Interestsdata)
        // setInterests(Interestsdata.concat(final_data))
    };
    const handleSkillChange = async(e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)
        
        await dispatch({
            type: 'ADD_SKILLS',
            data: Skillsdata.concat(final_data)
        });
        // setSkills(Skillsdata.concat(final_data))

    };
    const handleEducationChange = (e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)
        dispatch({
            type: 'ADD_EDUCATION',
            data: Educationdata.concat(final_data)
        });
        // setEducation(Educationdata.concat(final_data))
    };
    const handleExtracurricularsChange = (e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)

        dispatch({
            type: 'ADD_EC_ITEMS',
            data: EC_itemsdata.concat(final_data)
        });
        // setEC_items(EC_itemsdata.concat(final_data))
    
    };
    const handleSubmit = (e) => {
        e.preventDefault()
      };
  return (
    <>
    <div className='editInterests'>Add Resume items</div>
    <form onSubmit={handleSubmit}>
        <div>
        <label >Add Interests: </label>
        <input type="text"  onChange={handleInterestsChange}/>
        </div>
        <div>
        <label >Add Skills: </label>
        <input type="text" onChange={handleSkillChange}/>
        </div>
        <div>
        <label >Add Education: </label>
        <input type="text" onChange={handleEducationChange}/>
        </div>
        <div>
        <label >Add Extracurriculars: </label>
        <input type="text" onChange={handleExtracurricularsChange}/>
        </div>
    </form>
    </>
  )
}
