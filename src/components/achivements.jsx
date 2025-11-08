import React from "react";
import { useState } from "react";
import '../styles/achivements.css'

import Achivement  from "./achivement";

import { FaPython } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";

import C from '../assets/c_icon_213148.png';
import Cplusplus from '../assets/c_icon_132529.png';
import Csharp from '../assets/c_sharp_icon_213045.png';

function Achivements() {

  return (
    <div className='achivementsContainer'>
        <div>
            <div className='achivementsRow'>
                <Achivement name="C#, .NET, WPF" icon={<img src={Csharp} style={{width: "40px"}} alt="CSharp" />} />
                <Achivement name="C++, Console" icon={<img src={Cplusplus} style={{width: "35px"}} alt="Cplusplus" />} />
                <Achivement name="C, Console" icon={<img src={C} style={{width: "40px"}} alt="C" />} />
            </div>
            <div className='achivementsRow'>
                <Achivement name="Python, Tkinter, GUI" icon={<FaPython size={40} style={{marginRight: "10px"}}/>}/>
                <Achivement name="JavaScript, React, Node.js" icon={<BiLogoJavascript size={40} style={{marginRight: "10px"}}/>}/>
                <Achivement name="TypeScript, Angular" icon={<BiLogoTypescript size={40} style={{marginRight: "10px"}}/>}/>
            </div>
        </div>
    </div>
  );
}

export default Achivements;