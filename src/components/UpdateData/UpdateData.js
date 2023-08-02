import React,{useState} from 'react'

export default function AddData({interests,skills,education,EC_items ,setInterests,setSkills,setEC_items,setEducation}) {
    const [Interestsdata, setInterestsData] = useState(interests)
    const [Skillsdata, setSkillsData] = useState(skills)
    const [Educationdata, setEducationData] = useState(education)
    const [EC_itemsdata, setEC_itemsData] = useState(EC_items)

    const handleInterestsChange = (e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)
        console.log(final_data)
        setInterests(final_data)
    };
    
    const handleSkillChange = (e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)
        
        setSkills(final_data)
       

    };
    const handleEducationChange = (e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)
        setEducation(final_data)
    };
    const handleExtracurricularsChange = (e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)
        setEC_items(final_data)
    
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