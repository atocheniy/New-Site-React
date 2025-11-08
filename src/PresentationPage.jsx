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

function PresentationPage({title, subtitle, image, data, paddingTop, color, colorShadow}) {

  const pageStyles = {
    '--border-color': color,
    '--shadow-color': colorShadow
  };

  console.log(title, subtitle, image, data);

  return (
    <div className='appContent presentationContent'>
      <div className="imageContainer" >
        <img src={image} style={pageStyles} alt="Image"></img>
      </div>

      <div className="dataContainer" style={{paddingTop: paddingTop ? paddingTop : "30px"}}>
        <label className="titlelbl" style={{}}>{title}</label>
        <label className="subtitlelbl" style={{}}>{subtitle}</label>
      </div>

      <div style={{ paddingTop: "100px"}}>
        <div className='cardsRow'>
              <Card>
                  <label style={{ fontSize: "28px", fontWeight: "600" }}>{data.card1.title}</label>
                  <p style={{ fontSize: "20px", lineHeight: "1.4", color: "#ccc" }}>
                   {data.card1.description}
                  </p>
              </Card>

              <Card>
                  <label style={{ fontSize: "28px", fontWeight: "600" }}>{data.card2.title}</label>
                  <p style={{ fontSize: "20px", lineHeight: "1.4", color: "#ccc" }}>
                    {data.card2.description}
                  </p>
              </Card>

              <Card>
                <label style={{ fontSize: "28px", fontWeight: "600" }}>{data.card3.title}</label>
                  <p style={{ fontSize: "20px", lineHeight: "1.4", color: "#ccc" }}>
                    {data.card3.description}
                  </p>
              </Card>

          </div>
        </div>
    </div>
  );
}

export default PresentationPage;