import React from 'react'

export default function AddData({dispatch,setInterests,setSkills,setEC_items,setEducation,interests,education,skills,EC_items}) {

    const handleInterestsChange = (e) => {
        dispatch({
            type: 'DELETE_INTERESTS',
            data: []
          });
        // setInterests([])
    };
    
    const handleSkillChange = (e) => {
        dispatch({
            type: 'DELETE_SKILLS',
            data: []
          });
        // setSkills([])
    };
    const handleEducationChange = (e) => {
        dispatch({
            type: 'DELETE_EDUCATION',
            data: []
          });
        // setEducation([])
    };
    const handleExtracurricularsChange = (e) => {
        dispatch({
            type: 'DELETE_EC_ITEMS',
            data: []
          });
        // setEC_items([])
    
    };
    const handleSubmit = (e) => {
        e.preventDefault()
      };
  return (
    <>
    <div className='editInterests'>Delete Resume</div>
    <form onSubmit={handleSubmit}>
        <div>
        <button  onClick={handleInterestsChange}>Delete Interests</button>
        </div>
        <div>
        <button  onClick={handleSkillChange}>Delete Skills</button>
        </div>
        <div>
        <button  onClick={handleEducationChange}>Delete Education</button>
        </div>
        <div>
        <button  onClick={handleExtracurricularsChange}>Delete Extracurriculars</button>
        </div>
    </form>
    </>
  )
}
