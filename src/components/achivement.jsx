import React from "react";
import { useState } from "react";
import '../styles/achivement.css'

function Achivement({ name, icon }) {

  return (
    <div className='achivementContainer'>
        <div className="achivementDiv">
            <label>code</label>
        </div>
        <label>{name}</label>
    </div>
  );
}

export default Achivement;