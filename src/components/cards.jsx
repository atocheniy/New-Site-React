import React from "react";
import { useState } from "react";
import '../styles/cards.css'

import Card  from "./card";

function Cards() {

  return (
    <div className='cardsContainer'>
        <div className='cardsRow'>
            <Card name="Activity" >
                <a href="https://github.com/ryo-ma/github-profile-trophy" target="_blank" rel="noreferrer">
                    <img 
                    src="https://github-readme-streak-stats.herokuapp.com/?user=atocheniy&theme=dark&fire=white&currStreakNum=white&sideNums=white" 
                    alt="GitHub Trophies" 
                    style={{ maxWidth: "100%", height: "auto" }} 
                    />
                </a>
            </Card>

            <Card name="Stats GitHub" data="">
                <a href="https://github.com/ryo-ma/github-profile-trophy" target="_blank">
                    <img src="https://github-readme-stats.vercel.app/api?username=atocheniy&show_icons=true&theme=dark&hide_title=false&hide_border=true&currStreakNum=white&sideNums=white" alt="GitHub Trophies" style={{maxWidth: "100%", height: "auto"}}/>
                </a>
            </Card>

            <Card name="Programming Languages" data="">
                <a href="https://github.com/ryo-ma/github-profile-trophy" target="_blank">
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=atocheniy&theme=dark&layout=compact" alt="GitHub Trophies" style={{maxWidth: "100%", height: "auto"}}/>
                </a>
            </Card>

        </div>
    </div>
  );
}

export default Cards;