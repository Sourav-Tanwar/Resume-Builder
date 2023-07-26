import './App1.css';
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

  const  nations  = [
    { name:  'India', value:  'IN' },
    { name:  'Pak', value:  'PK' },
    { name:  'Bangladesh', value:  'BG' },
  ] 

function App() {
  let button_name ="Dark";
  const handleDarkMode= (button_name)=>{
    console.log(button_name)
    let current_class= document.getElementById('content').className
    //  console.log(document.getElementById('content').className)
    if (current_class==="stuff"){
      document.getElementById('content').className = 'dark-mode';
      button_name = "Light"
      console.log(button_name)
    }
    else{
      document.getElementById('content').className = 'stuff';
      button_name = "Dark"
      console.log(button_name)
    }
   }



   const handlePrint =()=>{
      window.print()
   }
  return (
    <>
    <div >    {/*  onClick={()=>console.log("App")} */}
    

    <Assignment2C6></Assignment2C6>




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


    {/* <Border >
    <button onClick={handlePrint}>Print Resume</button>
    <button onClick={handleDarkMode}>{button_name} Change Mode</button>
    <h1>Resume</h1>
    <h1>Sourav</h1>
    <hr />
    {resume.interests.length > 0 ?<Interests interests={resume.interests} /> :null }
    <hr />
    {resume.skills.length > 0 ?<Skill skills={resume.skills}  /> :null }
    <hr />
    {resume.education.length > 0 ?<Education education={resume.education} /> :null }
    <hr />
    {resume.experience.length > 0 ?<Experiance experience={resume.experience} /> :null }
    <hr />
    {EC_items.length > 0 ?<Extracurriculars layout="alpha" EC_items={EC_items}/> :null }
    </Border>     */}

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

