import './App1.css';
import React, {useState, useEffect, useReducer} from 'react';
import Skill from './components/Skill';
import Education from './components/Education';
import Experiance from './components/Experiance';
import Interests from './components/Interests';
import Border from './components/Border';
import Extracurriculars from './components/Extracurriculars';
import Assignment1 from './components/Chapter4/Assignment1';
import Assignment2 from './components/Chapter4/Assignment2';
import Assignment3 from './components/Chapter4/Assignment3';
import Assignment5 from './components/Chapter4/Assignment5';
import Assignment7 from './components/Chapter4/Assignment7';
import Assignment1C5 from './components/Chapter5/Assignment1';
import Assignment2C5 from './components/Chapter5/Assignment2';
import StopWatch from './components/Chapter5/Asignment2/StopWatch';
import Assignment1C6 from'./components/Chapter6/Assignment1';
import Assignment2C6 from'./components/Chapter6/Assignment2';
import List from './components/Chapter6/Assignment2.1/List';
import AddData from './components/AddForm/AddData';
import UpdateData from './components/UpdateData/UpdateData';
import DeleteData from './components/DeleteData/DeleteData';






let resume = {
  interests: ["React","Mongo DB", "Node JS" ,"Express"],
  experience : [ {id:0, year:2021, company:'Accenture', role:'Software Tester' },
  {id:1, year:2020, company:'Cognizant', role:'Salesforce' },
  {id:2, year:2022, company:'MindTree', role:'React' },
  {id:3, year:2023, company:'Coforge', role:'Mongo DB' }],
  education:["12th 77%","10th 76%","BTech 73%" ],
  skills : [ 'react js', 'node js'],
  EC_items :["Cricket","Chess","Mobile Games"]
  }


  const  nations  = [
    { name:  'India', value:  'IN' },
    { name:  'Pak', value:  'PK' },
    { name:  'Bangladesh', value:  'BG' },
  ] 

function App() {
  let interests =resume.interests;
  let skills = resume.skills;
  let education = resume.education;
  let EC_items = resume.EC_items;
  // const [Add_interests, dispatch] =useReducer(Add_Reducer,resume.interests)
  const reducer =(state, action)=>{
    switch(action.type){
      case "ADD_INTERESTS":
        interests = action.data
        return interests 
      case "ADD_SKILLS":
        skills = action.data
        return skills

      case "ADD_EDUCATION":
        education = action.data
        return education

      case "ADD_EC_ITEMS":
        EC_items = action.data
        return EC_items
      
        case "UPDATE_INTERESTS":
          interests = action.data
          return interests 
        case "UPDATE_SKILLS":
          skills = action.data
          return skills
  
        case "UPDATE_EDUCATION":
          education = action.data
          return education
  
        case "UPDATE_EC_ITEMS":
          EC_items = action.data
          return EC_items
    }
  }

  const [state, dispatch] = useReducer(reducer,[])
 


  const [showAddform, setShowAddForm] = useState(false); 
  const [showUpdateform, setshowUpdateForm] = useState(false); 
  const [showDeleteform, setshowDeleteForm] = useState(false); 
  // const [interests, setInterests] = useState(resume.interests);
  // const [skills, setSkills] = useState(resume.skills);
  // const [education, setEducation] = useState(resume.education);
  // const [EC_items, setEC_items] = useState(resume.EC_items);
  
  useEffect(()=>{
    // console.log(interests)
    // setInterests(skills)
  },[skills,interests,education,EC_items])

  const showAddForm = () => {
    if(showUpdateform ){
      setshowUpdateForm(!showUpdateform);
    }
    if(showDeleteform){
      setshowDeleteForm(!showDeleteform);
    }
    setShowAddForm(!showAddform);
  }
  const showUpdateForm = () => {
    if(showAddform ){
      setShowAddForm(!showAddform);
    }
    if(showDeleteform){
      setshowDeleteForm(!showDeleteform);
    }
    setshowUpdateForm(!showUpdateform);
  }

  const showDeleteForm = () => {
    if(showAddform){
      setShowAddForm(!showAddform);
    }
    if(showUpdateform){
      setshowUpdateForm(!showUpdateform);
    }
    setshowDeleteForm(!showDeleteform);
  }


  const [mode, setMode] = useState("Dark")
  // let mode ="Dark";
  const handleDarkMode= (mode)=>{
    console.log(mode)
    let current_class= document.getElementById('content').className
    //  console.log(document.getElementById('content').className)
    if (current_class==="stuff"){
      document.getElementById('content').className = 'dark-mode';
      // mode = "Light"
      setMode("Light")
      console.log(mode)
    }
    else{
      document.getElementById('content').className = 'stuff';
      // mode = "Dark"
      setMode("Dark")
      console.log(mode)
    }
   }

  const handleSubmit = (e) => {
    e.preventDefault()
    // take data to submit
  };
   
   const handlePrint =()=>{
      window.print()
   }
  return (
    <>
    <div  >    {/*  onClick={()=>console.log("App")} */}
    

    

    {/* <List/> */}
    {/* <Assignment2C6></Assignment2C6> */}
    {/* <Assignment1C6 nations={nations}/> */}
    {/* <Assignment2C5/> */}
    {/* <Assignment1C5/> */}
    {/* <Assignment5 onClick={()=>{alert("Assignment5 Running")}}/>
    <Assignment7 onClose={()=>{
    let customWindow = window.open('', '_blank', '');
    customWindow.close();}}   /> */}
    {/* <Assignment3/>
    <Assignment2/>
    <Assignment1 /> */}

    
    <Border >
      <div onSubmit={handleSubmit}>
    <button onClick={handlePrint}>Print Resume</button>
    <button onClick={handleDarkMode}>{mode} Mode</button>
    <button onClick={showAddForm} >{showAddform? "Save Add":"Add"} </button>
    <button onClick={showUpdateForm} >{showUpdateform? "Save Updates":"Update"} </button>
    <button onClick={showDeleteForm} >{showDeleteform? "Save Deletes":"Delete"} </button>
    {showAddform ? <AddData dispatch={dispatch} resume={resume}   />: null}
    {/* {showUpdateform ? <UpdateData  setInterests={setInterests} setSkills={setSkills} setEducation={setEducation} setEC_items={setEC_items}  resume={resume}/>: null}
    {showDeleteform ? <DeleteData  setInterests={setInterests} setSkills={setSkills} setEducation={setEducation} setEC_items={setEC_items}  resume={resume}/>: null} */}

    <h1>Resume</h1>
    <h1>Sourav</h1>

    {interests.length > 0 ?<Interests interests={interests} /> :null }

    {skills.length > 0 ?<Skill skills={skills}  /> :null }

    {education.length > 0 ?<Education education={education} /> :null }

    {resume.experience.length > 0 ?<Experiance experience={resume.experience} /> :null }

    {EC_items.length > 0 ?<Extracurriculars layout="alpha" EC_items={EC_items}/> :null }
    </div>
    </Border>    

    {/* <Interests interests={resume.interests} /> */} 
    {/* <Skill skills={resume.skills}  /> */}
    {/* <Education education={resume.education} /> */}
    {/* <Experiance experience={resume.experience} /> */}
    {/* <Extracurriculars layout="alpha" EC_items={EC_items}/> layout alpha numbered bullets */}
    </div>
    </>
  );
}

export default App;

