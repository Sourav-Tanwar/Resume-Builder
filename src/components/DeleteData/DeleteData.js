import React from 'react'

export default function AddData({setInterests,setSkills,setEC_items,setEducation}) {

    const handleInterestsChange = (e) => {
        setInterests([])
    };
    
    const handleSkillChange = (e) => {
        setSkills([])
    };
    const handleEducationChange = (e) => {
        setEducation([])
    };
    const handleExtracurricularsChange = (e) => {
        setEC_items([])
    
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
