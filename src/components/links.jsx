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
      <a href="https://github.com/atocheniy"><button className="button"><img className="imgBut" src={githubIcon} style={{width: "40px", height: "40px", marginRight: "10px"}}/><label className="lbl">GitHub</label></button></a>
      <a href="https://discord.com/users/940307472097357846"><button className="button"><img className="imgBut" src={discordIcon} style={{width: "40px", height: "40px", marginRight: "10px"}}/><label className="lbl">Discord</label></button></a>
      <a href="https://t.me/a_atocheniy"><button className="button"><img className="imgBut" src={telegramIcon} style={{width: "40px", height: "40px", marginRight: "10px"}}/><label className="lbl">Telegram</label></button></a>
    </div>
  );
}

export default Links;