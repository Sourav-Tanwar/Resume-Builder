import './App1.css';
import Skill from './components/Skill';
import Education from './components/Education';
import Experiance from './components/Experiance';
import Interests from './components/Interests';
import Border from './components/Border';
import Extracurriculars from './components/Extracurriculars';




let resume = {
  interests: ["React","Mongo DB", "Node JS" ,"Express"],
  experience : [ {id:0, year:2021, company:'Accenture', role:'Software Tester' },
  {id:1, year:2020, company:'Cognizant', role:'Salesforce' },
  {id:2, year:2022, company:'MindTree', role:'React' },
  {id:3, year:2023, company:'Coforge', role:'Mongo DB' }],
  education:["12th 77%","10th 76%","BTech 73%" ],
  skills : [ 'react js', 'node js']
  }
  let  EC_items = ["Cricket","Chess","Mobile Games"]

 const handleDarkMode= ()=>{
  let current_class= document.getElementById('content').className
  //  console.log(document.getElementById('content').className)
  if (current_class==="stuff"){
    document.getElementById('content').className = 'dark-mode';
  }
  else{
    document.getElementById('content').className = 'stuff';
  }
 }

function App() {

  return (
    <>
    <Border >

    <button onClick={handleDarkMode}>Change Mode</button>
    <h1>Resume</h1>
    <h1>Sourav</h1>
    <hr />
    {resume.interests.length > 0 ?<Interests interests={resume.interests} /> :null }
    {/* <Interests interests={resume.interests} /> */} 
    <hr />
    {resume.skills.length > 0 ?<Skill skills={resume.skills}  /> :null }
    {/* <Skill skills={resume.skills}  /> */}
    <hr />
    {resume.education.length > 0 ?<Education education={resume.education} /> :null }
    {/* <Education education={resume.education} /> */}
    <hr />
    {resume.experience.length > 0 ?<Experiance experience={resume.experience} /> :null }
    {/* <Experiance experience={resume.experience} /> */}
    <hr />
    {EC_items.length > 0 ?<Extracurriculars layout="alpha" EC_items={EC_items}/> :null }
    {/* <Extracurriculars layout="alpha" EC_items={EC_items}/> layout alpha numbered bullets */}
    </Border>    

    </>
  );
}

export default App;
