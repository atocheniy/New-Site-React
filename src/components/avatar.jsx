import React from "react";
import { useState } from "react";
import '../styles/avatar.css'

function Avatar() {

  return (
    <div className='avatarContainer'>
      <img id="image" src="./public/321321.png" alt="avatar"></img>
    </div>
  );
}

export default Avatar;