import React from 'react'

export default function Assignment1() {

    const handleMouseOver =()=>{
        const element = document.querySelector("img");
        element.style.height = '280px';
        element.style.width = '280px';
    }
    const handleMouseLeave =()=>{
        const element = document.querySelector("img");
        element.style.height = '180px';
        element.style.width = '180px';
    }

    const HandleDoubleClick =()=>{
        alert("Double Clicked")
    }

    const HandleSingleClick =()=>{
        console.log("Single Clicked")
    }
    const HandelFocus =()=>{
        console.log("focused on the textbox")
    }
    const HandleBlur =()=>{
        console.log("out of textbox")
    }
    const HandleCopy =()=>{
        alert("Text Copied")
    }
    const HandleCut =()=>{
        alert("Text Cutted")
    }
    const HandlePaste =()=>{
        alert("Text Pasted")
    }

  return (
    <div >
    <h2>Assignment1</h2>
    <div style={{margin:"20px"}}>
    <img onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} src="https://cdn.pixabay.com/photo/2018/03/23/08/27/thai-fried-rice-3253027__340.jpg"  alt="..." style={{height:"180px", objectFit:"fill"}} />
    </div>

    <div style={{margin:"20px"}}>
    <button onDoubleClick ={HandleDoubleClick} onClick={HandleSingleClick} >Click Me</button>
    </div>

    <form action="">
        <label htmlFor="Name">Name: </label>
        <input type="text"  onFocus={HandelFocus}  onBlur={HandleBlur} onCopy={HandleCopy} onCut={HandleCut} onPaste={HandlePaste}  />
    </form>

    </div>
  )
}
