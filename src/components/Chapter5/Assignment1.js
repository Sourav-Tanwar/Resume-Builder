import React,{useState,useEffect} from 'react'

export default function Assignment1() {
    const [date, setDate] = useState(new Date());

    let str =date.toLocaleTimeString()
    if (str.slice(5,7)==="00"){
        console.log(date.toLocaleTimeString().slice(0,7))
    }

    function refreshClock() {
        setDate(new Date());
      }
    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
          clearInterval(timerId);
        };
    }, []);
    
    

// function time(){
//     const currentDateTime = new Date();
//     const timeText = currentDateTime.toLocaleTimeString();
//     setTime(timeText);
    
// }
// setInterval(time,1000);
      


  return (
    <div>
        <h2>Assignment1</h2>
        <span>{date.toLocaleTimeString()}</span>

    </div>
  )
}
