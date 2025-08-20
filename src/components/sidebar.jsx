import { useState, useRef, useEffect } from 'react'
import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AddIcon from '@mui/icons-material/Add';

import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import EditSquareIcon from '@mui/icons-material/EditSquare';

import PropTypes from 'prop-types';

import { Button } from '@mui/material';
import { Home, Info, Settings } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import useMediaQuery from '@mui/material/useMediaQuery';

import Slide from '@mui/material/Slide';

import '../styles/sidebar.css';

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

function Sidebar({open, setOpen, toggleDrawer}) {

    const isMobile = useMediaQuery('(max-width:660px)');

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const DrawerList = (
        <Box sx={{
        width: 260,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "rgba(0, 0, 0, 0.51) !important",
        backdropFilter: "blur(10px)",
        color: "white",
        alignItems: "center"
        }} 
        role="presentation" onClick={toggleDrawer(false)}>
        <Tabs orientation="vertical" value={value} onChange={handleChange} aria-label="basic tabs example"
            TabIndicatorProps={{
              style: { 
                width: "0px",
                borderRadius: "10px",
              }
            }}
            sx={{
              ".MuiTab-root": {
                color: "white",
                borderRadius: "16px",
                textTransform: "none",
                fontWeight: "500",
                marginBottom: "6px",
                transition: "background 0.3s ease-in-out",
                border: "2px rgba(252, 252, 252, 0) solid",
                maxWidth: "220px",
                width: "220px",
                marginTop: "10px",
                fontFamily: "Inter",
                fontSize: "20px"
              },
              ".Mui-selected": {
                border: "2px #43ff46ff solid",
                color: "white",
                transition: "all 1.0s ease-in-out",
                boxShadow: "0 0 3px 3px rgba(67, 255, 73, 0.33)",
              },
              ".MuiTab-root:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              },
              paddingTop:"20px"
            }}
            >
            <Tab component={NavLink} to="/" icon={<Home />} iconPosition="start" label="About me" {...a11yProps(0)} />
            <Tab component={NavLink} to="/gallery" icon={<Settings />} iconPosition="start" label="My Projects" {...a11yProps(1)} />
          </Tabs>
        </Box>
    );

    const BackdropList = (
        <Box sx={{
        width: 260,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        color: "white",
        alignItems: "center"
        }} 
        role="presentation" onClick={toggleDrawer(false)}>
        <Tabs orientation="vertical" value={value} onChange={handleChange} aria-label="basic tabs example"
            TabIndicatorProps={{
              style: { 
                width: "0px",
                borderRadius: "10px",
              }
            }}
            sx={{
              ".MuiTab-root": {
                color: "white",
                borderRadius: "16px",
                textTransform: "none",
                fontWeight: "500",
                marginBottom: "6px",
                transition: "background 0.3s ease-in-out",
                border: "2px rgba(252, 252, 252, 0) solid",
                maxWidth: "220px",
                background: "rgba(31, 31, 31, 1)",
                width: "220px",
                marginTop: "10px",
                fontFamily: "Inter",
                fontSize: "20px"
              },
              ".Mui-selected": {
                border: "2px #43ff46ff solid",
                color: "white",
                transition: "all 1.0s ease-in-out",
                boxShadow: "0 0 3px 3px rgba(67, 255, 73, 0.33)",
              },
              ".MuiTab-root:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              },
              paddingTop:"20px"
            }}
            >
            <Tab component={NavLink} to="/" icon={<Home />} iconPosition="start" label="About me" {...a11yProps(0)} />
            <Tab component={NavLink} to="/gallery" icon={<Settings />} iconPosition="start" label="My Projects" {...a11yProps(1)} />
          </Tabs>
        </Box>
    );

    return(
        <div>
          {!isMobile ? 
            (<Drawer 
            TransitionComponent={Slide}
            transitionDuration={400} 
            sx={{
    '& .MuiDrawer-paper': {
      width: 260,
      height: "98%",              
      marginTop: "10px",           
      marginBottom: "10px",        
      marginLeft: "10px",
      borderRadius: "16px",      
      background: "rgba(22, 22, 22, 0.23)",
      backdropFilter: "blur(10px)",
      color: "white",
      borderLeft: "0.5px solid #2f2f2f44",
      borderRight: "0.5px solid #ffffff44",
      boxShadow: "0 32px 96px 0 rgba(0, 0, 0, 0.3), 0 16px 64px 0 rgba(60,60,60,0.22), 0 3px 16px 0 rgba(60,60,60,0.13)",
    },
    '& .MuiBackdrop-root': {
      backgroundColor: "rgba(0,0,0,0.45)",  
      backdropFilter: "blur(2px)",          
    }
  }} open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>) :
            (<Backdrop open={open} onClick={() => setOpen(false)} sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backdropFilter: "blur(14px)",
      }}>
        <Box sx={{
        }}>
          {BackdropList}
        </Box>
      </Backdrop>)
      }</div>
    );
}

export default Sidebar;