import { useState } from "react";


const useCounter =()=>{

    const [num, setCount]= useState(0);

    const increment =()=>{
        setCount(num+1)
    }
    const decrement =()=>{
        setCount(num-1)
    }
    return { num, increment, decrement };
}

export default useCounter;