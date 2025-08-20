import React from "react";
import { useState } from "react";

import Cards from "./components/cards";
import Card from "./components/card";

import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import './Gallery.css'

function Gallery() {

  return (
    <div className='galleryContent'>
      <div className='cardsRow'>
            <Card>
                <label style={{position: "absolute", zIndex: "2", paddingLeft: "15px"}}>Code Editor</label>
                <div style={{borderRadius: "20px", width: "375px", height: "80px", background: "rgba(19, 19, 19, 0.7)", filter: "blur(40px)", backdropFilter: "blur(10px)", position: "absolute", zIndex: "1", paddingLeft: "15px", marginTop: "-30px"}}></div>
                <button className="button" style={{position: "absolute", zIndex: "2", width: "60px", height: "60px", right: "15px", bottom: "15px", borderRadius: "30%"}}><ExitToAppIcon /></button>
                <img src="./public/img3.png" alt="Image" style={{border: "1px solid red", boxShadow: "0 0 200px rgba(255, 0, 0, 0.2)"}}></img>
            </Card>

            <Card>
                <label style={{position: "absolute", zIndex: "2", paddingLeft: "15px"}}>Tetris</label>
                <div style={{borderRadius: "20px", width: "375px", height: "80px", background: "rgba(19, 19, 19, 0.7)", filter: "blur(40px)", backdropFilter: "blur(10px)", position: "absolute", zIndex: "1", paddingLeft: "15px", marginTop: "-30px"}}></div>
                <button className="button" style={{position: "absolute", zIndex: "2", width: "60px", height: "60px", right: "15px", bottom: "15px", borderRadius: "30%"}}><ExitToAppIcon /></button>
                <img src="./public/2.png" alt="Image" style={{border: "1px solid blue", boxShadow: "0 0 200px rgba(0, 68, 255, 0.2)"}}></img>
            </Card>

            <Card name="Phone Book" >
                <img src="" alt="Image"></img>
            </Card>

        </div>
    </div>
  );
}

export default Gallery;