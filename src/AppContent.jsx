import React from "react";
import { useState } from "react";
import InfoCard from "./InfoCard";
import Achivements from "./components/achivements";
import Cards from "./components/cards";

import './App.css'

function AppContent() {

  return (
    <div className='appContent'>
      <InfoCard/>
      <Achivements/>
      <Cards/>
    </div>
  );
}

export default AppContent;