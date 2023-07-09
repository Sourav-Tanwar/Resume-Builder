import React from 'react'
import Skill from '../components/Skill';
import Education from '../components/Education';
import Experiance from '../components/Experiance';
import Interests from '../components/Interests';

export default function Border({resume}) {
  return (
    <>
        <div id="header"></div>
            <div className="left"></div>
            <div className="stuff">
            <br/>
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
            </div>
            <div className="right"></div>
            <div id="footer">
            <h2 id="name">Sourav</h2></div>
    </>
  )
}
