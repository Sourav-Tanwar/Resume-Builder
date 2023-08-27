import { useState,useEffect } from "react";
import useCounter from "../../Hook/useCounter";
function Counter(){
    console.log('render Counter')
    const {num, increment, decrement} = useCounter(0);

    function handleIncrement(e){
        e.stopPropagation();
        increment()
        
        console.log(num)
    }
    function handleDecrement(e){
        e.stopPropagation();
        decrement()
        
        console.log(num)
    }
    // useEffect(()=>{

    // },[num])
    return(
        <>
        <h1 >number :{num}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        </>
    )

}

export default Counter;