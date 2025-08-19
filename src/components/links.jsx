import React from "react";
import { useState } from "react";
import '../styles/links.css'

import githubIcon from '../assets/GITHUB_icon-icons.com_65505.svg';
import discordIcon from '../assets/discord-alt.svg';
import telegramIcon from '../assets/4701496.png';

function Links() {
  console.log(githubIcon);
  return (
    <div className='linksContainer'>
      <button className="button"><img className="imgBut" src={githubIcon} style={{width: "40px", height: "40px", marginRight: "10px"}}/><label className="lbl">GitHub</label></button>
      <button className="button"><img className="imgBut" src={discordIcon} style={{width: "40px", height: "40px", marginRight: "10px"}}/><label className="lbl">Discord</label></button>
      <button className="button"><img className="imgBut" src={telegramIcon} style={{width: "40px", height: "40px", marginRight: "10px"}}/><label className="lbl">Telegram</label></button>
    </div>
  );
}

export default Links;