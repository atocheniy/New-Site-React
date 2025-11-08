import React from "react";
import { useState } from "react";
import '../styles/avatar.css'

import avatarIcon from '../assets/321321.png';

function Avatar() {

  return (
    <div className='avatarContainer'>
      <img id="image" src="https://github.com/atocheniy.png" alt="avatar"></img>
    </div>
  );
}

export default Avatar;