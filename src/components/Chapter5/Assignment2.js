import React,{useState} from 'react'

export default function Assignment2() {
    const [timer,setTimer] =useState(0)

    const handleStart =()=>{
        let startBtn = document.getElementById("startbtn");
        startBtn.disabled = true;
        setTimer(timer+1)
    }
    setTimeout(handleStart, 1000);
    const handleStop =()=>{
        setTimer(0)
        
    }
  return (
    <div>
        <h2>Assignment2</h2>
        <span>{timer}</span>
        <button id="startBtn" onClick={handleStart(false)} >Start</button>
        <button onClick={handleStop} >Stop</button>

    </div>
  )
}
