import React from 'react'

export default function AddData({dispatch}) {

    const handleInterestsChange = (e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)
        dispatch({
            type: 'UPDATE_INTERESTS',
            data: final_data
        });
        // setInterests(final_data)
    };
    
    const handleSkillChange = (e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)
        dispatch({
            type: 'UPDATE_SKILLS',
            data: final_data
        });
        // setSkills(final_data)
       

    };
    
    const handleEducationChange = (e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)
        dispatch({
            type: 'UPDATE_EDUCATION',
            data: final_data
        });
        // setEducation(final_data)
    };
    const handleExtracurricularsChange = (e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)
        dispatch({
            type: 'UPDATE_EC_ITEMS',
            data: final_data
        });
        // setEC_items(final_data)
    
    };
    const handleSubmit = (e) => {
        e.preventDefault()
      };
  return (
    <>
    <div className='editInterests'>Update Resume</div>
    <form onSubmit={handleSubmit}>
        <div>
        <label >Update Interests: </label>
        <input type="text" onChange={handleInterestsChange}/>
        </div>
        <div>
        <label >Update Skills: </label>
        <input type="text" onChange={handleSkillChange}/>
        </div>
        <div>
        <label >Update Education: </label>
        <input type="text" onChange={handleEducationChange}/>
        </div>
        <div>
        <label >Update Extracurriculars: </label>
        <input type="text" onChange={handleExtracurricularsChange}/>
        </div>
    </form>
    </>
  )
}
