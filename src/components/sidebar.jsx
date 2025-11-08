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
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import useMediaQuery from '@mui/material/useMediaQuery';

import Slide from '@mui/material/Slide';
import Collapse from '@mui/material/Collapse';

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

    const [mainValue, setMainValue] = useState(0);
    const [projectValue, setProjectValue] = useState(-1);


    const handleMainChange = (event, newValue) => {
      setMainValue(newValue);
      setProjectValue(-1);
    };

    const handleProjectChange = (event, newValue) => {
      setProjectValue(newValue);
      setMainValue(-1);
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
        <Typography 
          variant="subtitle2" 
          sx={{ color: "rgba(255,255,255,0.6)", mt: 2, mb: 1, fontWeight: "bold", fontSize: "24px", fontFamily: "Segoe UI, Inter, Tahoma, Geneva, Verdana, sans-serif" }}
        >
          Info
        </Typography>
         <Divider sx={{backgroundColor: "rgba(255, 255, 255, 0.1)", width: "220px", marginTop: "10px"}} />
        <Tabs orientation="vertical" value={mainValue} onChange={handleMainChange} aria-label="basic tabs example"
            TabIndicatorProps={{
              style: { 
                width: "0px",
                borderRadius: "10px",
              }
            }}
            sx={{
              ".MuiTab-root": {
                color: "white !important",
                borderRadius: "16px",
                textTransform: "none",
                fontWeight: "bold",
                marginBottom: "6px",
                transition: "background 0.3s ease-in-out",
                border: "1px rgba(58, 58, 58, 0.51) solid",
                maxWidth: "220px",
                width: "220px",
                marginTop: "10px",
                backgroundColor: "rgba(24, 24, 24, 0.7)",
                fontFamily: "Segoe UI, Inter, Tahoma, Geneva, Verdana, sans-serif",
                fontSize: "20px"
              },
              ".Mui-selected": {
                border: "2px #43ff46ff solid",
                background: "linear-gradient(145deg, rgba(67,255,70,0.15), rgba(67,255,70,0.05))",
                color: "white !important",
                transition: "all 1.0s ease-in-out",
                boxShadow: "0 0 3px 3px rgba(67, 255, 73, 0.33)",
              },
              ".MuiTab-root:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white !important",
              },
              paddingTop:"20px"
            }}
            >
            <Tab component={NavLink} to="/New-Site-React/" icon={<Home />} iconPosition="start" label="About me" {...a11yProps(0)} />
            <Tab component={NavLink} to="/New-Site-React/gallery" icon={<Settings />} iconPosition="start" label="My Projects" {...a11yProps(1)} />
          </Tabs>

         

          <Typography 
            variant="subtitle2" 
            sx={{ color: "rgba(255,255,255,0.6)", mt: 5, mb: 1, fontWeight: "bold", fontSize: "24px", fontFamily: "Segoe UI, Inter, Tahoma, Geneva, Verdana, sans-serif" }}
          >
            Projects
          </Typography>

           <Divider sx={{backgroundColor: "rgba(255, 255, 255, 0.1)", width: "220px", marginTop: "10px"}} />

          <Tabs orientation="vertical" value={projectValue} onChange={handleProjectChange} aria-label="basic tabs example"
            TabIndicatorProps={{
              style: { 
                width: "0px",
                borderRadius: "10px",
              }
            }}
            sx={{
              ".MuiTab-root": {
                color: "white !important",
                borderRadius: "16px",
                textTransform: "none",
                fontWeight: "bold",
                marginBottom: "6px",
                transition: "background 0.3s ease-in-out",
                border: "1px rgba(58, 58, 58, 0.51) solid",
                maxWidth: "220px",
                backgroundColor: "rgba(24, 24, 24, 0.7)",
                width: "220px",
                marginTop: "10px",
                fontFamily: "Segoe UI, Inter, Tahoma, Geneva, Verdana, sans-serif",
                fontSize: "20px"
              },
              ".Mui-selected": {
                border: "2px #43ff46ff solid",
                color: "white !important",
                transition: "all 1.0s ease-in-out",
                background: "linear-gradient(145deg, rgba(67,255,70,0.15), rgba(67,255,70,0.05))",
                boxShadow: "0 0 3px 3px rgba(67, 255, 73, 0.33)",
              },
              ".MuiTab-root:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white !important",
              },
              paddingTop:"20px"
            }}
            >
            <Tab component={NavLink} to="/New-Site-React/Code-Editor" iconPosition="start" label="Code Editor" {...a11yProps(2)} />
            <Tab component={NavLink} to="/New-Site-React/Tetris" iconPosition="start" label="Tetris" {...a11yProps(3)} />
            <Tab component={NavLink} to="/New-Site-React/Phone-Book" iconPosition="start" label="Phone-Book" {...a11yProps(4)} />
          </Tabs>
      <Divider />
        </Box>
    );

    const BackdropList = (
        <Box sx={{
        width: 260,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        color: "white",
        background: "rgba(16, 16, 16, 0.78) !important",
        backdropFilter: "blur(20px)",
        webkitBackdropFilter: "blur(20px)",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "inset 1px 1px 5px rgba(255,255,255,0.1),inset -2px -2px 6px rgba(0,0,0,0.1),0 8px 24px rgba(0,0,0,0.2)",
        margin: "20px",
        padding: "20px",
        alignItems: "center"
        }} 
        role="presentation" onClick={toggleDrawer(false)}>
          <Typography 
          variant="subtitle2" 
          sx={{ color: "rgba(255,255,255,0.6)", mt: 2, mb: 1, fontSize: "24px", fontWeight: "bold", fontFamily: "Segoe UI, Inter, Tahoma, Geneva, Verdana, sans-serif" }}
        >
          Info
        </Typography>
        <Divider sx={{backgroundColor: "rgba(255, 255, 255, 0.1)", width: "220px", marginTop: "10px"}} />
        <Tabs orientation="vertical" value={mainValue} onChange={handleMainChange} aria-label="basic tabs example"
            TabIndicatorProps={{
              style: { 
                width: "0px",
                borderRadius: "10px",
              }
            }}
            sx={{
              ".MuiTab-root": {
                color: "white !important",
                borderRadius: "16px",
                textTransform: "none",
                fontWeight: "bold",
                marginBottom: "6px",
                transition: "background 0.3s ease-in-out",
                border: "1px rgba(58, 58, 58, 0.51) solid",
                maxWidth: "220px",
                width: "220px",
                marginTop: "10px",
                backgroundColor: "rgba(24, 24, 24, 0.7)",
                fontFamily: "Segoe UI, Inter, Tahoma, Geneva, Verdana, sans-serif",
                fontSize: "20px"
              },
              ".Mui-selected": {
                border: "2px #43ff46ff solid",
                background: "linear-gradient(145deg, rgba(67,255,70,0.15), rgba(67,255,70,0.05))",
                color: "white !important",
                transition: "all 1.0s ease-in-out",
                boxShadow: "0 0 3px 3px rgba(67, 255, 73, 0.33)",
              },
              ".MuiTab-root:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white !important",
              },
              paddingTop:"20px"
            }}
            >
            <Tab component={NavLink} to="/New-Site-React/" icon={<Home />} iconPosition="start" label="About me" {...a11yProps(0)} />
            <Tab component={NavLink} to="/New-Site-React/gallery" icon={<Settings />} iconPosition="start" label="My Projects" {...a11yProps(1)} />
          </Tabs>

           <Typography 
            variant="subtitle2" 
            sx={{ color: "rgba(255,255,255,0.6)", mt: 5, mb: 1, fontSize: "24px", fontFamily: "Segoe UI, Inter, Tahoma, Geneva, Verdana, sans-serif" }}
          >
            Projects
          </Typography>

           <Divider sx={{backgroundColor: "rgba(255, 255, 255, 0.1)", width: "220px", marginTop: "10px"}} />

          <Tabs orientation="vertical" value={projectValue} onChange={handleProjectChange} aria-label="basic tabs example"
            TabIndicatorProps={{
              style: { 
                width: "0px",
                borderRadius: "10px",
              }
            }}
            sx={{
              ".MuiTab-root": {
                color: "white !important",
                borderRadius: "16px",
                textTransform: "none",
                fontWeight: "bold",
                marginBottom: "6px",
                transition: "background 0.3s ease-in-out",
                border: "1px rgba(58, 58, 58, 0.51) solid",
                maxWidth: "220px",
                backgroundColor: "rgba(24, 24, 24, 0.7)",
                width: "220px",
                marginTop: "10px",
                fontFamily: "Segoe UI, Inter, Tahoma, Geneva, Verdana, sans-serif",
                fontSize: "20px"
              },
              ".Mui-selected": {
                border: "2px #43ff46ff solid",
                color: "white !important",
                transition: "all 1.0s ease-in-out",
                background: "linear-gradient(145deg, rgba(67,255,70,0.15), rgba(67,255,70,0.05))",
                boxShadow: "0 0 3px 3px rgba(67, 255, 73, 0.33)",
              },
              ".MuiTab-root:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white !important",
              },
              paddingTop:"20px"
            }}
            >
            <Tab component={NavLink} to="/New-Site-React/Code-Editor" iconPosition="start" label="Code Editor" {...a11yProps(2)} />
            <Tab component={NavLink} to="/New-Site-React/Tetris" iconPosition="start" label="Tetris" {...a11yProps(3)} />
            <Tab component={NavLink} to="/New-Site-React/Phone-Book" iconPosition="start" label="Phone-Book" {...a11yProps(4)} />
          </Tabs>
      <Divider />
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
      background: "rgba(97, 97, 97, 0.23)",
      backdropFilter: "blur(8px)",
      color: "white",
      borderLeft: "0.5px solid #1e1e1e44",
      borderRight: "0.5px solid #2b2b2b44",
      borderTop: "0.5px solid #16161644",
      boxShadow: `
        inset 1px 1px 5px rgba(255,255,255,0.2), 
        inset -2px -2px 6px rgba(0,0,0,0.2),    
        0 8px 24px rgba(0,0,0,0.3)               
      `
    },
    '& .MuiBackdrop-root': {
     
      backdropFilter: "blur(2px)",          
    }
  }} open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>) :
            (<Backdrop
            transitionDuration={300}  open={open} onClick={() => setOpen(false)} sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backdropFilter: "blur(2px)",
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