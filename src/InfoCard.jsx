import React from "react";
import { useState } from "react";
import './App.css'

import Avatar from "./components/avatar";
import Info from "./components/info";
import Links from "./components/links";

function InfoCard() {

  return (
    <div className='infoCard'>
      <Avatar/>
      <div className='infoCardContent'>
        <Info/>
        <Links/>
      </div>
    </div>
  );
}

export default InfoCard;