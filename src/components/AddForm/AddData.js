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
        setInterests(Interestsdata.concat(final_data))
    };
    
    const handleSkillChange = (e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)
        setSkills(Skillsdata.concat(final_data))

    };
    const handleEducationChange = (e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)
        setEducation(Educationdata.concat(final_data))
    };
    const handleExtracurricularsChange = (e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)
        setEC_items(EC_itemsdata.concat(final_data))
    
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
        <input type="text" onChange={handleInterestsChange}/>
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
