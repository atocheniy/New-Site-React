import React from "react";
import { useState } from "react";
import '../styles/achivement.css'

import { FaPython } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";

function Achivement({ name, icon }) {

  return (
    <div className='achivementContainer'>
        <div className="achivementDiv">
            {icon}
        </div>
        <label>{name}</label>
    </div>
  );
}

export default Achivement;