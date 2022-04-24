import React from "react";
import "./Model.css"

export default function Model({ open, children, isClose }) {
  if (!open) return null;
  return (
    <>
    <div className="overlay">
      <div className="modelStyle">
        <button className="btn2" onClick={isClose}>Close Model</button>
        <div><h3>{children}</h3>
        <h1>model hover</h1>
        <h1>learning react is awesome</h1>
        
        
        
        
        </div>
      </div>

    </div>
    </>
  );
}
