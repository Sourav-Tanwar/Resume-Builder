import React,{useState} from 'react'

export default function AddData({interests,skills,education,EC_items ,setInterests,setSkills,setEC_items,setEducation}) {
    const [Interestsdata, setInterestsData] = useState(interests)
    const [Skillsdata, setSkillsData] = useState(interests)
    const [Educationdata, setEducationData] = useState(interests)
    const [EC_itemsdata, setEC_itemsData] = useState(interests)
    const handleInterestsChange = (e) => {
        let temp_data = e.target.value;
        let final_data = temp_data.split(/[ ,]+/)
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
    <div className='editInterests'>Edit Resume</div>
    <form onSubmit={handleSubmit}>
        <div>
        <label >Interests: </label>
        <input type="text" onChange={handleInterestsChange}/>
        </div>
        <div>
        <label >Skills: </label>
        <input type="text" onChange={handleSkillChange}/>
        </div>
        <div>
        <label >Education: </label>
        <input type="text" onChange={handleEducationChange}/>
        </div>
        <div>
        <label >Extracurriculars: </label>
        <input type="text" onChange={handleExtracurricularsChange}/>
        </div>
    </form>
    </>
  )
}
