import React from "react";
import { useState } from "react";

import Cards from "./components/cards";
import Card from "./components/card";

import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import Icon1 from './assets/img3.png';
import Icon2 from './assets/2.png';
import Icon3 from './assets/250822_10h13m08s_screenshot.png';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

import './Gallery.css'

function Gallery() {

  return (
    <div className='galleryContent'>
      <label className="lblgallery" style={{fontFamily: "Inter", fontSize: "64px", paddingBottom: "30px"}}>My Projects</label>
      <div className='cardsRow'>
            <Card>
                <label style={{position: "absolute", zIndex: "2", paddingLeft: "15px"}}>Code Editor</label>
                <div style={{borderRadius: "20px", width: "375px", height: "80px", background: "rgba(19, 19, 19, 0.7)", filter: "blur(40px)", backdropFilter: "blur(10px)", position: "absolute", zIndex: "1", paddingLeft: "15px", marginTop: "-30px"}}></div>
                <NavLink to="/New-Site-React/Code-Editor"> <button className="button" style={{position: "absolute", zIndex: "2", width: "60px", height: "60px", right: "15px", bottom: "15px", borderRadius: "30%"}}><ExitToAppIcon /></button></NavLink>
                <img src={Icon1} alt="Image" style={{border: "1px solid red", boxShadow: "0 0 200px rgba(255, 0, 0, 0.2)"}}></img>
            </Card>

            <Card>
                <label style={{position: "absolute", zIndex: "2", paddingLeft: "15px"}}>Tetris</label>
                <div style={{borderRadius: "20px", width: "375px", height: "80px", background: "rgba(19, 19, 19, 0.7)", filter: "blur(40px)", backdropFilter: "blur(10px)", position: "absolute", zIndex: "1", paddingLeft: "15px", marginTop: "-30px"}}></div>
                <NavLink to="/New-Site-React/Tetris"><button className="button" style={{position: "absolute", zIndex: "2", width: "60px", height: "60px", right: "15px", bottom: "15px", borderRadius: "30%"}}><ExitToAppIcon /></button></NavLink>
                <img src={Icon2} alt="Image" style={{border: "1px solid blue", boxShadow: "0 0 200px rgba(0, 68, 255, 0.2)"}}></img>
            </Card>

            <Card>
                <label style={{position: "absolute", zIndex: "2", paddingLeft: "15px"}}>Phone Book</label>
                <div style={{borderRadius: "20px", width: "375px", height: "80px", background: "rgba(19, 19, 19, 0.7)", filter: "blur(40px)", backdropFilter: "blur(10px)", position: "absolute", zIndex: "1", paddingLeft: "15px", marginTop: "-30px"}}></div>
                <NavLink to="/New-Site-React/Phone-Book"><button className="button" style={{position: "absolute", zIndex: "2", width: "60px", height: "60px", right: "15px", bottom: "15px", borderRadius: "30%"}}><ExitToAppIcon /></button></NavLink>
                <img src={Icon3} alt="Image" style={{border: "1px solid gray", boxShadow: "0 0 200px rgba(42, 42, 42, 0.2)"}}></img>
            </Card>

        </div>
    </div>
  );
}

export default Gallery;