import './App1.css';
import Skill from './components/Skill';
import Education from './components/Education';
import Experiance from './components/Experiance';
import Interests from './components/Interests';


let resume = {
  interests: ["React","Mongo DB", "Node JS" ,"Express"],
  experience : [ {id:0, year:2021, company:'Accenture', role:'Software Tester' },
  {id:1, year:2020, company:'Cognizant', role:'Salesforce' },
  {id:2, year:2022, company:'MindTree', role:'React' },
  {id:3, year:2023, company:'Coforge', role:'Mongo DB' }],
  education:["12th 77%","10th 76%","BTech 73%" ],
  skills : [ 'react js', 'node js']
  }

function App() {
  return (
    <>
    <h1>Resume</h1>
    <h1>Sourav</h1>
    <hr />
    <Interests interests={resume.interests} />
    <hr />
    <Skill skills={resume.skills}  />
    <hr />
    <Education education={resume.education} />
    <hr />
    <Experiance experience={resume.experience} />
    <hr />
    </>
  );
}

export default App;
