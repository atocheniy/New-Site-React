import React from "react";
import { useState } from "react";
import '../styles/info.css'

function Info() {

  return (
    <div className='infoContainer'>
      <label className="headerlabel">atocheniy</label>
      <label className="label">Andrey Tocheniy</label>
      <label className="label">Full-stack developer</label>
      <label className="label">17-years · he/him</label>
    </div>
  );
}

export default Info;