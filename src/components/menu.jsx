import React from 'react';
import { useState } from 'react';

import { Button } from '@mui/material';
import { Home, Info, Settings } from '@mui/icons-material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import '../styles/menu.css';

function Menu({open, setOpen, toggleDrawer}) {

    return(
        <div className='menuContainer'>
            <Button sx={{
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                minWidth: "0",
                padding: "0",
                marginLeft: "10px",
                color: "white"
            }} className='menuButton' onClick={toggleDrawer(true)} variant="text" startIcon={<MenuRoundedIcon sx={{width: "30px", height: "30px", color: "white", paddingLeft: "10px"}}/>}/>
        </div>
    );
}

export default Menu;