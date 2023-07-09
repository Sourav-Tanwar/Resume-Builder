import React from 'react'
import '../App1.css';

export default function Border(props) {
  return (
    <>
        <div id="header"></div>
            <div className="left"></div>
            <div className="stuff">
            <br/>
            {props.children}
            </div>
            <div className="right"></div>
            <div id="footer">
            <h2 id="name">Sourav</h2></div>
    </>
  )
}
