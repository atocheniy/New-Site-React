import React from "react";
import { useState } from "react";
import '../styles/achivements.css'

import Achivement  from "./achivement";

function Achivements() {

  return (
    <div className='achivementsContainer'>
        <div>
            <div className='achivementsRow'>
                <Achivement name="C#" icon="C#"/>
                <Achivement name="C++" icon="C++"/>
                <Achivement name="C" icon="C"/>
            </div>
            <div className='achivementsRow'>
                <Achivement name="Python" icon="Python"/>
                <Achivement name="JavaScript" icon="JavaScript"/>
                <Achivement name="TypeScript" icon="TypeScript"/>
            </div>
        </div>
    </div>
  );
}

export default Achivements;