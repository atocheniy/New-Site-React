import React from "react";
import { useState } from "react";
import InfoCard from "./InfoCard";
import Achivements from "./components/achivements";
import Cards from "./components/cards";
import Card from "./components/card";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

import Icon1 from './assets/img3.png';
import Icon2 from './assets/2.png';
import Icon3 from './assets/250822_10h13m08s_screenshot.png';

import './PresentationPage.css'

function PresentationPage({title, subtitle, image, data}) {

  console.log(title, subtitle, image, data);

  return (
    <div className='appContent presentationContent'>
      <div className="imageContainer">
        <img src={image}  alt="Image"></img>
      </div>

      <div className="dataContainer">
        <label className="titlelbl" style={{}}>{title}</label>
        <label className="subtitlelbl" style={{}}>{subtitle}</label>
      </div>

      <div style={{ paddingTop: "100px"}}>
        <div className='cardsRow'>
              <Card>
                  <label style={{ fontSize: "28px", fontWeight: "600" }}>About</label>
                  <p style={{ fontSize: "20px", lineHeight: "1.4", color: "#ccc" }}>
                    A modern and convenient code editor that combines minimalism, speed, and smart features.
                  </p>
              </Card>

              <Card>
                  <label style={{ fontSize: "28px", fontWeight: "600" }}>Languages</label>
                  <p style={{ fontSize: "20px", lineHeight: "1.4", color: "#ccc" }}>
                    With it, you can comfortably write in C#, Python, JavaScript, and other languages.
                  </p>
              </Card>

              <Card>
                <label style={{ fontSize: "28px", fontWeight: "600" }}>Activity</label>
                  <p style={{ fontSize: "20px", lineHeight: "1.4", color: "#ccc" }}>
                    Minimalism and aesthetics: dark theme to reduce eye strain, acrylic transparency in panels.
                  </p>
              </Card>

          </div>
        </div>
    </div>
  );
}

export default PresentationPage;