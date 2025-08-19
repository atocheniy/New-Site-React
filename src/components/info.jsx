import React from "react";
import { useState } from "react";
import '../styles/info.css'

function Info() {

  return (
    <div className='infoContainer'>
      <label className="headerlabel">atocheniy</label>
      <label className="label">Andrey Tocheniy</label>
      <label className="label">atocheniy · he|him</label>
      <label className="label">17-years-old programmer</label>
    </div>
  );
}

export default Info;