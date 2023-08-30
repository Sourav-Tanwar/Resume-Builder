import { useState,useEffect } from "react";
import useCounter from "../../Hook/useCounter";
import useWindowSize from "../../Hook/useWindowSize";
function Counter(){
    console.log('render Counter')
    const {num, increment, decrement} = useCounter(0);
    const {width, height} = useWindowSize();
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
    return(
        <>
        <h1 >number :{num}</h1>
        <h2>Width:{width} ,Height:{height} </h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        </>
    )
}
export default Counter;