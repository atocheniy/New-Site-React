import React from "react";
import { useState } from "react";
import '../styles/links.css'

function Links() {

  return (
    <div className='linksContainer'>
      <button className="button"><img className="imgBut" src="./public/GITHUB_icon-icons.com_65505.svg" style={{width: "40px", height: "40px", marginRight: "10px"}}/><label className="lbl">GitHub</label></button>
      <button className="button"><img className="imgBut" src="./public/discord-alt.svg" style={{width: "40px", height: "40px", marginRight: "10px"}}/><label className="lbl">Discord</label></button>
      <button className="button"><img className="imgBut" src="./public/4701496.png" style={{width: "40px", height: "40px", marginRight: "10px"}}/><label className="lbl">Telegram</label></button>
    </div>
  );
}

export default Links;